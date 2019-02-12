using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSHTML5.Wrappers.Syncfusion.EssentialJS1.RichTextEditor
{
    public class Configuration
    {
        /// <summary>
        /// Contains the path to the "ej.web.all.min.css" file to use for the control.
        /// </summary>
        public string LocationOfEjWebAllCss { get; set; }

        /// <summary>
        /// Contains the path to the "ej.rte.min.js" file to use for the control.
        /// </summary>
        public string LocationOfEjRTEJS { get; set; }

        internal bool AreSourcesSet
        {
            get
            {
                return (LocationOfEjRTEJS != null && LocationOfEjWebAllCss != null);
            }
        }
    }
}
