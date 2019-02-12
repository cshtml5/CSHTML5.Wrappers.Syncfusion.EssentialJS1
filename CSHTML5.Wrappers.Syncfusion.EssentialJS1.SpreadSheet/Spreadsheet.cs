using CSHTML5;
using CSHTML5.Wrappers.Syncfusion.EssentialJS1.Common;
using CSHTML5.Wrappers.Syncfusion.EssentialJS1.SpreadSheet;
using ej_spreadsheet.ej;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TypeScriptDefinitionsSupport;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Data;

namespace ej_spreadsheet.ej
{
    public partial class Spreadsheet : JSComponent, IItemsSourceHolder
    {
        public static Configuration Configuration = new Configuration();

        static  JSLibrary _jsLibrary;

        public override JSLibrary JSLibrary { get { return _jsLibrary; } }

        public static readonly DependencyProperty ItemsSourceProperty = DependencyProperty.Register(
            "ItemsSource",
            typeof(IEnumerable),
            typeof(Spreadsheet),
            new PropertyMetadata(OnItemsSourceChanged)
        );
        public IEnumerable ItemsSource
        {
            get { return (IEnumerable)GetValue(ItemsSourceProperty); }
            set { SetValue(ItemsSourceProperty, value); }
        }

        GridItemsSourceBinder dataBinder;

        public bool ShowHeaders { get; set; }

        protected override void JSComponent_Loaded(object sender, RoutedEventArgs e)
        {
            if (Configuration.AreSourcesSet)
            {
                _jsLibrary = new JSLibrary(
                    css: new Interop.ResourceFile[]
                    {

                        new Interop.ResourceFile("ej.web", Configuration.LocationOfEjWebAllCss) // e.g. "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/themes/default-theme/ej.web.all.min.css"
                    },
                    js: new Interop.ResourceFile[]
                    {
                        new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/scripts/jquery-1.10.2.min.js"),
                        new Interop.ResourceFile("jQueryGlobalize", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/scripts/jquery.globalize.min.js"),
                        new Interop.ResourceFile("jQueryValidate", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/scripts/jquery.validate.min.js"),
                        new Interop.ResourceFile("jsRender", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/scripts/jsrender.min.js"),
                        new Interop.ResourceFile("ej.spreadsheet", Configuration.LocationOfEjSpreadsheetJS) // e.g. "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.Spreadsheet/scripts/ej.spreadsheet.min.js"
                    }
                );
                base.JSComponent_Loaded(sender, e);
            }
            else
            {
                MessageBox.Show(@"Before you can use the Syncfusion Spreadsheet Control, you must add to your project the corresponding libraries.
To do so, please follow the tutorial at: http://www.cshtml5.com"); //todo: put the address of the tutorial.
                base.AbortLoading();
            }
        }

        partial void Initialize()
        {
            base.Initialize(initJSInstance: true);
        }

        protected override void InitializeJSInstance()
        {
            // Get a reference to the HTML DOM representation of the control
            object div = this.DomElement;

            // Make sure that the div has a unique ID
            Interop.ExecuteJavaScript("if (!$0.id) { $0.id = $1 }", div, Guid.NewGuid().ToString());

            // Render the control
            Model model = this.model;
            if (model != null)
            {
                Interop.ExecuteJavaScript(@"
                jQuery('#' + $0.id).ejSpreadsheet($1);
                ", div, model.UnderlyingJSInstance);
            }
            else
            {
                Interop.ExecuteJavaScript(@"
                jQuery('#' + $0.id).ejSpreadsheet();
                ", div);
            }

            // Initialize the underlying JS instance
            this.UnderlyingJSInstance = Interop.ExecuteJavaScript(@"
                jQuery('#' + $0.id).data('ejSpreadsheet')", div);

            this.SetupDataBinding();
        }

        void SetupDataBinding()
        {
            this.dataBinder = new GridItemsSourceBinder(this, this.UpdateCell, this.UpdateHeader);

            // Setup JS event handlers for OneWayToSource/TwoWay data binding
            this.model.cellSave = this.OnCellSave;
        }

        public void UpdateCell(int rowIndex, int columnIndex, object newValue)
        {
            if (this.ShowHeaders) ++rowIndex;

            var cell = new CellsCoordinates
            {
                rowIndex = rowIndex,
                colIndex = columnIndex
            };
            string value = Convert.ToString(newValue ?? "");

            this.XLEdit.updateCell(Utils.ToJSObject(cell), value);
        }

        void UpdateHeader(int columnIndex, string newValue)
        {
            if (this.ShowHeaders)
            {
                var cell = new CellsCoordinates
                {
                    rowIndex = 0,
                    colIndex = columnIndex
                };

                var className = JSObject.Helper_ConvertTo<string>(Interop.ExecuteJavaScript(@"
                    $0.XLFormat.getFormatHashCode({'font-weight': 'Bold'})", this.UnderlyingJSInstance));

                this.XLEdit.updateCellValue(Utils.ToJSObject(cell), newValue, className, null);
            }
        }

        class CellsCoordinates
        {
            public int rowIndex { get; set; }
            public int colIndex { get; set; }
        }

        void OnCellSave(CellSaveEventArgs args)
        {
            int rowIndex = (int)args.rowIndex;
            int columnIndex = (int)args.colIndex;
            object newValue = args.value;

            if (this.ShowHeaders) --rowIndex;

            var bindingExpr = this.GetBindingExpression(ItemsSourceProperty);
            if ((bindingExpr == null || bindingExpr.ParentBinding.Mode != BindingMode.TwoWay) ||
                (this.ShowHeaders && rowIndex == -1) ||
                !this.dataBinder.UpdateSource(rowIndex, columnIndex, newValue))
            {
                args.value = args.prevValue; // Won't work in the browser without this
                this.UpdateCell(rowIndex, columnIndex, args.prevValue);
            }
        }

        static async void OnItemsSourceChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var @this = d as Spreadsheet;
            var oldValue = e.OldValue as IEnumerable;
            var newValue = e.NewValue as IEnumerable;

            if (oldValue != newValue)
            {
                await @this.JSInstanceLoaded;

                @this.dataBinder.UpdateTarget(oldValue, newValue);
            }
        }
    }
}
