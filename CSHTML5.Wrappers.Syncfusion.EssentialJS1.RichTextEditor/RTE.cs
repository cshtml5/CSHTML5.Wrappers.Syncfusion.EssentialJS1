using CSHTML5;
using CSHTML5.Wrappers.Syncfusion.EssentialJS1.Common;
using CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeScriptDefinitionsSupport;
using Windows.UI.Xaml;

namespace ej_rte.ej
{
    public partial class RTE : JSComponent
    {
        public static Configuration Configuration = new Configuration();

        static JSLibrary _jsLibrary;

        public override JSLibrary JSLibrary { get { return _jsLibrary; } }

        protected override void JSComponent_Loaded(object sender, RoutedEventArgs e)
        {
            if (Configuration.AreSourcesSet)
            {
                _jsLibrary = new JSLibrary(
                    css: new Interop.ResourceFile[]
                    {
                        new Interop.ResourceFile("ej.web", Configuration.LocationOfEjWebAllCss) // e.g. "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor/themes/default-theme/ej.web.all.min.css"
                    },
                    js: new Interop.ResourceFile[]
                    {
                        new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor/scripts/jquery-1.10.2.min.js"),
                        new Interop.ResourceFile("jQueryEasing", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor/scripts/jquery.easing.1.3.min.js"),
                        new Interop.ResourceFile("jsRender", "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor/scripts/jsrender.min.js"),
                        new Interop.ResourceFile("ej.rte", Configuration.LocationOfEjRTEJS) // e.g. "ms-appx:///CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor/scripts/ej.rte.min.js"
                    }
                );
                base.JSComponent_Loaded(sender, e);
            }
            else
            {
                MessageBox.Show(@"Before you can use the Syncfusion RichTextEditor Control, you must add to your project the corresponding libraries.
To do so, please follow the tutorial at: http://www.cshtml5.com."); //todo: put the address of the tutorial.
                base.AbortLoading();
            }
        }

        partial void Initialize()
        {
            base.Initialize(initJSInstance: true);
        }

        partial void Initialize(IJSObject element, Model options)
        {
            base.Initialize();
        }

        protected override string InitializeHtml()
        {
            return @"<textarea style='width: 100%; height: 100%;'>";
        }

        protected override void InitializeJSInstance()
        {
            // Get a reference to the HTML DOM representation of the control
            object div = this.DomElement;

            // Make sure that the div has a unique ID
            Interop.ExecuteJavaScript("if (!$0.id) { $0.id = $1 }", div, Guid.NewGuid().ToString());

            // Render the control
            Interop.ExecuteJavaScript(@"
                jQuery('#' + $0.id).ejRTE();
                ", div);

            // Initialize the underlying JS instance
            this.UnderlyingJSInstance = Interop.ExecuteJavaScript(@"
                jQuery('#' + $0.id).data('ejRTE')", div);
        }
    }
}
