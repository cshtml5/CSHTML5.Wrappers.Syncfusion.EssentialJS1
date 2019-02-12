using CSHTML5.Wrappers.Syncfusion.EssentialJS1.Common.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeScriptDefinitionsSupport;

namespace CSHTML5.Wrappers.Syncfusion.EssentialJS1.Common
{
    public static class Utils
    {
        public static JSObject ToJSObject(object o)
        {
            return new JSObject(Interop.ExecuteJavaScript("JSON.parse($0)", JsonConvert.SerializeObject(o)));
        }

        public static object GetNestedPropertyValue(object obj, string path)
        {
            return GetNestedPropertyValue(obj, path.Split('.'));
        }

        static object GetNestedPropertyValue(object obj, string[] path)
        {
            object value = null;

            var prop = obj.GetType().GetProperty(path[0]);
            if (prop != null)
            {
                value = prop.GetValue(obj);
                if (path.Length > 1)
                    value = GetNestedPropertyValue(value, path.Skip(1).ToArray());
            }

            return value;
        }

        public static IEnumerable<Type> GetItemTypes(this IEnumerable e)
        {
            return e.GetType()
                    .GetInterfaces()
                    .Where(t => t.IsGenericType
                        && t.GetGenericTypeDefinition() == typeof(IEnumerable<>))
                    .Select(t => t.GetGenericArguments()[0]);
        }

        public static Type GetItemType(this IEnumerable enumerable)
        {
            Type itemType = null;
            var genericEnumerable = enumerable.Cast<object>();

            if (genericEnumerable.Count() > 0)
                itemType = genericEnumerable.First().GetType();
            else
            {
                var itemTypes = enumerable.GetItemTypes();
                if (itemTypes.Count() == 1)
                    itemType = itemTypes.First();
            }

            return itemType;
        }
    }
}
