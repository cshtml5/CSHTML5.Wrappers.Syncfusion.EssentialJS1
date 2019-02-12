declare namespace ej {
    class RTE extends ej.Widget {
        static fn: RTE;
        constructor(element: JQuery | Element, options?: RTE.Model);
        static Locale: any;
        model: RTE.Model;
        defaults: RTE.Model;

        /** Returns the range object.
         * @returns {any}
         */
        createRange(): any;

        /** Disables the RTE control.
         * @returns {void}
         */
        disable(): void;

        /** Disables the corresponding tool in the RTE ToolBar.
         * @returns {void}
         */
        disableToolbarItem(): void;

        /** Enables the RTE control.
         * @returns {void}
         */
        enable(): void;

        /** Enables the corresponding tool in the toolbar when the tool is disabled.
         * @returns {void}
         */
        enableToolbarItem(): void;

        /** Performs the action value based on the given command.
         * @param {string} Command Name.
         * @param {any} Content to be inserted as argument.
         * @param {boolean} Boolean value to specify whether the argument is textNode or not, this is optional.
         * @returns {void}
         */
        executeCommand(cmdName: string, args: any, textnodeType?: boolean): void;

        /** Focuses the RTE control.
         * @returns {void}
         */
        focus(): void;

        /** Gets the command status of the selected text based on the given comment in the RTE control.
         * @returns {boolean}
         */
        getCommandStatus(): boolean;

        /** Gets the Document from the RTE control.
         * @returns {Document}
         */
        getDocument(): Document;

        /** Gets the HTML string from the RTE control.
         * @returns {HTMLElement}
         */
        getHtml(): HTMLElement;

        /** Gets the selected HTML string from the RTE control.
         * @returns {HTMLElement}
         */
        getSelectedHtml(): HTMLElement;

        /** Gets the content as string from the RTE control.
         * @returns {string}
         */
        getText(): string;

        /** Hides the RTE control.
         * @returns {void}
         */
        hide(): void;

        /** Inserts new item to the target contextmenu node.
         * @returns {void}
         */
        insertMenuOption(): void;

        /** Add a table column at the right or left of the specified cell
         * @param {boolean} If itâ€™s true, add a column at the left of the cell, otherwise add a column at the right of the cell
         * @param {JQuery} Column will be added based on the given cell element
         * @returns {HTMLElement}
         */
        insertColumn(before?: boolean, cell?: JQuery): HTMLElement;

        /** To add a table row below or above the specified cell.
         * @param {boolean} If itâ€™s true, add a row before the cell, otherwise add a row after the cell
         * @param {JQuery} Row will be added based on the given cell element
         * @returns {HTMLElement}
         */
        insertRow(before?: boolean, cell?: JQuery): HTMLElement;

        /** This method helps to insert/paste the content at the current cursor (caret) position or the selected content to be replaced with our text by passing the value as parameter to the
         * pasteContent method in the Editor.
         * @param {string} paste content
         * @returns {void}
         */
        pasteContent(html: string): void;

        /** Refreshes the RTE control.
         * @returns {void}
         */
        refresh(): void;

        /** Removes the specified table column.
         * @param {JQuery} Remove the given column element
         * @returns {void}
         */
        removeColumn(cell?: JQuery): void;

        /** Removes the specified table row.
         * @param {JQuery} Remove the given row element
         * @returns {void}
         */
        removeRow(cell?: JQuery): void;

        /** Deletes the specified table.
         * @param {JQuery} Remove the given table
         * @returns {void}
         */
        removeTable(table?: JQuery): void;

        /** Removes the target menu item from the RTE contextmenu.
         * @returns {void}
         */
        removeMenuOption(): void;

        /** Removes the given tool from the RTE Toolbar.
         * @returns {void}
         */
        removeToolbarItem(): void;

        /** Selects all the contents within the RTE.
         * @returns {void}
         */
        selectAll(): void;

        /** Selects the contents in the given range.
         * @returns {void}
         */
        selectRange(): void;

        /** Sets the color picker model type rendered initially in the RTE control.
         * @returns {void}
         */
        setColorPickerType(): void;

        /** Sets the HTML string from the RTE control.
         * @returns {void}
         */
        setHtml(): void;

        /** Displays the RTE control.
         * @returns {void}
         */
        show(): void;
    }
    export namespace RTE {

        export interface Model {

            /** Enables/disables the editing of the content.
             * @Default {True}
             */
            allowEditing?: boolean;

            /** RTE control can be accessed through the keyboard shortcut keys.
             * @Default {True}
             */
            allowKeyboardNavigation?: boolean;

            /** When the property is set to true, it focuses the RTE at the time of rendering.
             * @Default {false}
             */
            autoFocus?: boolean;

            /** Based on the content size, its height is adjusted instead of adding the scrollbar.
             * @Default {false}
             */
            autoHeight?: boolean;

            /** This API holds configuration setting for paste cleanup behavior.
             * @Default {{ listConversion: false, cleanCSS: false,	removeStyles: false, cleanElements: false }}
             */
            pasteCleanupSettings?: PasteCleanupSettings;

            /** Sets the colorCode to display the color of the fontColor and backgroundColor in the font tools of the RTE.
             * @Default {[000000, FFFFFF, C4C4C4, ADADAD, 595959, 262626, 4f81bd, dbe5f1, b8cce4, 95b3d7, 366092, 244061, c0504d, f2dcdb, e5b9b7, d99694, 953734,632423, 9bbb59, ebf1dd, d7e3bc,
             * c3d69b, 76923c, 4f6128, 8064a2, e5e0ec, ccc1d9, b2a2c7, 5f497a, 3f3151, f79646, fdeada, fbd5b5, fac08f,e36c09, 974806]}
             */
            colorCode?: any;

            /** The number of columns given are rendered in the color palate popup.
             * @Default {6}
             */
            colorPaletteColumns?: number;

            /** The number of rows given are rendered in the color palate popup.
             * @Default {6}
             */
            colorPaletteRows?: number;

            /** Sets the root class for the RTE theme. This cssClass API helps the usage of custom skinning option for the RTE control by including this root class in CSS.
             */
            cssClass?: string;

            /** Enables/disables the RTE controlâ€™s accessibility or interaction.
             * @Default {True}
             */
            enabled?: boolean;

            /** When the property is set to true, it returns the encrypted text.
             * @Default {false}
             */
            enableHtmlEncode?: boolean;

            /** Maintain the values of the RTE after page reload.
             * @Default {false}
             */
            enablePersistence?: boolean;

            /** Shows the resize icon and enables the resize option in the RTE.
             * @Default {True}
             */
            enableResize?: boolean;

            /** Shows the RTE in the RTL direction.
             * @Default {false}
             */
            enableRTL?: boolean;

            /** Formats the contents based on the XHTML rules.
             * @Default {false}
             */
            enableXHTML?: boolean;

            /** Enables the tab key action with the RichTextEditor content.
             * @Default {True}
             */
            enableTabKeyNavigation?: boolean;

            /** This API allows to enable url and fileName for pdf export.
             * @Default {null}
             */
            exportToPdfSettings?: ExportToPdfSettings;

            /** This API allows to enable url and fileName for word export.
             * @Default {null}
             */
            exportToWordSettings?: ExportToWordSettings;

            /** Load the external CSS file inside Iframe.
             * @Default {null}
             */
            externalCSS?: string;

            /** This API allows to enable the file browser support in the RTE control to browse, create, delete and upload the files in the specified current directory.
             * @Default {null}
             */
            fileBrowser?: FileBrowser;

            /** Sets the fontName in the RTE.
             * @Default {{text: Segoe UI, value: Segoe UI },{text: Arial, value: Arial,Helvetica,sans-serif },{text: Courier New, value: Courier New,Courier,Monospace },{text: Georgia, value:
             * Georgia,serif },{text: Impact, value: Impact,Charcoal,sans-serif },{text: Lucida Console, value: Lucida Console,Monaco,Monospace },{text: Tahoma, value: Tahoma,Geneva,sans-serif
             * },{text: Times New Roman, value: Times New Roman },{text: Trebuchet MS, value: Trebuchet MS,Helvetica,sans-serif },{text: Verdana, value: Verdana,Geneva,sans-serif}}
             */
            fontName?: any;

            /** Sets the fontSize in the RTE.
             * @Default {{ text: 1, value: 1 },{ text: 2 (10pt), value: 2 },{ text: 3 (12pt), value: 3 },{ text: 4 (14pt), value: 4 },{ text: 5 (18pt), value: 5 },{ text: 6 (24pt), value: 6 },{
             * text: 7 (36pt), value: 7 }}
             */
            fontSize?: any;

            /** Sets the format in the RTE.
             * @Default {{ text: Paragraph, value: &lt;p&gt;, spriteCssClass: e-paragraph },{ text: Quotation, value: &lt;blockquote&gt;, spriteCssClass: e-quotation },{ text: Heading 1, value:
             * &lt;h1&gt;, spriteCssClass: e-h1 },{ text: Heading 2, value: &lt;h2&gt;, spriteCssClass: e-h2 },{ text: Heading 3, value: &lt;h3&gt;, spriteCssClass: e-h3 },{ text: Heading 4,
             * value: &lt;h4&gt;, spriteCssClass: e-h4 },{ text: Heading 5, value: &lt;h5&gt;, spriteCssClass: e-h5 },{ text: Heading 6, value: &lt;h6&gt;, spriteCssClass: e-h6}}
             */
            format?: string;

            /** Defines the height of the RTE textbox.
             * @Default {370}
             */
            height?: string | number;

            /** Specifies the HTML Attributes of the ejRTE.
             * @Default {{}}
             */
            htmlAttributes?: any;

            /** Sets the given attributes to the iframe body element.
             * @Default {{}}
             */
            iframeAttributes?: any;

            /** This API allows the image browser to support in the RTE control to browse, create, delete, and upload the image files to the specified current directory.
             * @Default {null}
             */
            imageBrowser?: ImageBrowser;

            /** This API allows to enable the url for connecting to RTE import.
             * @Default {null}
             */
            importSettings?: ImportSettings;

            /** Enables/disables responsive support for the RTE control toolbar items during the window resizing time.
             * @Default {false}
             */
            isResponsive?: boolean;

            /** Sets the culture in the RTE when you set the localization values are needs to be assigned to the corresponding text as follows.
             * @Default {en-US}
             */
            locale?: string;

            /** Sets the maximum height for the RTE outer wrapper element.
             * @Default {null}
             */
            maxHeight?: string | number;

            /** Sets the maximum length for the RTE outer wrapper element.
             * @Default {7000}
             */
            maxLength?: number;

            /** Sets the maximum width for the RTE outer wrapper element.
             * @Default {null}
             */
            maxWidth?: string | number;

            /** Sets the minimum height for the RTE outer wrapper element.
             * @Default {280}
             */
            minHeight?: string | number;

            /** Sets the minimum width for the RTE outer wrapper element.
             * @Default {400}
             */
            minWidth?: string | number;

            /** Sets the name in the RTE. When the name value is not initialized, the ID value is assigned to the name.
             */
            name?: string;

            /** Shows ClearAll icon in the RTE footer.
             * @Default {false}
             */
            showClearAll?: boolean;

            /** Shows the clear format in the RTE footer.
             * @Default {true}
             */
            showClearFormat?: boolean;

            /** Shows the Custom Table in the RTE.
             * @Default {True}
             */
            showCustomTable?: boolean;

            /** The showContextMenu property helps to enable custom context menu within editor area.
             * @Default {True}
             */
            showContextMenu?: boolean;

            /** This API is used to set the default dimensions for the image and video. When this property is set to true, the image and video dialog displays the dimension option.
             * @Default {false}
             */
            showDimensions?: boolean;

            /** Shows the FontOption in the RTE.
             * @Default {True}
             */
            showFontOption?: boolean;

            /** Shows footer in the RTE. When the footer is enabled, it displays the HTML tag, word Count, character count, clear format, resize icon and clear all the content icons, by default.
             * @Default {false}
             */
            showFooter?: boolean;

            /** Shows the HtmlSource in the RTE footer.
             * @Default {false}
             */
            showHtmlSource?: boolean;

            /** When the cursor is placed or when the text is selected in the RTE, it displays the tag info in the footer.
             * @Default {True}
             */
            showHtmlTagInfo?: boolean;

            /** Shows the toolbar in the RTE.
             * @Default {True}
             */
            showToolbar?: boolean;

            /** Counts the total characters and displays it in the RTE footer.
             * @Default {True}
             */
            showCharCount?: boolean;

            /** Enables or disables rounded corner UI look for RTE.
             * @Default {false}
             */
            showRoundedCorner?: boolean;

            /** Counts the total words and displays it in the RTE footer.
             * @Default {True}
             */
            showWordCount?: boolean;

            /** The given number of columns render the insert table pop.
             * @Default {10}
             */
            tableColumns?: number;

            /** The given number of rows render the insert table pop.
             * @Default {8}
             */
            tableRows?: number;

            /** Sets the tools in the RTE and gets the inner display order of the corresponding group element. Tools are dependent on the toolsList property.
             * @Default {formatStyle: [format],style: [bold, italic, underline, strikethrough],alignment: [justifyLeft, justifyCenter, justifyRight, justifyFull],lists: [unorderedList,
             * orderedList],indenting: [outdent, indent],doAction: [undo, redo],links: [createLink,removeLink],images: [image],media: [video],tables: [createTable, addRowAbove, addRowBelow,
             * addColumnLeft, addColumnRight, deleteRow, deleteColumn, deleteTable]],view:[â€œfullScreenâ€,zoomIn,zoomOut],print:[print]}
             */
            tools?: Tools;

            /** Specifies the list of groups and order of those groups displayed in the RTE toolbar.  The toolsList property is used to get the root group order and tools property is used to get
             * the inner order of the corresponding groups displayed. When the value is not specified, it gets its default display order and tools.
             * @Default {[formatStyle, font, style, effects, alignment, lists, indenting, clipboard, doAction, clear, links, images, media, tables, casing,view, customTools,print,edit]}
             */
            toolsList?: any[];

            /** Specifies the overflow mode for RTE responsive toolbar
             * @Default {Popup}
             */
            toolbarOverflowMode?: ej.RTE.ToolbarOverflowMode | string;

            /** Display the hints for the tools in the Toolbar.
             * @Default {{ associate: mouseenter, showShadow: true, position: { stem: { horizontal: left, vertical: top }  }, tip: { size: { width: 5, height: 5 }, isBalloon: false }}
             */
            tooltipSettings?: any;

            /** Gets the undo stack limit.
             * @Default {50}
             */
            undoStackLimit?: number;

            /** The given string value is displayed in the editable area.
             * @Default {null}
             */
            value?: string;

            /** Sets the jQuery validation rules to the Rich Text Editor.
             * @Default {null}
             */
            validationRules?: any;

            /** Sets the jQuery validation error message to the Rich Text Editor.
             * @Default {null}
             */
            validationMessage?: any;

            /** Defines the width of the RTE textbox.
             * @Default {786}
             */
            width?: string | number;

            /** Increases and decreases the contents zoom range in percentage
             * @Default {0.05}
             */
            zoomStep?: string | number;

            /** Fires when changed successfully.
             */
            change?(e: ChangeEventArgs): void;

            /** Fires when the RTE is created successfully
             */
            create?(e: CreateEventArgs): void;

            /** Fires when mouse click on menu items.
             */
            contextMenuClick?(e: ContextMenuClickEventArgs): void;

            /** Fires before the RTE is destroyed.
             */
            destroy?(e: DestroyEventArgs): void;

            /** Fires when the commands are executed successfully.
             */
            execute?(e: ExecuteEventArgs): void;

            /** Fires when the keydown action is successful.
             */
            keydown?(e: KeydownEventArgs): void;

            /** Fires when the keyup action is successful.
             */
            keyup?(e: KeyupEventArgs): void;

            /** Fires before the RTE Edit area is rendered and after the toolbar is rendered.
             */
            preRender?(e: PreRenderEventArgs): void;

            /** Fires when the text is selected in the text area
             */
            select?(e: SelectEventArgs): void;
        }

        export interface ChangeEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the RTE model
             */
            model?: any;

            /** returns the name of the event
             */
            type?: string;
        }

        export interface CreateEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface ContextMenuClickEventArgs {

            /** returns clicked menu item text.
             */
            text?: string;

            /** returns clicked menu item element.
             */
            element?: any;

            /** returns the selected item.
             */
            selectedItem?: number;
        }

        export interface DestroyEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface ExecuteEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface KeydownEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface KeyupEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface PreRenderEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface SelectEventArgs {

            /** When the event is canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the RTE model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;

            /** Returns the event object
             */
            event?: any;
        }

        export interface PasteCleanupSettings {

            /** This API is used to convert the list elements pasted from word document to editor.
             * @Default {false}
             */
            listConversion?: boolean;

            /** This API is used to clean the unwanted css in the elements pasted from word document to editor.
             * @Default {false}
             */
            cleanCSS?: boolean;

            /** This API is used to remove all styles in the elements pasted from word document to editor.
             * @Default {false}
             */
            removeStyles?: boolean;

            /** This API is used to clean the unwanted elements pasted from word document to editor.
             * @Default {false}
             */
            cleanElements?: boolean;
        }

        export interface ExportToPdfSettings {

            /** This API is used to receive the server-side handler for export related operations.
             */
            url?: string;

            /** Specifies the file name for the exported pdf file.
             */
            fileName?: string;
        }

        export interface ExportToWordSettings {

            /** This API is used to receive the server-side handler for export related operations.
             */
            url?: string;

            /** Specifies the file name for the exported word file.
             */
            fileName?: string;
        }

        export interface FileBrowser {

            /** This API is used to receive the server-side handler for file related operations.
             */
            ajaxAction?: string;

            /** Specifies the file type extension shown in the file browser window.
             */
            extensionAllow?: string;

            /** Specifies the directory to perform operations like create, delete and rename folder and files, and upload the selected files to the current directory.
             */
            filePath?: string;
        }

        export interface ImageBrowser {

            /** This API is used to receive the server-side handler for the file related operations.
             */
            ajaxAction?: string;

            /** Specifies the file type extension shown in the image browser window.
             */
            extensionAllow?: string;

            /** Specifies the directory to perform operations like create, delete and rename folder and files, and upload the selected images to the current directory.
             */
            filePath?: string;
        }

        export interface ImportSettings {

            /** This API is used to receive the server-side handler for import operations.
             */
            url?: string;
        }

        export interface ToolsCustomOrderedList {

            /** Specifies the name for customOrderedList item.
             */
            name?: string;

            /** Specifies the title for customOrderedList item.
             */
            tooltip?: string;

            /** Specifies the styles for customOrderedList item.
             */
            css?: string;

            /** Specifies the text for customOrderedList item.
             */
            text?: string;

            /** Specifies the list style for customOrderedList item.
             */
            listStyle?: string;

            /** Specifies the image for customOrderedList item.
             */
            listImage?: string;
        }

        export interface ToolsCustomUnorderedList {

            /** Specifies the name for customUnorderedList item.
             */
            name?: string;

            /** Specifies the title for customUnorderedList item.
             */
            tooltip?: string;

            /** Specifies the styles for customUnorderedList item.
             */
            css?: string;

            /** Specifies the text for customUnorderedList item.
             */
            text?: string;

            /** Specifies the list style for customUnorderedList item.
             */
            listStyle?: string;

            /** Specifies the image for customUnorderedList item.
             */
            listImage?: string;
        }

        export interface Tools {

            /** Specifies the alignment tools and the display order of this tool in the RTE toolbar.
             */
            alignment?: any;

            /** Specifies the casing tools and the display order of this tool in the RTE toolbar.
             */
            casing?: any[];

            /** Specifies the clear tools and the display order of this tool in the RTE toolbar.
             */
            clear?: any[];

            /** Specifies the clipboard tools and the display order of this tool in the RTE toolbar.
             */
            clipboard?: any[];

            /** Specifies the edit tools and the displays tool in the RTE toolbar.
             */
            edit?: any[];

            /** Specifies the doAction tools and the display order of this tool in the RTE toolbar.
             */
            doAction?: any[];

            /** Specifies the effect of tools and the display order of this tool in RTE toolbar.
             */
            effects?: any[];

            /** Specifies the font tools and the display order of this tool in the RTE toolbar.
             */
            font?: any[];

            /** Specifies the formatStyle tools and the display order of this tool in the RTE toolbar.
             */
            formatStyle?: any[];

            /** Specifies the image tools and the display order of this tool in the RTE toolbar.
             */
            images?: any[];

            /** Specifies the indent tools and the display order of this tool in the RTE toolbar.
             */
            indenting?: any[];

            /** Specifies the link tools and the display order of this tool in the RTE toolbar.
             */
            links?: any[];

            /** Specifies the list tools and the display order of this tool in the RTE toolbar.
             */
            lists?: any[];

            /** Specifies the media tools and the display order of this tool in the RTE toolbar.
             */
            media?: any[];

            /** Specifies the style tools and the display order of this tool in the RTE toolbar.
             */
            style?: any[];

            /** Specifies the table tools and the display order of this tool in the RTE toolbar.
             */
            tables?: any[];

            /** Specifies the view tools and the display order of this tool in the RTE toolbar.
             */
            view?: any[];

            /** Specifies the print tools and the display order of this tool in the RTE toolbar.
             */
            print?: any[];

            /** Specifies the importExport tools and the display order of this tool in the RTE toolbar.
             */
            importExport?: any[];

            /** Specifies the customOrderedList tools and the display order of this tool in the RTE toolbar.
             */
            customOrderedList?: ToolsCustomOrderedList[];

            /** Specifies the customUnOrderedList tools and the display order of this tool in the RTE toolbar.
             */
            customUnorderedList?: ToolsCustomUnorderedList[];
        }

        enum ToolbarOverflowMode {

            ///To display the RTE toolbar overflow items as popup
            Popup,

            ///To display the RTE toolbar overflow items as inline toolbar
            Inline
        }

    }
}