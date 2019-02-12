using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CSHTML5.Wrappers.Syncfusion.EssentialJS1.Common
{
    public class GridItemsSourceBinder
    {
        IItemsSourceHolder holder;
        Type itemType;

        Action<int, int, object> updateCell;
        Action<int, string> updateHeader;

        Dictionary<object, int> rowIndexes;
        Dictionary<string, int> columnIndexes;

        public Type ItemType { get { return this.itemType; } }

        public GridItemsSourceBinder(IItemsSourceHolder holder, Action<int, int, object> updateCell = null, Action<int, string> updateHeader = null)
        {
            this.holder = holder;

            this.updateCell = updateCell ?? new Action<int, int, object>((p1, p2, p3) => { });
            this.updateHeader = updateHeader ?? new Action<int, string>((p1, p2) => { });

            this.rowIndexes = new Dictionary<object, int>();
            this.columnIndexes = new Dictionary<string, int>();

            this.UpdateHeaders(null, this.holder.ItemsSource);
        }

        public void UpdateTarget(IEnumerable oldValue, IEnumerable newValue)
        {
            this.UpdateHeaders(oldValue, newValue);
            this.UpdateItems(oldValue, newValue);

            if (newValue != null)
            {
                if (newValue is INotifyCollectionChanged)
                {
                    ((INotifyCollectionChanged)newValue).CollectionChanged -= this.OnItemsCollectionChanged;
                    ((INotifyCollectionChanged)newValue).CollectionChanged += this.OnItemsCollectionChanged;
                }
            }
        }

        public bool UpdateSource(int rowIndex, int columnIndex, object newValue)
        {
            bool succeeded = false;

            if (this.itemType != null)
            {
                var props = this.itemType.GetProperties();
                try
                {
                    var newPropValue = Convert.ChangeType(newValue, props[columnIndex].PropertyType);
                    if (newPropValue != null)
                    {
                        var enumerator = this.holder.ItemsSource.GetEnumerator();
                        int i = 0;
                        while (i <= rowIndex)
                        {
                            enumerator.MoveNext();
                            ++i;
                        }
                        props[columnIndex].SetValue(enumerator.Current, newPropValue);
                        succeeded = true;
                    }
                }
                catch (Exception) { }
            }

            return succeeded;
        }

        public void OnItemsCollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            this.UpdateItems(e.OldItems, e.NewItems);
        }

        public void OnItemPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            int rowIndex = this.rowIndexes[sender];
            int columnIndex = this.columnIndexes[e.PropertyName];
            object newValue = sender.GetType().GetProperty(e.PropertyName).GetValue(sender);

            this.updateCell(rowIndex, columnIndex, newValue);
        }

        public void UpdateRow(int index, object item)
        {
            foreach (var prop in item.GetType().GetProperties())
            {
                object newValue = null;
                try
                {
                    if (prop.GetMethod.IsStatic) //have to check for that because for some reason Bridge throws an Exception when trying to call prop.GetValue(item) when it is a static property.
                    {
                        newValue = prop.GetValue(null);
                    }
                    else
                    {
                        newValue = prop.GetValue(item);
                    }
                }
                catch (Exception) { }

                this.updateCell(index, this.columnIndexes[prop.Name], newValue);
            }
        }

        public void UpdateItems(IEnumerable oldItems, IEnumerable newItems)
        {
            if (oldItems != null)
            {
                foreach (var item in oldItems)
                {
                    this.StopListening(item);
                    this.UpdateRow(this.rowIndexes[item], new { });
                    this.rowIndexes.Remove(item);
                }
            }
            if (newItems != null)
            {
                var newItemsArray = newItems.Cast<object>().ToArray();
                for (int i = 0; i < newItemsArray.Length; ++i)
                {
                    this.StartListening(newItemsArray[i]);
                    this.UpdateRow(i, newItemsArray[i]);
                    this.rowIndexes[newItemsArray[i]] = i;
                }
            }
        }

        public void UpdateHeaders(IEnumerable oldItemsSource, IEnumerable newItemsSource)
        {
            Type itemType;
            PropertyInfo[] props;

            if (oldItemsSource != null)
            {
                itemType = oldItemsSource.GetItemType();
                if (itemType != null)
                {
                    props = itemType.GetProperties();
                    for (int i = 0; i < props.Length; ++i)
                    {
                        this.updateHeader(i, null);
                        this.columnIndexes.Remove(props[i].Name);
                    }
                }
            }
            if (newItemsSource != null)
            {
                itemType = newItemsSource.GetItemType();
                this.itemType = itemType;
                if (itemType != null)
                {
                    props = itemType.GetProperties();
                    for (int i = 0; i < props.Length; ++i)
                    {
                        this.updateHeader(i, props[i].Name);
                        this.columnIndexes[props[i].Name] = i;
                    }
                }
            }
        }

        public void StartListening(object item)
        {
            if (item is INotifyPropertyChanged)
                ((INotifyPropertyChanged)item).PropertyChanged += this.OnItemPropertyChanged;
        }

        public void StopListening(object item)
        {
            if (item is INotifyPropertyChanged)
                ((INotifyPropertyChanged)item).PropertyChanged -= this.OnItemPropertyChanged;
        }

        public void StopListeningToItemsChanges(IEnumerable itemsSource)
        {
            if (itemsSource != null)
            {
                foreach (var item in itemsSource)
                {
                    this.StopListening(item);
                }
            }
        }
    }
}
