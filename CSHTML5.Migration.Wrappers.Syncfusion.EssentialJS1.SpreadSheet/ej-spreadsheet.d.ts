declare namespace ej {
    class Spreadsheet {
		/* Removed because it triggers some weird bugs at runtime
		
        static fn: Spreadsheet;
        constructor(element: JQuery | Element, options?: Spreadsheet.Model);
        static Locale: any;
		*/
        model: Spreadsheet.Model;
        defaults: Spreadsheet.Model;

        /** This method is used to add custom formulas in Spreadsheet.
         * @param {string} Pass the name of the formula.
         * @param {string} Pass the name of the function.
         * @returns {void}
         */
        addCustomFormula(formulaName: string, functionName: string): void;

        /** This method is used to add a new sheet in the last position of the sheet container.
         * @returns {void}
         */
        addNewSheet(): void;

        /** This method is used to blank the workbook in Spreadsheet.
         * @returns {void}
         */
        blankWorkbook(): void;

        /** It is used to clear all the data and format in the specified range of cells in Spreadsheet.
         * @param {string|any[]} Optional. If range is specified, then it will clear all content in the specified range else it will use the current selected range.
         * @returns {void}
         */
        clearAll(range?: string | any[]): void;

        /** This property is used to clear all the formats applied in the specified range in Spreadsheet.
         * @param {string|any[]} Optional. If range is specified, then it will clear all format in the specified range else it will use the current selected range.
         * @returns {void}
         */
        clearAllFormat(range?: string | any[]): void;

        /** Used to clear the applied border in the specified range in Spreadsheet.
         * @param {string|any[]} Optional. If range is specified, then it will clear border in the specified range else it will use the current selected range.
         * @returns {void}
         */
        clearBorder(range?: string | any[]): void;

        /** This property is used to clear the contents in the specified range in Spreadsheet.
         * @param {string|any[]} Optional. If the range is specified, then it will clear the content in the specified range else it will use the current selected range.
         * @returns {void}
         */
        clearContents(range?: string | any[]): void;

        /** This method is used to remove only the data in the range denoted by the specified range name.
         * @param {string} Pass the defined rangeSettings property name.
         * @returns {void}
         */
        clearRange(rangeName: string): void;

        /** It is used to remove data in the specified range of cells based on the defined property.
         * @param {any[]|string} Optional. If range is specified, it will clear data for the specified range else it will use the current selected range.
         * @param {string} Optional. If property is specified, it will remove the specified property in the range else it will remove default properties
         * @param {any} Optional.
         * @param {boolean} Optional. pass {{'`true`' | markdownify}}, if you want to skip the hidden rows
         * @param {any} Optional. Pass the status to perform undo and redo operation.
         * @param {any} Optional. It specifies whether to skip element processing or not.
         * @returns {void}
         */
        clearRangeData(range?: any[] | string, property?: string, cells?: any, skipHiddenRow?: boolean, status?: any, skipCell?: any): void;

        /** This method is used to clear undo and redo collections in the Spreadsheet.
         * @returns {void}
         */
        clearUndoRedo(): void;

        /** This method is used to copy or move the sheets in Spreadsheet.
         * @param {number} Pass the sheet index that you want to copy or move.
         * @param {number} Pass the position index where you want to copy or move.
         * @param {boolean} Pass {{'`true`' | markdownify}},If you want to copy sheet or else it will move sheet.
         * @returns {void}
         */
        copySheet(fromIdx: number, toIdx: number, isCopySheet: boolean): void;

        /** This method is used to delete the entire column which is selected.
         * @param {number} Pass the start column index.
         * @param {number} Pass the end column index.
         * @returns {void}
         */
        deleteEntireColumn(startCol: number, endCol: number): void;

        /** This method is used to delete the entire row which is selected.
         * @param {number} Pass the start row index.
         * @param {number} Pass the end row index.
         * @returns {void}
         */
        deleteEntireRow(startRow: number, endRow: number): void;

        /** This method is used to delete a particular sheet in the Spreadsheet.
         * @param {number} Pass the sheet index to perform delete action.
         * @returns {void}
         */
        deleteSheet(idx: number): void;

        /** This method is used to delete the selected cells and shift the remaining cells to left.
         * @param {any} Row index and column index of the starting cell.
         * @param {any} Row index and column index of the ending cell.
         * @returns {void}
         */
        deleteShiftLeft(startCell: any, endCell: any): void;

        /** This method is used to delete the selected cells and shift the remaining cells up.
         * @param {any} Row index and column index of the start cell.
         * @param {any} Row index and column index of the end cell.
         * @returns {void}
         */
        deleteShiftUp(startCell: any, endCell: any): void;

        /** This method is used to edit data in the specified range of cells based on its corresponding rangeSettings.
         * @param {string} Pass the defined rangeSettings property name.
         * @param {() => void} Pass the function that you want to perform range edit.
         * @returns {void}
         */
        editRange(rangeName: string, fn: () => void): void;

        /** This method is used to get the activation panel in the Spreadsheet.
         * @returns {HTMLElement}
         */
        getActivationPanel(): HTMLElement;

        /** This method is used to get the active cell object in Spreadsheet. It will returns object which contains rowIndex and colIndex of the active cell.
         * @param {number} Optional. If sheetIdx is specified, it will return the active cell object in specified sheet index else it will use the current sheet index
         * @returns {any}
         */
        getActiveCell(sheetIdx?: number): any;

        /** This method is used to get the active cell element based on the given sheet index in the Spreadsheet.
         * @param {number} Optional. If sheetIndex is specified, it will return the active cell element in specified sheet index else it will use the current active sheet index.
         * @returns {HTMLElement}
         */
        getActiveCellElem(sheetIdx?: number): HTMLElement;

        /** This method is used to get the current active sheet index in Spreadsheet.
         * @returns {number}
         */
        getActiveSheetIndex(): number;

        /** This method is used to get the auto fill element in Spreadsheet.
         * @returns {HTMLElement}
         */
        getAutoFillElem(): HTMLElement;

        /** This method is used to get the alpha range of the given index in Spreadsheet.
         * @param {number} Pass the start row index.
         * @param {number} Pass the start column index.
         * @param {number} Pass the end row index.
         * @param {number} Pass the end column index.
         * @returns {String}
         */
        getAlphaRange(sRIndex: number, sCIndex: number, eRIndex: number, eCIndex: number): string;

        /** This method is used to get the cell element based on specified row and column index in the Spreadsheet.
         * @param {number} Pass the row index.
         * @param {number} Pass the column index.
         * @param {number} Optional. Pass the sheet index that you want to get cell.
         * @returns {HTMLElement}
         */
        getCell(rowIdx: number, colIdx: number, sheetIdx?: number): HTMLElement;

        /** This method is used to get the data settings in the Spreadsheet.
         * @param {number} Pass the sheet index.
         * @returns {number}
         */
        getDataSettings(sheetIdx: number): number;

        /** This method is used to get the frozen columns index in the Spreadsheet.
         * @param {number} Pass the sheet index.
         * @returns {number}
         */
        getFrozenColumns(sheetIdx: number): number;

        /** This method is used to get the frozen row index in Spreadsheet.
         * @param {number} Pass the sheet index.
         * @returns {number}
         */
        getFrozenRows(sheetIdx: number): number;

        /** This method is used to get the hyperlink data as object from the specified cell in Spreadsheet.
         * @param {HTMLElement} Pass the DOM element to get hyperlink
         * @returns {any}
         */
        getHyperlink(cell: HTMLElement): any;

        /** This method is used to get the keys from the given object in Spreadsheet.
         * @param {any} Pass the Object
         * @returns {any[]}
         */
        getObjectKeys(obj: any): any[];

        /** This method is used to get all cell elements in the specified range.
         * @param {string} Pass the range that you want to get the cells.
         * @param {number} Pass the index of the sheet.
         * @param {boolean} Optional. Pass {{'`true`' | markdownify}}, if you want to skip the hidden rows.
         * @returns {HTMLElement}
         */
        getRange(range: string, sheetIdx: number, skipHiddenRow?: boolean): HTMLElement;

        /** This method is used to get the data in specified range in Spreadsheet.
         * @param {any} Optional. Pass the range, property, sheetIdx, valueOnly in options.
         * @returns {any[]}
         */
        getRangeData(options?: any): any[];

        /** This method is used to get the data as object in the specified range.
         * @param {any} Pass the start cell.
         * @param {any} Pass the end cell.
         * @param {boolean} Optional. Pass {{'`true`' | markdownify}}, if you want to skip the hidden rows.
         * @returns {any}
         */
        getRangeDataAsObject(startcell: any, endcell: any, skipHiddenRow?: boolean): any;

        /** This method is used to get the range indices array based on the specified alpha range in Spreadsheet.
         * @param {string} Pass the alpha range that you want to get range indices.
         * @returns {any[]}
         */
        getRangeIndices(range: string): any[];

        /** This method is used to get the sheet details based on the given sheet index in Spreadsheet.
         * @param {number} Pass the sheet index to get the sheet object.
         * @returns {any}
         */
        getSheet(sheetIdx: number): any;

        /** This method is used to get the sheet content div element of Spreadsheet.
         * @param {number} Pass the sheet index to get the sheet content.
         * @returns {HTMLElement}
         */
        getSheetElement(sheetIdx: number): HTMLElement;

        /** This method is used to get all the sheets in workbook.
         * @returns {any[]}
         */
        getSheets(): any[];

        /** This method is used to send a paging request to the specified sheet Index in the Spreadsheet.
         * @param {number} Pass the sheet index to perform paging at specified sheet index
         * @param {boolean} Pass {{'`true`' | markdownify}} to create a new sheet. If the specified sheet index is already exist, it navigate to that sheet else it create a new sheet.
         * @returns {void}
         */
        gotoPage(sheetIdx: number, newSheet: boolean): void;

        /** This method is used to hide the pivot table activationPanel in the Spreadsheet.
         * @returns {void}
         */
        hideActivationPanel(): void;

        /** This method is used to hide the entire columns from the specified range (startCol, endCol) in Spreadsheet.
         * @param {number} Index of the start column.
         * @param {number} Optional. Index of the end column.
         * @returns {void}
         */
        hideColumn(startCol: number, endCol: number): void;

        /** This method is used to hide the formula bar in Spreadsheet.
         * @returns {void}
         */
        hideFormulaBar(): void;

        /** This method is used to hide the rows, based on the specified row index in Spreadsheet.
         * @param {number} Index of the start row.
         * @param {number}  Optional. Index of the end row.
         * @returns {void}
         */
        hideRow(startRow: number, endRow: number): void;

        /** This method is used to hide the sheet based on the specified sheetIndex or sheet name in the Spreadsheet.
         * @param {string|number} Pass the sheet name or index that you want to hide.
         * @returns {void}
         */
        hideSheet(sheetIdx: string | number): void;

        /** This method is used to hide the displayed waiting pop-up in Spreadsheet.
         * @returns {void}
         */
        hideWaitingPopUp(): void;

        /** This method is used to insert a column before the active cell's column in the Spreadsheet.
         * @param {number} Pass start column.
         * @param {number} Pass end column.
         * @returns {void}
         */
        insertEntireColumn(startCol: number, endCol: number): void;

        /** This method is used to insert a row before the active cell's row in the Spreadsheet.
         * @param {number} Pass start row.
         * @param {number} Pass end row.
         * @returns {void}
         */
        insertEntireRow(startRow: number, endRow: number): void;

        /** This method is used to insert a new sheet to the left of the current active sheet.
         * @returns {void}
         */
        insertSheet(): void;

        /** This method is used to insert cells in the selected or specified range and shift remaining cells to bottom.
         * @param {any} Row index and column index of the start cell.
         * @param {any} Row index and column index of the end cell.
         * @returns {void}
         */
        insertShiftBottom(startCell: any, endCell: any): void;

        /** This method is used to insert cells in the selected or specified range and shift remaining cells to right.
         * @param {any} Row index and column index of the start cell.
         * @param {any} Row index and column index of the end cell.
         * @returns {void}
         */
        insertShiftRight(startCell: any, endCell: any): void;

        /** This method is used to import excel file manually by using form data.
         * @param {any} Pass the form data object to import files manually.
         * @returns {void}
         */
        import(importRequest: any): void;

        /** This method is used to load JSON data in Spreadsheet.
         * @param {any} Pass the response that you want to load.
         * @returns {void}
         */
        loadFromJSON(response: any): void;

        /** This method is used to lock/unlock the range of cells in active sheet. Lock cells are activated only after the sheet is protected. Once the sheet is protected it is unable to
         * lock/unlock cells.
         * @param {string|any[]} Pass the alpha range cells or array range of cells.
         * @param {string} Optional. By default is {{'`true`' | markdownify}}. If it is {{'`false`' | markdownify}} locked cells are unlocked.
         * @returns {void}
         */
        lockCells(range: string | any[], isLocked?: string): void;

        /** This method is used to merge cells by across in the Spreadsheet.
         * @param {string} Optional. To pass the cell range or selected cells are process.
         * @param {boolean} Optional. If pass {{'`true`' | markdownify}} it does not show alert.
         * @returns {void}
         */
        mergeAcrossCells(range?: string, alertStatus?: boolean): void;

        /** This method is used to merge the selected cells in the Spreadsheet.
         * @param {string|any[]} Optional. To pass the cell range or selected cells are process.
         * @param {boolean} Optional. If pass {{'`true`' | markdownify}} it does not show alert.
         * @returns {void}
         */
        mergeCells(range?: string | any[], alertStatus?: boolean): void;

        /** This method is used to select a cell or range in the Spreadsheet.
         * @param {any} Pass the start cell to perform selection.
         * @param {any} Pass the end cell to perform selection.
         * @returns {void}
         */
        performSelection(startCell: any, endCell: any): void;

        /** This method is used to protect or unprotect active sheet.
         * @param {boolean} Optional. By default is {{'`true`' | markdownify}}. If it is {{'`false`' | markdownify}} active sheet is unprotected.
         * @returns {void}
         */
        protectSheet(isProtected?: boolean): void;

        /** This method is used to perform the redo action in Spreadsheet.
         * @returns {void}
         */
        redo(): void;

        refresh(): void; // Not officially in the API, although it works in the browser (not without bugs though)

        /** This method is used to refresh the content in Spreadsheet.
         * @param {number} Pass the index of the sheet.
         * @returns {void}
         */
        refreshContent(sheetIdx: number): void;

        /** This method is used to refresh the Spreadsheet.
         * @returns {void}
         */
        refreshSpreadsheet(): void;

        /** This method is used to remove custom formulae in Spreadsheet.
         * @param {string} Pass the name of the formula.
         * @param {string} Pass the name of the function.
         * @returns {void}
         */
        removeCustomFormula(formulaName: string, functionName: string): void;

        /** This method is used to remove the hyperlink from selected cells of current sheet.
         * @param {string} Hyperlink remove from the specified range.
         * @param {boolean} Optional. If it is {{'`true`' | markdownify}}, It will clear link only not format.
         * @param {boolean} Optional. Pass the status to perform undo and redo operations.
         * @param {any} Optional. Pass the cells that you want to remove hyperlink.
         * @param {boolean} Optional. Pass {{'`true`' | markdownify}}, if you want to skip the hidden rows.
         * @returns {void}
         */
        removeHyperlink(range: string, isClearHLink?: boolean, status?: boolean, cells?: any, skipHiddenRow?: boolean): void;

        /** This method is used to remove the range data and its defined rangeSettings property based on the specified range name.
         * @param {string} Pass the defined rangeSetting property name.
         * @returns {void}
         */
        removeRange(rangeName: string): void;

        /** This method is used to remove the readonly option for the specified range.
         * @param {string|any[]} Pass the range.
         * @returns {void}
         */
        removeReadOnly(range?: string | any[]): void;

        /** This method is used to save JSON data in Spreadsheet.
         * @returns {any}
         */
        saveAsJSON(): any;

        /** This method is used to save batch changes in Spreadsheet.
         * @param {number} Pass the sheet index for Spreadsheet.
         * @returns {void}
         */
        saveBatchChanges(sheetIdx: number): void;

        /** This method is used to set the active cell in the Spreadsheet.
         * @param {number} Pass the row index.
         * @param {number} Pass the column index.
         * @param {number} Pass the index of the sheet.
         * @returns {void}
         */
        setActiveCell(rowIdx: number, colIdx: number, sheetIdx: number): void;

        /** This method is used to set active sheet index for the Spreadsheet.
         * @param {number} Pass the active sheet index for Spreadsheet.
         * @returns {void}
         */
        setActiveSheetIndex(sheetIdx: number): void;

        /** This method is used to set border for the specified range of cells in the Spreadsheet.
         * @param {any} Pass the border properties that you want to set.
         * @param {string} Optional. If range is specified, it will set border for the specified range else it will use the selected range.
         * @returns {void}
         */
        setBorder(property: any, range?: string): void;

        /** This method is used to set the height for the rows in the Spreadsheet.
         * @param {any[]|any} Pass the row index and height of the rows.
         * @returns {void}
         */
        setHeightToRows(heightColl: any[] | any): void;

        /** This method is used to set the hyperlink in selected cells of the current sheet.
         * @param {string|any[]} If range is specified, it will set the hyperlink in range of the cells.
         * @param {any} Pass cellAddress or webAddress
         * @param {number} If we pass cellAddress then which sheet to be navigate in the applied link.
         * @returns {void}
         */
        setHyperlink(range: string | any[], link: any, sheetIdx: number): void;

        /** This method is used to set the readonly option for the specified range.
         * @param {string|any[]} Pass the range.
         * @returns {void}
         */
        setReadOnly(range?: string | any[]): void;

        /** This method is used to set the focus to the Spreadsheet.
         * @returns {void}
         */
        setSheetFocus(): void;

        /** This method is used to set the width for the columns in the Spreadsheet.
         * @param {any[]|any} Pass the column index and width of the columns.
         * @returns {void}
         */
        setWidthToColumns(widthColl: any[] | any): void;

        /** This method is used to rename the active sheet.
         * @param {string} Pass the sheet name that you want to change the current active sheet name.
         * @returns {void}
         */
        sheetRename(sheetName: string): void;

        /** This method is used to display the activationPanel for the specified range name.
         * @param {string} Pass the range name that you want to display the activation panel.
         * @returns {void}
         */
        showActivationPanel(rangeName: string): void;

        /** This method is used to show the hidden columns within the specified range in the Spreadsheet.
         * @param {number} Index of the start column.
         * @param {number} Optional. Index of the end column.
         * @returns {void}
         */
        showColumn(startColIdx: number, endColIdx: number): void;

        /** This method is used to show the formula bar in Spreadsheet.
         * @returns {void}
         */
        showFormulaBar(): void;

        /** This method is used to show/hide gridlines in active sheet in the Spreadsheet.
         * @param {boolean} Pass {{'`true`' | markdownify}} to show the gridlines
         * @returns {void}
         */
        showGridlines(status: boolean): void;

        /** This method is used to show/hide the headers in active sheet in the Spreadsheet.
         * @param {boolean} Pass {{'`true`' | markdownify}} to show the sheet headers.
         * @returns {void}
         */
        showHeadings(startRow: boolean): void;

        /** This method is used to show/hide pager in the Spreadsheet.
         * @param {boolean} Pass {{'`true`' | markdownify}} to show pager.
         * @returns {void}
         */
        showPager(status: boolean): void;

        /** This method is used to show the hidden rows in the specified range in the Spreadsheet.
         * @param {number} Index of the start row.
         * @param {number} Optional. Index of the end row.
         * @returns {void}
         */
        showRow(startRow: number, endRow: number): void;

        /** This method is used to show waiting pop-up in Spreadsheet.
         * @returns {void}
         */
        showWaitingPopUp(): void;

        /** This method is used to perform the undo action in Spreadsheet.
         * @returns {void}
         */
        undo(): void;

        /** This method is used to unhide the sheet based on specified sheet name or sheet index.
         * @param {string|number} Pass the sheet name or index that you want to unhide.
         * @returns {void}
         */
        unhideSheet(sheetInfo: string | number): void;

        /** This method is used to unmerge the selected range of cells in the Spreadsheet.
         * @param {string} Optional. If the range is specified, then it will un merge the specified range else it will use the current selected range.
         * @returns {void}
         */
        unmergeCells(range?: string): void;

        /** This method is used to unwrap the selected range of cells in the Spreadsheet.
         * @param {any[]|string} Optional. If the range is specified, then it will update unwrap in the specified range else it will use the current selected range.
         * @returns {void}
         */
        unWrapText(range?: any[] | string): void;

        /** This method is used to update the data for the specified range of cells in the Spreadsheet.
         * @param {any} Pass the cells data that you want to update.
         * @param {any[]|string} Optional. If range is specified, it will update data for the specified range  else it will use the current selected range.
         * @returns {void}
         */
        updateData(data: any, range?: any[] | string): void;

        /** This method is used to update the formula bar in the Spreadsheet.
         * @returns {void}
         */
        updateFormulaBar(): void;

        /** This method is used to update the range of cells based on the specified settings which we want to update in the Spreadsheet.
         * @param {number} Pass the sheet index that you want to update.
         * @param {any} Pass the dataSource, startCell and showHeader values as settings.
         * @returns {void}
         */
        updateRange(sheetIdx: number, settings: any): void;

        /** This method is used to update the details for custom undo and redo operations.
         * @param {any} Pass the details to update undo and redo collection
         * @returns {void}
         */
        updateUndoRedoCollection(details: any): void;

        /** This method is used to update the unique data for the specified range of cells in Spreadsheet.
         * @param {any} Pass the  data that you want to update in the particular range
         * @param {any[]|string} Optional. If range is specified, it will update data for the specified range else it will use the current selected range.
         * @param {any} Optional. It specifies whether to skip element processing or not.
         * @returns {void}
         */
        updateUniqueData(data: any, range?: any[] | string, skipCell?: any): void;

        /** This method is used to wrap the selected range of cells in the Spreadsheet.
         * @param {any[]|string} Optional. If the range is specified, then it will update wrap in the specified  range else it will use the current selected range.
         * @returns {void}
         */
        wrapText(range?: any[] | string): void;

        XLCellType: Spreadsheet.XLCellType;

        XLCFormat: Spreadsheet.XLCFormat;

        XLChart: Spreadsheet.XLChart;

        XLClipboard: Spreadsheet.XLClipboard;

        XLComment: Spreadsheet.XLComment;

        XLCMenu: Spreadsheet.XLCMenu;

        XLDragDrop: Spreadsheet.XLDragDrop;

        XLDragFill: Spreadsheet.XLDragFill;

        XLEdit: Spreadsheet.XLEdit;

        XLExport: Spreadsheet.XLExport;

        /** This method is used to get the export properties in the Spreadsheet.
         * @returns {any}
         */
        getExportProps(): any;

        XLFilter: Spreadsheet.XLFilter;

        XLFormat: Spreadsheet.XLFormat;

        XLFreeze: Spreadsheet.XLFreeze;

        /** This method is used to unfreeze the frozen rows and columns in the Spreadsheet.
         * @returns {void}
         */
        unfreezePanes(): void;

        XLPivot: Spreadsheet.XLPivot;

        XLPrint: Spreadsheet.XLPrint;

        XLResize: Spreadsheet.XLResize;

        XLRibbon: Spreadsheet.XLRibbon;

        XLScroll: Spreadsheet.XLScroll;

        XLSearch: Spreadsheet.XLSearch;

        XLSelection: Spreadsheet.XLSelection;

        XLShape: Spreadsheet.XLShape;

        XLSort: Spreadsheet.XLSort;

        XLSparkline: Spreadsheet.XLSparkline;

        XLValidate: Spreadsheet.XLValidate;
    }
    export namespace Spreadsheet {

        export interface XLCellType {

            /** This method is used to set a cell type from the specified range of cells in the spreadsheet.
             * @param {string} Pass the range where you want apply cell type.
             * @param {any} Pass type of cell type and its settings.
             * @param {number} Optional. Pass sheet index.
             * @returns {void}
             */
            addCellTypes(range: string, settings: any, sheetIdx: number): void;

            /** This method is used to remove cell type from the specified range of cells in the Spreadsheet.
             * @param {string|any[]} Pass the range where you want remove cell type.
             * @param {number} Optional. Pass sheet index.
             * @returns {void}
             */
            removeCellTypes(range: string | any[], sheetIdx: number): void;
        }

        export interface XLCFormat {

            /** This method is used to clear the applied conditional formatting rules in the Spreadsheet.
             * @param {any[]|string} Optional. If range is specified, it will clear rules for the specified range else it will use the current selected range.
             * @returns {void}
             */
            clearCF(range: any[] | string): void;

            /** This method is used to get the applied conditional formatting rules as array of objects based on the specified row Index and column Index in the Spreadsheet.
             * @param {number} Pass the row index.
             * @param {number} Pass the column index.
             * @returns {any[]}
             */
            getCFRule(rowIdx: number, colIdx: number): any[];

            /** This method is used to set the conditional formatting rule in the Spreadsheet.
             * @param {any} Pass the rule to set.
             * @returns {void}
             */
            setCFRule(rule: any): void;
        }

        export interface XLChart {

            /** This method is used to change the type of the chart in the Spreadsheet.
             * @param {string} Pass the chart id.
             * @param {any} Pass the chart type.
             * @returns {void}
             */
            changeType(chartId: string, option: any): void;

            /** This method is used to change the data range of the chart in the Spreadsheet.
             * @param {string} Pass the chart id.
             * @param {string} X axis range of chart data.
             * @param {string} Y axis range of chart data.
             * @param {string} Legend range of chart data.
             * @returns {void}
             */
            changeDataRange(chartId: string, xRange: string, yRange: string, lRange: string): void;

            /** This method is used to create a chart for specified range in Spreadsheet.
             * @param {string|any[]} Optional. If range is specified, it will create chart for the specified range else it will use the current selected range.
             * @param {any} Optional. To pass the type of chart and chart name.
             * @returns {void}
             */
            createChart(range: string | any[], options: any): void;

            /** This method is used to refresh the chart in the Spreadsheet.
             * @param {string} To pass the chart Id.
             * @param {any} To pass the type of chart and chart name.
             * @returns {void}
             */
            refreshChart(id: string, options: any): void;

            /** This method is used to resize the chart of specified id in the Spreadsheet.
             * @param {string} To pass the chart id.
             * @param {number} To pass height value.
             * @param {number} To pass the width value.
             * @returns {void}
             */
            resizeChart(id: string, height: number, width: number): void;

            /** This method is used to update the chart element, such as axes, titles, data labels, grid lines and legends in the Spreadsheet.
             * @param {string} Pass the chart id.
             * @param {ej.Spreadsheet.ChartProperties} Pass chart element value which you want to update.
             * @returns {void}
             */
            updateChartElement(chartId: string, value: ej.Spreadsheet.ChartProperties): void;

            /** This method is used switch row to columns and vice versa for chart in the Spreadsheet. So that the data is displayed in the chart the way you want.
             * @param {string} Pass the chart id.
             * @returns {void}
             */
            switchRowColumn(chartId: string): void;
        }

        export interface XLClipboard {

            /** This method is used to copy the selected cells in the Spreadsheet.
             * @returns {void}
             */
            copy(): void;

            /** This method is used to cut the selected cells in the Spreadsheet.
             * @returns {void}
             */
            cut(): void;

            /** This method is used to paste the cut or copied cells data in the Spreadsheet.
             * @returns {void}
             */
            paste(): void;
        }

        export interface XLComment {

            /** This method is used to delete the comment in the specified range in Spreadsheet.
             * @param {any[]|string} Optional. If range is specified, it will delete comments for the specified range else it will use the current selected range.
             * @param {number} Optional. If sheetIdx is specified, it will delete comment in specified sheet else it will use active sheet.
             * @param {boolean} Optional. Pass {{'`true`' | markdownify}}, if you want to skip the hidden rows data.
             * @returns {void}
             */
            deleteComment(range: any[] | string, sheetIdx: number, skipHiddenRow: boolean): void;

            /** This method is used to edit the comment in the target Cell in Spreadsheet.
             * @param {any} Optional. Pass the row index and column index of the cell which contains comment.
             * @returns {void}
             */
            editComment(targetCell: any): void;

            /** This method is used to find the next comment from the active cell in Spreadsheet.
             * @returns {boolean}
             */
            findNextComment(): boolean;

            /** This method is used to find the previous comment from the active cell in Spreadsheet.
             * @returns {boolean}
             */
            findPrevComment(): boolean;

            /** This method is used to get comment data for the specified cell.
             * @param {HTMLElement} Pass the DOM element to get comment data as object.
             * @returns {any}
             */
            getComment(cell: HTMLElement): any;

            /** This method is used to set new comment in Spreadsheet.
             * @param {string|any[]} Optional. If we pass the range comment will set in the range otherwise it will set with selected cells.
             * @param {string} Optional. Pass the comment data.
             * @param {boolean} Optional. Pass {{'`true`' | markdownify}} to show comment in edit mode
             * @param {boolean} Optional. Pass {{'`true`' | markdownify}} to show the user name
             * @returns {void}
             */
            setComment(range: string | any[], data: string, showEditPanel: boolean, showUserName: boolean): void;

            /** This method is used to show all the comments in the Spreadsheet.
             * @returns {void}
             */
            showAllComments(): void;

            /** This method is used to show or hide the specific comment in the Spreadsheet.
             * @param {HTMLElement} Optional. Pass the cell DOM element to show or hide its comment. If pass empty argument active cell will processed.
             * @returns {void}
             */
            showHideComment(targetCell: HTMLElement): void;
        }

        export interface XLCMenu {

            /** This method is used to dynamically add items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be inserted.
             * @param {any[]} Pass the items to be inserted
             * @param {string} Specifies the type of operation to be performed
             * @returns {void}
             */
            addItem(target: string, itemColl: any[], operation: string): void;

            /** This method is used to change data source in the context menu.
             * @param {string} Specifies the context menu type to bind the data source.
             * @param {any[]} Pass the data source to be binded
             * @returns {void}
             */
            changeDataSource(target: string, data: any[]): void;

            /** This method is used to disable the items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be disabled.
             * @param {any[]} Specifies the Menu Item id collection to be disabled
             * @returns {void}
             */
            disableItem(target: string, idxColl: any[]): void;

            /** This method is used to enable the items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be enabled.
             * @param {any[]} Specifies the Menu Item id collection to be enabled
             * @returns {void}
             */
            enableItem(target: string, idxColl: any[]): void;

            /** This method is used to hide the items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be hides.
             * @param {any[]} Specifies the Menu Item id collection to be hides
             * @returns {void}
             */
            hideItem(cMenuType: string, idxColl: any[]): void;

            /** This method is used to remove the items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be removed.
             * @param {any[]} Specifies the Menu Item id collection to be removed
             * @returns {void}
             */
            removeItem(target: string, idxColl: any[]): void;

            /** This method is used to show the items in the context menu.
             * @param {string} Specifies the context menu type in which the item to be shown.
             * @param {any[]} Specifies the Menu Item id collection to be shown
             * @returns {void}
             */
            showItem(cMenuType: string, idxColl: any[]): void;
        }

        export interface XLDragDrop {

            /** This method is used to drag and drop the selected range of cells to destination range in the Spreadsheet.
             * @param {any|any[]} Pass the source range to perform drag and drop.
             * @param {any|any[]} Pass the destination range to drop the dragged cells.
             * @returns {void}
             */
            moveRangeTo(sourceRange: any | any[], destinationRange: any | any[]): void;
        }

        export interface XLDragFill {

            /** This method is used to perform auto fill in Spreadsheet.
             * @param {any} Pass the options to perform auto fill in Spreadsheet.
             * @returns {void}
             */
            autoFill(options: any): void;

            /** This method is used to hide the auto fill element in the Spreadsheet.
             * @returns {void}
             */
            hideAutoFillElement(): void;

            /** This method is used to hide the auto fill options in the Spreadsheet.
             * @returns {void}
             */
            hideAutoFillOptions(): void;

            /** This method is used to set position of the auto fill element in the Spreadsheet.
             * @param {boolean} Pass the isDragFill option as {{'`boolean`' | markdownify}} value to show auto fill options in Spreadsheet.
             * @returns {void}
             */
            positionAutoFillElement(isDragFill: boolean): void;
        }

        export interface XLEdit {

            /** This method is used to calculate formulas in the specified sheet.
             * @param {number} Optional. If sheet index is specified, then it will calculate formulas in the specified sheet only else it will calculate formulas in all sheets.
             * @returns {void}
             */
            calcNow(sheetIdx: number): void;

            /** This method is used to edit a particular cell based on the row index and column index in the Spreadsheet.
             * @param {number} Pass the row index to edit particular cell.
             * @param {number} Pass the column index to edit particular cell.
             * @param {boolean} Pass {{'`true`' | markdownify}}, if you want to maintain previous cell value.
             * @returns {void}
             */
            editCell(rowIdx: number, colIdx: number, oldData: boolean): void;

            /** This method is used to get the column index with specified field value in Spreadsheet.
             * @param {string} Pass the column field value
             * @returns {void}
             */
            getColumnIndexByField(field: string): void;

            /** This method is used to get the property value of particular cell, based on the row and column index in the Spreadsheet.
             * @param {number} Pass the row index to get the property value.
             * @param {number} Pass the column index to get the property value.
             * @param {string} Optional. Pass the property name that you want("value", "value2", "type", "cFormatRule", "range", "thousandSeparator", "rule", "format", "border", "picture",
             * "chart", "calcValue", "align", "hyperlink", "formats", "borders", "tformats", "tborders", "isFilterHeader",  "filterState", "tableName", "comment", "formatStr", "decimalPlaces",
             * "cellType").
             * @param {number} Optional. Pass the index of the sheet.
             * @returns {any|string|any[]}
             */
            getPropertyValue(rowIdx: number, colIdx: number, prop: string, sheetIdx: number): any | string | any[];

            /** This method is used to get the property value in specified cell in Spreadsheet.
             * @param {HTMLElement} Pass the cell element to get property value.
             * @param {string} Pass the property name that you want ("value", "value2", "type", "cFormatRule", "range", "thousandSeparator", "rule", "format", "border", "picture", "chart",
             * "calcValue", "align", "hyperlink", "formats", "borders", "tformats", "tborders", "isFilterHeader", "filterState", "tableName", "comment", "formatStr", "decimalPlaces",
             * "cellType").
             * @param {number} Pass the index of sheet.
             * @returns {any|string|any[]}
             */
            getPropertyValueByElem(elem: HTMLElement, property: string, sheetIdx: number): any | string | any[];

            /** This method is used to save the edited cell value in the Spreadsheet.
             * @returns {void}
             */
            saveCell(): void;

            /** This method is used to update a particular cell value in the Spreadsheet.
             * @param {any} Pass row index and column index of the cell.
             * @param {string|number} Pass the cell value.
             * @returns {void}
             */
            updateCell(cell: any, value: string | number): void;

            /** This method is used to update a particular cell value and its format in the Spreadsheet.
             * @param {any} Pass row index and column index of the cell.
             * @param {string|number} Pass the cell value.
             * @param {string} Pass the class name to update format.
             * @param {number} Pass sheet index.
             * @returns {void}
             */
            updateCellValue(cellIdx: any, val: string | number, formatClass: string, sheetIdx: number): void;

            /** This method is used to update a particular cell value and its format in the Spreadsheet.
             * @param {string} Pass the range.
             * @param {string|number} Pass the cell value.
             * @param {string} Pass the class name to update format.
             * @param {number} Pass sheet index.
             * @returns {void}
             */
            updateValue(aRange: string, val: string | number, formatClass: string, sheetIdx: number): void;
			
			updateValue(aRange: string, val: string): void; // Not in the official documentation, but it works
        }

        export interface XLExport {

            /** This method is used to save the sheet data as Excel ,CSV or PDF document (.xls, .xlsx .csv, .pdf) in Spreadsheet.
             * @param {string} Pass the export type that you want.
             * @param {string} Pass the export filename that you want.
             * @returns {void}
             */
            export(type: string, fileName: string): void;

            /** This method is used to get the export properties in the Spreadsheet.
             * @returns {any}
             */
            getExportProps(): any;
        }

        export interface XLFilter {

            /** This method is used to clear the filter in filtered columns in the Spreadsheet.
             * @returns {void}
             */
            clearFilter(): void;

            /** This method is used to apply filter for the selected range of cells in the Spreadsheet.
             * @param {string|any[]} Pass the range of the selected cells.
             * @returns {void}
             */
            filter(range: string | any[]): void;

            /** This method is used to apply filter for the column by active cell's value in the Spreadsheet.
             * @returns {void}
             */
            filterByActiveCell(): void;
        }

        export interface XLFormat {

            /** This method is used to add the custom Date &amp; Time format and recognize it as a preferred pattern in spreadsheet.
             * @param {string} Pass the name for custom format.
             * @param {string} Pass the custom format string.
             * @param {string} Pass the type for custom format.
             * @returns {void}
             */
            addCustomFormatSpecifier(name: string, formatSpecifier: string, type: string): void;

            /** This method is used to add the font to the Ribbon font family dropdown.
             * @param {string} Font name which needs to add into the font family option.
             * @returns {void}
             */
            addFontFamily(fontName: string): void;

            /** This method is used to add the new custom cell style in spreadsheet.
             * @param {string} Pass the style name.
             * @param {any} Pass the format object.
             * @returns {void}
             */
            addNewCustomStyle(styleName: string, options: any): void;

            /** This method is used to apply the custom cell style in the specified range.
             * @param {string} Pass the style name.
             * @param {string} Pass the range to applied.
             * @returns {void}
             */
            applyCustomCellStyle(styleName: string, range: string): void;

            /** This method is used to convert table range to normal range.
             * @param {any} Pass the sheet index and table id.
             * @returns {void}
             */
            convertToRange(options: any): void;

            /** This method is used to create a table for the selected range of cells in the Spreadsheet.
             * @param {any} Pass the table object.
             * @param {string|any[]} Optional. If the range is specified, then it will create table in the specified range else it will use the current selected range.
             * @returns {string}
             */
            createTable(tableObject: any, range: string | any[]): string;

            /** This method is used to delete the added custom cell style in spreadsheet.
             * @param {string} Pass the cell style name
             * @returns {void}
             */
            deleteCustomStyle(styleName: string): void;

            /** This method is used to set format style and values in a cell or range of cells.
             * @param {any} Pass the formatObject which contains style, type, format, groupSeparator and decimalPlaces.
             * @param {string} Pass the range to format cells.
             * @returns {void}
             */
            format(formatObj: any, range: string): void;

            /** This method is used to get the border from hashcode in the Spreadsheet.
             * @param {string} Pass the border hashcode.
             * @param {boolean} Optional. pass `true` to get the complete border object
             * @returns {any}
             */
            getBorderFromHashCode(code: string, isComplete: boolean): any;

            /** This method is used to get the format class in spreadsheet.
             * @param {string} Pass the style name.
             * @param {boolean} Optional. Pass true to get the border class.
             * @returns {void}
             */
            getFormatClass(classname: string, isborder: boolean): void;

            /** This method is used to get the format from the given hashcode in spreadsheet.
             * @param {string} Pass the hashcode.
             * @returns {void}
             */
            getFormatFromHashCode(hashCode: string): void;

            /** This method is used to get the hashcode from the given style object in spreadsheet.
             * @param {any} Pass the style object that you want to get the hashcode.
             * @returns {void}
             */
            getFormatHashCode(style: any): void;

            /** This method is used to get the format as array from the given specified range in spreadsheet.
             * @param {string} Pass the range.
             * @returns {void}
             */
            getHashCodeClassAsArray(range: string): void;

            /** This method is used to modify the added custom cell style in spreadsheet.
             * @param {string} pass the old style name
             * @param {any} pass the format object to be modified
             * @param {string} pass the new style name
             * @returns {void}
             */
            modifyCustomStyle(oldStyleName: string, options: any, newStyleName: string): void;

            /** This method is used to remove the font from the Ribbon font family dropdown.
             * @param {string} Font name which needs to remove from the font family drop down.
             * @returns {void}
             */
            removeFontFamily(fontName: string): void;

            /** This method is used to remove the style in the specified range.
             * @param {any[]|string} Pass the cell range .
             * @param {any} Optional. Pass the options for which the style gets removed.
             * @returns {void}
             */
            removeStyle(range: any[] | string, options: any): void;

            /** This method is used to remove table with specified tableId in the Spreadsheet.
             * @param {number} Pass the tableId that you want to remove.
             * @returns {void}
             */
            removeTable(tableId: number): void;

            /** This method is used to update the decimal places for numeric value for the selected range of cells in the Spreadsheet.
             * @param {string} Pass the decimal places type in IncreaseDecimal/DecreaseDecimal.
             * @param {string|any[]} Pass the range.
             * @returns {void}
             */
            updateDecimalPlaces(type: string, range: string | any[]): void;

            /** This method is used to update the format for the selected range of cells in the Spreadsheet.
             * @param {any} Pass the format object that you want to update.
             * @param {any[]} Optional. If the range is specified, then it will update format in the specified range else it will use the current selected range.
             * @returns {void}
             */
            updateFormat(formatObj: any, range: any[]): void;

            /** This method is used to update the unique format for selected range of cells in the Spreadsheet.
             * @param {string} Pass the unique format class.
             * @param {any[]} Optional. If the range is specified, then it will update format in the specified range else it will use the current selected range.
             * @returns {void}
             */
            updateUniqueFormat(formatClass: string, range: any[]): void;
        }

        export interface XLFreeze {

            /** This method is used to freeze columns upto the specified column index in the Spreadsheet.
             * @param {number} Index of the column to be freeze.
             * @returns {void}
             */
            freezeColumns(colIdx: number): void;

            /** This method is used to freeze the first column in the Spreadsheet.
             * @returns {void}
             */
            freezeLeftColumn(): void;

            /** This method is used to freeze rows and columns before the specified cell in the Spreadsheet.
             * @param {number} Index of the row to be freeze.
             * @param {number} Index of the column to be freeze.
             * @returns {void}
             */
            freezePanes(rowIdx: number, colIdx: number): void;

            /** This method is used to freeze rows upto the specified row index in the Spreadsheet.
             * @param {number} Index of the row to be freeze.
             * @returns {void}
             */
            freezeRows(rowIdx: number): void;

            /** This method is used to freeze the top row in the Spreadsheet.
             * @returns {void}
             */
            freezeTopRow(): void;

            /** This method is used to unfreeze the frozen rows and columns in the Spreadsheet.
             * @returns {void}
             */
            unfreezePanes(): void;
        }

        export interface XLPivot {

            /** This property is used to clear the pivot table list in Spreadsheet.
             * @param {string} Pass the name of the pivot table.
             * @returns {void}
             */
            clearPivotFieldList(pivotName: string): void;

            /** This method is used to create pivot table.
             * @param {string} It specifies the range for which the pivot table is created.
             * @param {string} It specifies the location in which the pivot table is created.
             * @param {string} It specifies the name of the pivot table.
             * @param {any} Pass the pivot table settings.
             * @param {any} Pass the pivot range, sheet index, address and data source .
             * @returns {string}
             */
            createPivotTable(range: string, location: string, name: string, settings: any, pvt: any): string;

            /** This method is used to delete the pivot table which is selected.
             * @param {string} Pass the name of the pivot table.
             * @returns {void}
             */
            deletePivotTable(pivotName: string): void;

            /** This method is used to refresh data in pivot table.
             * @param {string} Optional. Pass the name of the pivot table.
             * @param {number} Optional. Pass the index of the sheet.
             * @returns {void}
             */
            refreshDataSource(name: string, sheetIdx: number): void;
        }

        export interface XLPrint {

            /** This method is used to print the selected contents in the Spreadsheet.
             * @returns {void}
             */
            printSelection(): void;

            /** This method is used to print the entire contents in the active sheet.
             * @returns {void}
             */
            printSheet(): void;
        }

        export interface XLResize {

            /** This method is used to fit the height of rows in the Spreadsheet.
             * @param {any[]} Optional. Pass row index collection that you want to fit its height.
             * @returns {void}
             */
            fitHeight(rowIndexes: any[]): void;

            /** This method is used to fit the width of columns in the Spreadsheet.
             * @param {any[]} Optional. Pass column index collection that you want to fit its width.
             * @returns {void}
             */
            fitWidth(colIndexes: any[]): void;

            /** This method is used to get the column width of the specified column index in the Spreadsheet.
             * @param {number} Pass the column index.
             * @returns {number}
             */
            getColWidth(colIdx: number): number;

            /** This method is used to get the row height of the specified row index in the Spreadsheet.
             * @param {number} Pass the row index which you want to find its height.
             * @returns {number}
             */
            getRowHeight(rowIdx: number): number;

            /** This method is used to set the column width of the specified column index in the Spreadsheet.
             * @param {number} Pass the column index.
             * @param {number} Pass the width value that you want to set.
             * @returns {void}
             */
            setColWidth(colIdx: number, size: number): void;

            /** This method is used to set the row height of the specified row index in the Spreadsheet.
             * @param {number} Pass the row index.
             * @param {number} Pass the height value that you want to set.
             * @returns {void}
             */
            setRowHeight(rowIdx: number, size: number): void;
        }

        export interface XLRibbon {

            /** This method is used to add a new item in the backstage.
             * @param {any} Specifies the item to be added in the backstage.
             * @param {number} pass the index of the item to be added in the backstage.
             * @returns {void}
             */
            addBackStageItem(pageItem: any, index: number): void;

            /** This method is used to dynamically add the contextual tabs in the ribbon.
             * @param {any} Specifies the contextual tab set object.
             * @param {number} pass the index of the contextual tab.
             * @returns {void}
             */
            addContextualTabs(contextualTabSet: any, index: number): void;

            /** This method is used to dynamically add the menu item in the file menu.
             * @param {any[]} Specifies the item to be added
             * @param {number} pass the index of the menu item.
             * @returns {void}
             */
            addMenuItem(item: any[], index: number): void;

            /** This method is used to add a new name in the Spreadsheet name manager.
             * @param {string} Pass the name that you want to define in name manager.
             * @param {string} Pass the cell reference.
             * @param {string} Optional. Pass comment, if you want.
             * @param {number} Optional. Pass the sheet index.
             * @returns {void}
             */
            addNamedRange(name: string, refersTo: string, comment: string, sheetIdx: number): void;

            /** This method is used to dynamically add the tab in the ribbon.
             * @param {string} Specifies the text to be displayed in the tab.
             * @param {any[]} pass the groups to be displayed in the ribbon tab.
             * @param {number} pass the index of the tab.
             * @returns {void}
             */
            addTab(tabText: string, ribbonGroups: any[], index: number): void;

            /** This method is used to dynamically add the tab group in the ribbon.
             * @param {number} Specifies the ribbon tab index.
             * @param {any} pass the groups to be displayed in the ribbon tab.
             * @param {number} pass the index of the ribbon group.
             * @returns {void}
             */
            addTabGroup(tabIndex: number, tabGroup: any, groupIndex: number): void;

            /** This method is used to insert the few type (SUM, MAX, MIN, AVG, COUNT) of formulas in the selected range of cells in the Spreadsheet.
             * @param {string} To pass the type("SUM","MAX","MIN","AVG","COUNT").
             * @param {string|any[]} If range is specified, it will apply auto sum for the specified range else it will use the current selected range.
             * @returns {void}
             */
            autoSum(type: string, range: string | any[]): void;

            /** This method is used to hide the file menu in the ribbon tab.
             * @returns {void}
             */
            hideMenu(): void;

            /** This method is used to remove the item from the backstage in the spreadsheet.
             * @param {number} Specifies the index of the item to be removed from backstage.
             * @returns {void}
             */
            removeBackStageItem(index: number): void;

            /** This method is used to remove the menu item form file menu in spreadsheet.
             * @param {number} Specifies the index of the item to be removed from the file menu.
             * @returns {void}
             */
            removeMenuItem(index: number): void;

            /** This method is used to delete the defined name in the Spreadsheet name manager.
             * @param {string} Pass the defined name that you want to remove from name manager.
             * @returns {void}
             */
            removeNamedRange(name: string): void;

            /** This method is used to remove the tab form ribbon in the spreadsheet.
             * @param {number} Specifies the index of the tab to be removed from the ribbon.
             * @param {boolean} pass the boolean value to remove the tab from ribbon
             * @returns {void}
             */
            removeTab(index: number, isRemoveMenu: boolean): void;

            /** This method is used to remove the tab group form ribbon in the spreadsheet.
             * @param {number} Specifies the index of the tab group to be removed from the ribbon.
             * @param {string} Specifies the text to be displayed in the tab group
             * @returns {void}
             */
            removeTabGroup(tabIndex: number, groupText: string): void;

            /** This method is used to show the file menu in the ribbon tab.
             * @returns {void}
             */
            showMenu(): void;

            /** This method is used to update the menu item in the file menu.
             * @param {any} Specifies the menu item to be updated in the ribbon
             * @param {number} pass the index of the item to be updated
             * @returns {void}
             */
            updateMenuItem(item: any, index: number): void;

            /** This method is used to update the ribbon icons in the Spreadsheet.
             * @returns {void}
             */
            updateRibbonIcons(): void;
        }

        export interface XLScroll {

            /** This method is used to scroll the sheet content to the specified cell address in the Spreadsheet.
             * @param {string} Pass the cell address that you want to scroll to it.
             * @returns {void}
             */
            scrollToCell(range: string): void;
        }

        export interface XLSearch {

            /** This method is used to find and replace all data by workbook in the Spreadsheet.
             * @param {string} Pass the search data.
             * @param {string} Pass the replace data.
             * @param {boolean} Pass {{'`true`' | markdownify}}, if you want to match with case-sensitive.
             * @param {boolean} Pass {{'`true`' | markdownify}}, if you want to match with entire cell contents.
             * @returns {void}
             */
            replaceAllByBook(findData: string, replaceData: string, isCSen: boolean, isEMatch: boolean): void;

            /** This method is used to find and replace all data by sheet in Spreadsheet.
             * @param {string} Pass the search data.
             * @param {string} Pass the replace data.
             * @param {boolean} Pass {{'`true`' | markdownify}}, if you want to match with case-sensitive.
             * @param {boolean} Pass {{'`true`' | markdownify}}, if you want to match with entire cell contents.
             * @returns {void}
             */
            replaceAllBySheet(findData: string, replaceData: string, isCSen: boolean, isEMatch: boolean): void;
        }

        export interface XLSelection {

            /** This method is used to clear the selection of the active sheet in the Spreadsheet.
             * @returns {void}
             */
            clearAll(): void;

            /** This method is used to get the selected cells element based on specified sheet index in the Spreadsheet.
             * @param {number} Pass the sheet index to get the cells element.
             * @returns {HTMLElement}
             */
            getSelectedCells(sheetIdx: number): HTMLElement;

            /** This method is used to refresh the selection in the Spreadsheet.
             * @param {any[]|string} Optional. Pass range to refresh selection.
             * @returns {void}
             */
            refreshSelection(range: any[] | string): void;

            /** This method is used to select a single column in the Spreadsheet.
             * @param {number} Pass the column index value.
             * @returns {void}
             */
            selectColumn(colIdx: number): void;

            /** This method is used to select entire columns in a specified range (start index and end index) in the Spreadsheet.
             * @param {number} Pass the column start index.
             * @param {number} Pass the column end index.
             * @returns {void}
             */
            selectColumns(startIdx: number, endIdx: number): void;

            /** This method is used to select the specified range of cells in the Spreadsheet.
             * @param {string} Pass range which want to select.
             * @returns {void}
             */
            selectRange(range: string): void;

            /** This method is used to select a single row in the Spreadsheet.
             * @param {number} Pass the row index value.
             * @returns {void}
             */
            selectRow(rowIdx: number): void;

            /** This method is used to select entire rows in a specified range (start index and end index) in the Spreadsheet.
             * @param {number} Pass the start row index.
             * @param {number} Pass the end row index.
             * @returns {void}
             */
            selectRows(startIdx: number, endIdx: number): void;

            /** This method is used to select all cells in active sheet.
             * @returns {void}
             */
            selectSheet(): void;
        }

        export interface XLShape {

            /** This method is used to set a picture in the Spreadsheet.
             * @param {string} Pass the range of the cell.
             * @param {string} Pass the path of the specified image.
             * @param {number} Optional. Pass the width of the image that you want to set.
             * @param {number} Optional. Pass the height of the image that you want to set.
             * @param {number} Optional. Pass the top of the image that you want to set.
             * @param {number} Optional. Pass the left of the image that you want to set.
             * @returns {string}
             */
            setPicture(range: string, url: string, width: number, height: number, top: number, left: number): string;
        }

        export interface XLSort {

            /** This method is used to sort a particular range of cells based on its cell or font color in the Spreadsheet.
             * @param {string} Pass {{'`PutCellColor`' | markdownify}} to sort by cell color or {{'`PutFontColor`' | markdownify}} for sort by font color.
             * @param {any} Pass the HEX color code to sort.
             * @param {string} Pass the range
             * @returns {void}
             */
            sortByColor(operation: string, color: any, range: string): void;

            /** This method is used to sort a particular range of cells based on its values in the Spreadsheet.
             * @param {any[]|string} Pass the range to sort.
             * @param {string} Pass the column name.
             * @param {any} Pass the direction to sort (ascending or descending).
             * @returns {boolean}
             */
            sortByRange(range: any[] | string, columnName: string, direction: any): boolean;
        }

        export interface XLSparkline {

            /** This method used for creating the sparkline chart for specified range in spreadsheet.
             * @param {string} Pass the data range
             * @param {string} Pass the location range
             * @param {string} Pass the sparkline chart type
             * @param {any} Pass the sparkline chart options
             * @param {number} Pass the sheetIndex
             * @returns {void}
             */
            createSparkline(dataRange: string, locationRange: string, type: string, options: any, sheetIndex: number): void;

            /** This method used to change the sparkline color and marker point color in the spreadsheet.
             * @param {string} Pass the sparkline ID
             * @param {any} Pass the sparkline options
             * @param {number} Optional. Pass the sheet index
             * @returns {void}
             */
            changePointColor(sparklineId: string, option: any, sheetIdx: number): void;

            /** This method used to change the sparkline type in the spreadsheet.
             * @param {string} Pass the sparkline ID
             * @param {string} Pass the sparkline type
             * @param {number} Optional. Pass the sheet index
             * @returns {void}
             */
            changeType(sparklineId: string, type: string, sheetIdx: number): void;
        }

        export interface XLValidate {

            /** This method is used to apply data validation rules in a selected range of cells based on the defined condition in the Spreadsheet.
             * @param {string|any[]} If range is specified, it will apply rules for the specified range else it will use the current selected range.
             * @param {any[]} Pass the validation condition, value1 and value2.
             * @param {string} Pass the data type.
             * @param {boolean} Pass {{'`true`' | markdownify}} if you ignore blank values.
             * @param {boolean} Pass {{'`true`' | markdownify}} if you want to show an error alert.
             * @returns {void}
             */
            applyDVRules(range: string | any[], values: any[], type: string, required: boolean, showErrorAlert: boolean): void;

            /** This method is used to clear the applied validation rules in a specified range of cells in the Spreadsheet.
             * @param {string|any[]} Optional. If range is specified, it will clear rules for the specified range else it will use the current selected range.
             * @returns {void}
             */
            clearDV(range: string | any[]): void;

            /** This method is used to highlight invalid data in a specified range of cells in the Spreadsheet.
             * @param {string|any[]} Optional. If range is specified, it will clear rules for the specified range else it will use the current selected range.
             * @returns {void}
             */
            highlightInvalidData(range: string | any[]): void;
        }

        export interface Model {

            /** Gets or sets an active sheet index in the Spreadsheet. By defining this value, you can specify which sheet should be active in workbook.
             * @Default {1}
             */
            activeSheetIndex?: number;

            /** Gets or sets a value that indicates whether to enable or disable auto rendering of cell type in the Spreadsheet.
             * @Default {false}
             */
            allowAutoCellType?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable auto fill feature in the Spreadsheet.
             * @Default {true}
             */
            allowAutoFill?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable auto sum feature in the Spreadsheet.
             * @Default {true}
             */
            allowAutoSum?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable cell format feature in the Spreadsheet. By enabling this, you can customize styles and number formats.
             * @Default {true}
             */
            allowCellFormatting?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable cell type feature in the Spreadsheet.
             * @Default {false}
             */
            allowCellType?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable chart feature in the Spreadsheet. By enabling this feature, you can create and customize charts in Spreadsheet.
             * @Default {true}
             */
            allowCharts?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable clear feature in the Spreadsheet.
             * @Default {true}
             */
            allowClear?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable clipboard feature in the Spreadsheet. By enabling this feature, you can perform cut/copy and paste operations in
             * Spreadsheet.
             * @Default {true}
             */
            allowClipboard?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable comment feature in the Spreadsheet. By enabling this, you can add/delete/modify comments in Spreadsheet.
             * @Default {true}
             */
            allowComments?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable Conditional Format feature in the Spreadsheet. By enabling this, you can apply formatting to the selected range of
             * cells based on the provided conditions (Greater than, Less than, Equal, Between, Contains, etc.).
             * @Default {true}
             */
            allowConditionalFormats?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable data validation feature in the Spreadsheet.
             * @Default {true}
             */
            allowDataValidation?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable the delete action in the Spreadsheet. By enabling this feature, you can delete existing rows, columns, cells and
             * sheet.
             * @Default {true}
             */
            allowDelete?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable drag and drop feature in the Spreadsheet.
             * @Default {true}
             */
            allowDragAndDrop?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable the edit action in the Spreadsheet.
             * @Default {true}
             */
            allowEditing?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable filtering feature in the Spreadsheet. Filtering can be used to limit the data displayed using required criteria.
             * @Default {true}
             */
            allowFiltering?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable table feature in the Spreadsheet. By enabling this, you can render table in selected range.
             * @Default {true}
             */
            allowFormatAsTable?: boolean;

            /** Get or sets a value that indicates whether to enable or disable format painter feature in the Spreadsheet. By enabling this feature, you can copy the format from the selected
             * range and apply it to another range.
             * @Default {true}
             */
            allowFormatPainter?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable formula bar in the Spreadsheet.
             * @Default {true}
             */
            allowFormulaBar?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable freeze pane support in Spreadsheet. By enabling this feature, you can use freeze top row, freeze first column and
             * freeze panes options.
             * @Default {true}
             */
            allowFreezing?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable hyperlink feature in the Spreadsheet. By enabling this feature, you can add hyperlink which is used to easily
             * navigate to the cell reference from one sheet to another or a web page.
             * @Default {true}
             */
            allowHyperlink?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable import feature in the Spreadsheet. By enabling this feature, you can open existing Spreadsheet documents.
             * @Default {true}
             */
            allowImport?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable the insert action in the Spreadsheet. By enabling this feature, you can insert new rows, columns, cells and sheet.
             * @Default {true}
             */
            allowInsert?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable keyboard navigation feature in the Spreadsheet.
             * @Default {true}
             */
            allowKeyboardNavigation?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable lock cell feature in the Spreadsheet.
             * @Default {true}
             */
            allowLockCell?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable merge feature in the Spreadsheet.
             * @Default {true}
             */
            allowMerging?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable overflow feature in the Spreadsheet.
             * @Default {true}
             */
            allowOverflow?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable resizing feature in the Spreadsheet. By enabling this feature, you can change the column width and row height by
             * dragging its header boundaries.
             * @Default {true}
             */
            allowResizing?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable find and replace feature in the Spreadsheet. By enabling this, you can easily find and replace a specific value in
             * the sheet or workbook. By using goto behavior, you can select and highlight all cells that contains specific data or data types.
             * @Default {true}
             */
            allowSearching?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable selection in the Spreadsheet. By enabling this feature, selected items will be highlighted.
             * @Default {true}
             */
            allowSelection?: boolean;

            /** Gets or sets a value that indicates whether to enable the sorting feature in the Spreadsheet.
             * @Default {true}
             */
            allowSorting?: boolean;

            /** Gets or sets a value that indicates whether to enable the sparkline feature in the Spreadsheet.
             * @Default {false}
             */
            allowSparkline?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable undo and redo feature in the Spreadsheet.
             * @Default {true}
             */
            allowUndoRedo?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable wrap text feature in the Spreadsheet. By enabling this, cell content can wrap to the next line, if the cell
             * content exceeds the boundary of the cell.
             * @Default {true}
             */
            allowWrap?: boolean;

            /** Gets or sets a value that indicates to define the width of the activation panel in Spreadsheet.
             * @Default {300}
             */
            apWidth?: number;

            /** Gets or sets an object that indicates to customize the auto fill behavior in the Spreadsheet.
             */
            autoFillSettings?: AutoFillSettings;

            /** Gets or sets an object that indicates to customize the chart behavior in the Spreadsheet.
             */
            chartSettings?: ChartSettings;

            /** Gets or sets a value that defines the number of columns displayed in the sheet.
             * @Default {21}
             */
            columnCount?: number;

            /** Gets or sets a value that indicates to define the common width for each column in the Spreadsheet.
             * @Default {64}
             */
            columnWidth?: number;

            /** Gets or sets a value to add root CSS class for customizing Spreadsheet skins.
             */
            cssClass?: string;

            /** Gets or sets a value that indicates custom formulas in Spreadsheet.
             * @Default {[]}
             */
            customFormulas?: any[];

            /** Gets or sets a value that indicates whether to enable or disable context menu in the Spreadsheet.
             * @Default {true}
             */
            enableContextMenu?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable pivot table in the Spreadsheet.
             * @Default {false}
             */
            enablePivotTable?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable touch support in the Spreadsheet.
             * @Default {true}
             */
            enableTouch?: boolean;

            /** Gets or sets an object that indicates to customize the exporting behavior in Spreadsheet.
             */
            exportSettings?: ExportSettings;

            /** Gets or sets an object that indicates to customize the format behavior in the Spreadsheet.
             */
            formatSettings?: FormatSettings;

            /** Gets or sets an object that indicates to customize the import behavior in the Spreadsheet.
             */
            importSettings?: ImportSettings;

            /** Gets or sets a value that indicates whether to enable or disable readonly support in the Spreadsheet.
             * @Default {false}
             */
            isReadOnly?: boolean;

            /** Gets or sets a value that indicates whether to customizing the user interface (UI) as locale-specific in order to display regional data (i.e.) in a language and culture specific
             * to a particular country or region.
             * @Default {en-US}
             */
            locale?: string;

            /** Gets or sets a value that indicates name manager in Spreadsheet.
             */
            nameManager?: NameManager[];

            /** Gets or sets an object that indicates to customize the picture behavior in the Spreadsheet.
             */
            pictureSettings?: PictureSettings;

            /** Gets or sets an object that indicates to customize the print option in Spreadsheet.
             */
            printSettings?: PrintSettings;

            /** Gets or sets an object that indicates to customize the ribbon settings in Spreadsheet.
             */
            ribbonSettings?: RibbonSettings;

            /** Gets or sets a value that indicates whether to define the number of rows to be displayed in the sheet.
             * @Default {20}
             */
            rowCount?: number;

            /** Gets or sets a value that indicates to define the common height for each row in the sheet.
             * @Default {20}
             */
            rowHeight?: number;

            /** Gets or sets an object that indicates to customize the scroll options in the Spreadsheet.
             */
            scrollSettings?: ScrollSettings;

            /** Gets or sets an object that indicates to customize the selection options in the Spreadsheet.
             */
            selectionSettings?: SelectionSettings;

            /** Gets or sets a value that indicates to define the number of sheets to be created at the initial load.
             * @Default {1}
             */
            sheetCount?: number;

            /** Gets or sets an object that indicates to customize the sheet behavior in Spreadsheet.
             */
            sheets?: Sheet[];

            /** Gets or sets a value that indicates whether to show or hide pager in the Spreadsheet.
             * @Default {true}
             */
            showPager?: boolean;

            /** Gets or sets a value that indicates whether to show or hide ribbon in the Spreadsheet.
             * @Default {true}
             */
            showRibbon?: boolean;

            /** This is used to set the number of undo-redo steps in the Spreadsheet.
             * @Default {20}
             */
            undoRedoStep?: number;

            /** Define the username for the Spreadsheet which is displayed in comment.
             * @Default {User Name}
             */
            userName?: string;

            /** Triggered for every action before its starts.
             */
            actionBegin?: (e: ActionBeginEventArgs) => void;

            /** Triggered for every action complete.
             */
            actionComplete?: (e: ActionCompleteEventArgs) => void;

            /** Triggered when the auto fill operation begins.
             */
            autoFillBegin?: (e: AutoFillBeginEventArgs) => void;

            /** Triggered when the auto fill operation completes.
             */
            autoFillComplete?: (e: AutoFillCompleteEventArgs) => void;

            /** Triggered before the batch save.
             */
            beforeBatchSave?: (e: BeforeBatchSaveEventArgs) => void;

            /** Triggered before the cells to be formatted.
             */
            beforeCellFormat?: (e: BeforeCellFormatEventArgs) => void;

            /** Triggered before the cell selection.
             */
            beforeCellSelect?: (e: BeforeCellSelectEventArgs) => void;

            /** Triggered before the selected cells are dropped.
             */
            beforeDrop?: (e: BeforeDropEventArgs) => void;

            /** Triggered while start to edit the comment.
             */
            beforeEditComment?: (e: BeforeEditCommentEventArgs) => void;

            /** Triggered before the contextmenu is open.
             */
            beforeOpen?: (e: BeforeOpenEventArgs) => void;

            /** Triggered before the activation panel is open.
             */
            beforePanelOpen?: (e: BeforePanelOpenEventArgs) => void;

            /** Triggered when click on sheet cell.
             */
            cellClick?: (e: CellClickEventArgs) => void;

            /** Triggered when the cell is edited.
             */
            cellEdit?: (e: CellEditEventArgs) => void;

            /** Triggered while cell is formatting.
             */
            cellFormatting?: (e: CellFormattingEventArgs) => void;

            /** Triggered when mouse hover on cell in sheets.
             */
            cellHover?: (e: CellHoverEventArgs) => void;

            /** Triggered when save the edited cell.
             */
            cellSave?: (e: CellSaveEventArgs) => void;

            /** Triggered when the cell is selected.
             */
            cellSelected?: (e: CellSelectedEventArgs) => void;

            /** Triggered when click the contextmenu items.
             */
            contextMenuClick?: (e: ContextMenuClickEventArgs) => void;

            /** Triggered when the selected cells are being dragged.
             */
            drag?: (e: DragEventArgs) => void;

            /** Triggered when you start to drag the picture or chart.
             */
            dragShape?: (e: DragShapeEventArgs) => void;

            /** Triggered when the selected cells are initiated to drag.
             */
            dragStart?: (e: DragStartEventArgs) => void;

            /** Triggered when the selected cells are dropped.
             */
            drop?: (e: DropEventArgs) => void;

            /** Triggered before the range editing starts.
             */
            editRangeBegin?: (e: EditRangeBeginEventArgs) => void;

            /** Triggered after range editing completes.
             */
            editRangeComplete?: (e: EditRangeCompleteEventArgs) => void;

            /** Triggered when the key is pressed down.
             */
            keyDown?: (e: KeyDownEventArgs) => void;

            /** Triggered when the key is released.
             */
            keyUp?: (e: KeyUpEventArgs) => void;

            /** Triggered before the sheet is loaded.
             */
            load?: (e: LoadEventArgs) => void;

            /** Triggered after the sheet is loaded.
             */
            loadComplete?: (e: LoadCompleteEventArgs) => void;

            /** Triggered every click of the menu item.
             */
            menuClick?: (e: MenuClickEventArgs) => void;

            /** Triggered when a file is imported.
             */
            onImport?: (e: OnImportEventArgs) => void;

            /** Triggered when import sheet is failed to open.
             */
            openFailure?: (e: OpenFailureEventArgs) => void;

            /** Triggered when pager item is clicked in the Spreadsheet.
             */
            pagerClick?: (e: PagerClickEventArgs) => void;

            /** Triggered when you start resizing the chart, picture, row and column.
             */
            resizeStart?: (e: ResizeStartEventArgs) => void;

            /** Triggered after end of resizing the chart, picture, row and column.
             */
            resizeEnd?: (e: ResizeEndEventArgs) => void;

            /** Triggered when click on the ribbon.
             */
            ribbonClick?: (e: RibbonClickEventArgs) => void;

            /** Triggered when click the ribbon tab.
             */
            tabClick?: (e: TabClickEventArgs) => void;

            /** Triggered when select the ribbon tab.
             */
            tabSelect?: (e: TabSelectEventArgs) => void;
        }

        export interface ActionBeginEventArgs {

            /** Returns the applied style format object.
             */
            afterFormat?: any;

            /** Returns the applied style format object.
             */
            beforeFormat?: any;

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the cell range.
             */
            range?: any[];

            /** Returns the action format.
             */
            reqType?: string;

            /** Returns goto index while paging.
             */
            gotoIdx?: number;

            /** Returns boolean value. If create new sheet it returns true.
             */
            newSheet?: boolean;

            /** Return column name while sorting.
             */
            columnName?: string;

            /** Returns selected columns while sorting or filtering begins.
             */
            colSelected?: number;

            /** Returns sort direction while sort action begins.
             */
            sortDirection?: string;
        }

        export interface ActionCompleteEventArgs {

            /** Returns Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the applied cell format object.
             */
            selectedCell?: any[] | any;

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the request type.
             */
            reqType?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;

            /** Returns the name of the event.
             */
            type?: string;
        }

        export interface AutoFillBeginEventArgs {

            /** Returns auto fill begin cell range.
             */
            dataRange?: any[];

            /** Returns which direction drag the auto fill.
             */
            direction?: string;

            /** Returns fill cells range.
             */
            fillRange?: any[];

            /** Returns the auto fill type.
             */
            fillType?: string;

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface AutoFillCompleteEventArgs {

            /** Returns auto fill begin cell range.
             */
            dataRange?: any[];

            /** Returns which direction to drag the auto fill.
             */
            direction?: string;

            /** Returns fill cells range.
             */
            fillRange?: any[];

            /** Returns the auto fill type.
             */
            fillType?: string;

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface BeforeBatchSaveEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the query, primary key,batch changes for the data Source.
             */
            dataSetting?: any;

            /** Returns the changed record object.
             */
            batchChanges?: any;
        }

        export interface BeforeCellFormatEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the applied style format object.
             */
            format?: any;

            /** Returns the selected cells.
             */
            cells?: any[] | any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cancel option value.
             */
            cancel?: boolean;

            /** Returns the name of the event.
             */
            type?: string;
        }

        export interface BeforeCellSelectEventArgs {

            /** Returns the previous cell range.
             */
            prevRange?: any[];

            /** Returns the current cell range.
             */
            currRange?: any[];

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface BeforeDropEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the current cell row and column index.
             */
            currentCell?: any;

            /** Returns the drag cells range object.
             */
            dragAndDropRange?: any;

            /** Returns the cell Overwriting alert option value.
             */
            preventAlert?: boolean;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the target item.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface BeforeEditCommentEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the comment cell index.
             */
            cellIndex?: any;

            /** Returns the disable option value.
             */
            disable?: boolean;

            /** Returns the Spreadsheet model.
             */
            model?: any;

            /** Returns the value of the comment
             */
            value?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface BeforeOpenEventArgs {

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface BeforePanelOpenEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the activation panel element.
             */
            activationPanel?: any;

            /** Returns the range option value.
             */
            range?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface CellClickEventArgs {

            /** Returns the click cell element.
             */
            cell?: HTMLElement;

            /** Returns the column index of clicked cell.
             */
            columnIndex?: number;

            /** Returns the row index of clicked cell.
             */
            rowIndex?: number;

            /** Returns the column name of clicked cell.
             */
            columnName?: string;

            /** Returns the column information.
             */
            columnObject?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the value of the cell.
             */
            value?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface CellEditEventArgs {

            /** Returns the click cell element.
             */
            cell?: HTMLElement;

            /** Returns the columnName of clicked cell.
             */
            columnName?: string;

            /** Returns the column field information.
             */
            columnObject?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface CellFormattingEventArgs {

            /** Returns the sheet index
             */
            SheetIdx?: number;

            /** Returns the applied style format object
             */
            Format?: any;

            /** Returns the cell index.
             */
            Cell?: number;

            /** Returns the name of the CSS theme.
             */
            cssClass?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;
        }

        export interface CellHoverEventArgs {

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface CellSaveEventArgs {

            /** Returns the save cell element.
             */
            cell?: HTMLElement;

            /** Returns the columnName of clicked cell.
             */
            columnName?: string;

            /** Returns the column field information.
             */
            columnObject?: any;

            /** Returns the index of the row.
             */
            rowIndex?: number;

            /** Returns the index of the column.
             */
            colIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cell previous value.
             */
            prevValue?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cell value.
             */
            value?: string;
        }

        export interface CellSelectedEventArgs {

            /** Returns the active sheet index.
             */
            sheetIdx?: number;

            /** Returns the selected range.
             */
            selectedRange?: any[];

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface ContextMenuClickEventArgs {

            /** Returns target element Id.
             */
            Id?: string;

            /** Returns the target element.
             */
            element?: HTMLElement;

            /** Returns event information.
             */
            event?: any;

            /** Returns target element and event information.
             */
            events?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns target element parent Id.
             */
            parentId?: string;

            /** Returns target element parent text.
             */
            parentText?: string;

            /** Returns target element text.
             */
            text?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface DragEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the current cell row and column index.
             */
            currentCell?: any;

            /** Returns the drag cells range object.
             */
            dragAndDropRange?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the target item.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface DragShapeEventArgs {

            /** Returns the Spreadsheet model.
             */
            model?: any;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface DragStartEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the current cell row and column index.
             */
            currentCell?: any;

            /** Returns the drag cells range object.
             */
            dragAndDropRange?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the target item.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface DropEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the current cell row and column index.
             */
            currentCell?: any;

            /** Returns the drag cells range object.
             */
            dragAndDropRange?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the target item.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface EditRangeBeginEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the range option value.
             */
            range?: any;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface EditRangeCompleteEventArgs {

            /** Returns the sheet index.
             */
            sheetIdx?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the range option value.
             */
            range?: any;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface KeyDownEventArgs {

            /** Returns the sheet index.
             */
            sheetIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the boolean value.
             */
            isCommentEdit?: boolean;

            /** Returns the boolean value.
             */
            isEdit?: boolean;

            /** Returns the boolean value.
             */
            isSheetRename?: boolean;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface KeyUpEventArgs {

            /** Returns the sheet index.
             */
            sheetIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the boolean value.
             */
            isCommentEdit?: boolean;

            /** Returns the boolean value.
             */
            isEdit?: boolean;

            /** Returns the boolean value.
             */
            isSheetRename?: boolean;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface LoadEventArgs {

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cancel option value.
             */
            cancel?: boolean;

            /** Returns the active sheet index.
             */
            sheetIndex?: number;
        }

        export interface LoadCompleteEventArgs {

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface MenuClickEventArgs {

            /** Returns menu click element.
             */
            element?: HTMLElement;

            /** Returns the event information.
             */
            event?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns target element parent Id.
             */
            parentId?: string;

            /** Returns target element parent text.
             */
            parentText?: string;

            /** Returns target element text.
             */
            text?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface OnImportEventArgs {

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the cancel option value.
             */
            cancel?: boolean;

            /** Returns the imported data.
             */
            importData?: any;
        }

        export interface OpenFailureEventArgs {

            /** Returns the failure type.
             */
            failureType?: string;

            /** Returns the status index.
             */
            status?: number;

            /** Returns the status in text.
             */
            statusText?: string;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface PagerClickEventArgs {

            /** Returns the active sheet index.
             */
            activeSheet?: number;

            /** Returns the new sheet index.
             */
            gotoSheet?: number;

            /** Returns whether new sheet icon is clicked.
             */
            newSheet?: boolean;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface ResizeStartEventArgs {

            /** Returns the column index which column you start to resize.
             */
            colIndex?: number;

            /** Returns the row index which row you start to resize.
             */
            rowIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: any;

            /** Returns type of the request.
             */
            reqType?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface ResizeEndEventArgs {

            /** Returns the column index which you resized.
             */
            colIndex?: number;

            /** Returns old width of the column or shape.
             */
            oldWidth?: number;

            /** Returns new width of the column or shape.
             */
            newWidth?: number;

            /** Returns the row index which you resized.
             */
            rowIndex?: number;

            /** Returns old height of the row or shape.
             */
            oldHeight?: number;

            /** Returns new height of the row or shape.
             */
            newHeight?: number;

            /** Returns the Spreadsheet model.
             */
            model?: any;

            /** Returns type of the request.
             */
            reqType?: string;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface RibbonClickEventArgs {

            /** Returns element Id.
             */
            Id?: string;

            /** Returns target information.
             */
            prop?: any;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns status.
             */
            status?: boolean;

            /** Returns isChecked in boolean.
             */
            isChecked?: boolean;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface TabClickEventArgs {

            /** Returns the active tab index.
             */
            activeIndex?: number;

            /** Returns active tab header element.
             */
            activeHeader?: any;

            /** Returns previous active tab header element.
             */
            prevActiveHeader?: any;

            /** Returns previous active tab index.
             */
            prevActiveIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface TabSelectEventArgs {

            /** Returns the active tab index.
             */
            activeIndex?: number;

            /** Returns active tab header element.
             */
            activeHeader?: any;

            /** Returns previous active tab header element.
             */
            prevActiveHeader?: any;

            /** Returns previous active tab index.
             */
            prevActiveIndex?: number;

            /** Returns the Spreadsheet model.
             */
            model?: ej.Spreadsheet.Model;

            /** Returns the name of the event.
             */
            type?: string;

            /** Returns the target element.
             */
            target?: HTMLElement;

            /** Returns the cancel option value.
             */
            cancel?: boolean;
        }

        export interface AutoFillSettings {

            /** This property is used to set fillType unit in Spreadsheet. It has five types which are CopyCells, FillSeries, FillFormattingOnly, FillWithoutFormatting and FlashFill.
             * @Default {ej.Spreadsheet.AutoFillOptions.FillSeries}
             */
            fillType?: ej.Spreadsheet.AutoFillOptions | string;

            /** Gets or sets a value that indicates to enable or disable auto fill options in the Spreadsheet.
             * @Default {true}
             */
            showFillOptions?: boolean;
        }

        export interface ChartSettings {

            /** Gets or sets a value that defines the chart height in Spreadsheet.
             * @Default {220}
             */
            height?: number;

            /** Gets or sets a value that defines the chart width in the Spreadsheet.
             * @Default {440}
             */
            width?: number;
        }

        export interface ExportSettings {

            /** Gets or sets a value that indicates whether to enable or disable save feature in Spreadsheet. By enabling this feature, you can save existing Spreadsheet.
             * @Default {true}
             */
            allowExporting?: boolean;

            /** Gets or sets a value that indicates to define csvUrl for export to CSV format.
             * @Default {null}
             */
            csvUrl?: string;

            /** Gets or sets a value that indicates to define excelUrl for export to excel format.
             * @Default {null}
             */
            excelUrl?: string;

            /** Gets or sets a value that indicates to define password while export to excel format.
             * @Default {null}
             */
            password?: string;

            /** Gets or sets a value that indicates to define pdfUrl for export to PDF format.
             * @Default {null}
             */
            pdfUrl?: string;
        }

        export interface FormatSettings {

            /** Gets or sets a value that indicates whether to enable or disable cell border feature in the Spreadsheet.
             * @Default {true}
             */
            allowCellBorder?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable decimal places in the Spreadsheet.
             * @Default {true}
             */
            allowDecimalPlaces?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable font family feature in Spreadsheet.
             * @Default {true}
             */
            allowFontFamily?: boolean;
        }

        export interface ImportSettings {

            /** Sets import mapper to perform import feature in Spreadsheet.
             */
            importMapper?: string;

            /** Gets or sets a value that indicates whether to enable or disable import while initial loading.
             * @Default {false}
             */
            importOnLoad?: boolean;

            /** Sets import URL to access the online files in the Spreadsheet.
             */
            importUrl?: string;

            /** Gets or sets a value that indicates to define password while importing in the Spreadsheet.
             */
            password?: string;
        }

        export interface NameManager {

            /** Specifies the name for the cell or a range.
             */
            name?: string;

            /** Specifies the address for the cell or a range.
             */
            refersto?: string;
        }

        export interface PictureSettings {

            /** Gets or sets a value that indicates whether to enable or disable picture feature in Spreadsheet. By enabling this, you can add pictures in Spreadsheet.
             * @Default {true}
             */
            allowPictures?: boolean;

            /** Gets or sets a value that indicates to define height to picture in the Spreadsheet.
             * @Default {220}
             */
            height?: number;

            /** Gets or sets a value that indicates to define width to picture in the Spreadsheet.
             * @Default {440}
             */
            width?: number;
        }

        export interface PrintSettings {

            /** Gets or sets a value that indicates whether to enable or disable page setup support for printing in Spreadsheet.
             * @Default {true}
             */
            allowPageSetup?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable page size support for printing in Spreadsheet.
             * @Default {false}
             */
            allowPageSize?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable print feature in the Spreadsheet.
             * @Default {true}
             */
            allowPrinting?: boolean;
        }

        export interface RibbonSettingsApplicationTabMenuSettings {

            /** Gets or sets a value that indicates whether to enable or disable isAppend property in ribbon settings.
             * @Default {false}
             */
            isAppend?: boolean;

            /** Specifies the data source to append in application tab.
             * @Default {[]}
             */
            dataSource?: any[];
        }

        export interface RibbonSettingsApplicationTab {

            /** Gets or sets a value that indicates to set application tab type in Spreadsheet. It has two types, Menu and Backstage.
             * @Default {ej.Ribbon.ApplicationTabType.Backstage}
             */
            type?: ej.Ribbon.ApplicationTabType | string;

            /** Gets or sets an object that indicates menu settings for application tab in Spreadsheet.
             */
            menuSettings?: RibbonSettingsApplicationTabMenuSettings;
        }

        export interface RibbonSettings {

            /** Gets or sets an object that indicates application tab settings in Spreadsheet.
             */
            applicationTab?: RibbonSettingsApplicationTab;
        }

        export interface ScrollSettings {

            /** Gets or sets a value that indicates whether to enable or disable scrolling in Spreadsheet.
             * @Default {true}
             */
            allowScrolling?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable sheet on demand. By enabling this, it render only the active sheet element while paging remaining sheets are
             * created one by one.
             * @Default {false}
             */
            allowSheetOnDemand?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable virtual scrolling feature in the Spreadsheet.
             * @Default {true}
             */
            allowVirtualScrolling?: boolean;

            /** Gets or sets the value that indicates to define the height of spreadsheet.
             * @Default {100%}
             */
            height?: number | string;

            /** Gets or sets the value that indicates whether to enable or disable responsive mode in the Spreadsheet.
             * @Default {true}
             */
            isResponsive?: boolean;

            /** Gets or sets a value that indicates to set scroll mode in Spreadsheet. It has two scroll modes, Normal and Infinite.
             * @Default {ej.Spreadsheet.scrollMode.Infinite}
             */
            scrollMode?: ej.Spreadsheet.scrollMode | string;

            /** Gets or sets the value that indicates to define the height of the spreadsheet.
             * @Default {100%}
             */
            width?: number | string;
        }

        export interface SelectionSettings {

            /** Gets or sets a value that indicates to define active cell in spreadsheet.
             */
            activeCell?: string;

            /** Gets or sets a value that indicates to define animation time while selection in the Spreadsheet.
             * @Default {0.001}
             */
            animationTime?: number;

            /** Gets or sets a value that indicates to enable or disable animation while selection.
             * @Default {false}
             */
            enableAnimation?: boolean;

            /** Gets or sets a value that indicates to set selection type in Spreadsheet. It has three types which are Column, Row and Default.
             * @Default {ej.Spreadsheet.SelectionType.Default}
             */
            selectionType?: ej.Spreadsheet.SelectionType | string;

            /** Gets or sets a value that indicates to set selection unit in Spreadsheet. It has three types which are Single, Range and MultiRange.
             * @Default {ej.Spreadsheet.SelectionUnit.MultiRange}
             */
            selectionUnit?: ej.Spreadsheet.SelectionUnit | string;
        }

        export interface SheetsBorder {

            /** Specifies border type in the Spreadsheet.
             */
            type?: ej.Spreadsheet.BorderType | string;

            /** Specifies border color for range of cells in Spreadsheet.
             */
            color?: string;

            /** To apply border for the specified range of cell.
             */
            range?: string;
        }

        export interface SheetsCFormatRule {

            /** Specifies the conditions to apply for the range of cells in Spreadsheet.
             */
            action?: ej.Spreadsheet.CFormatRule | string;

            /** Specifies the color to apply for the range of cell while conditional formatting.
             */
            color?: ej.Spreadsheet.CFormatHighlightColor | string;

            /** Specifies the inputs for conditional formatting in Spreadsheet.
             * @Default {[]}
             */
            inputs?: any[];

            /** Specifies the range for conditional formatting in Spreadsheet.
             */
            range?: string;
        }

        export interface SheetsRangeSetting {

            /** Gets or sets the data to render the Spreadsheet.
             * @Default {null}
             */
            dataSource?: any;

            /** Specifies the header styles for the headers in datasource range.
             * @Default {null}
             */
            headerStyles?: any;

            /** Specifies the primary key for the datasource in Spreadsheet.
             */
            primaryKey?: string;

            /** Specifies the query for the datasource in Spreadsheet.
             * @Default {null}
             */
            query?: any;

            /** Gets or sets a value that indicates whether to enable or disable the datasource header in Spreadsheet.
             * @Default {true}
             */
            showHeader?: boolean;

            /** Specifies the start cell for the datasource range in Spreadsheet.
             * @Default {A1}
             */
            startCell?: string;
        }

        export interface SheetsRowsCellsComment {

            /** Get or sets the value that indicates whether to show or hide comments in Spreadsheet.
             * @Default {false}
             */
            isVisible?: boolean;

            /** Specifies the value for the comment in Spreadsheet.
             */
            value?: string;
        }

        export interface SheetsRowsCellsFormat {

            /** Specifies the number of decimal places for the given input.
             * @Default {2}
             */
            decimalPlaces?: number;

            /** Specifies the string format for the given input.
             */
            formatStr?: string;

            /** Specifies the thousand separator for the given input.
             * @Default {false}
             */
            thousandSeparator?: boolean;

            /** Specifies the type of the format in Spreadsheet.
             */
            type?: string;
        }

        export interface SheetsRowsCellsHyperlink {

            /** Specifies the web address for the hyperlink of a cell.
             */
            webAddr?: string;

            /** Specifies the cell address for the hyperlink of a cell.
             */
            cellAddr?: string;

            /** Specifies the sheet index to which the cell is referred.
             * @Default {1}
             */
            sheetIndex?: number;
        }

        export interface SheetsRowsCellsStyle {

            /** Specifies the background color of a cell in the Spreadsheet.
             */
            backgroundColor?: string;

            /** Specifies the font color of a cell in the Spreadsheet.
             */
            color?: string;

            /** Specifies the font weight of a cell in the Spreadsheet.
             */
            fontWeight?: string;
        }

        export interface SheetsRowsCell {

            /** Specifies the comment for a cell in Spreadsheet.
             * @Default {null}
             */
            comment?: SheetsRowsCellsComment;

            /** Specifies the format of a cell in Spreadsheet.
             * @Default {null}
             */
            format?: SheetsRowsCellsFormat;

            /** Specifies the hyperlink for a cell in Spreadsheet.
             * @Default {null}
             */
            hyperlink?: SheetsRowsCellsHyperlink;

            /** Specifies the index of a cell in Spreadsheet.
             * @Default {0}
             */
            index?: number;

            /** Specifies whether to lock or unlock a particular cell.
             * @Default {false}
             */
            isLocked?: boolean;

            /** Specifies the styles of a cell in Spreadsheet.
             * @Default {null}
             */
            style?: SheetsRowsCellsStyle;

            /** Specifies the value for a cell in Spreadsheet.
             */
            value?: string;
        }

        export interface SheetsRow {

            /** Gets or sets the height of a row in Spreadsheet.
             * @Default {20}
             */
            height?: number;

            /** Specifies the cells of a row in Spreadsheet.
             * @Default {[]}
             */
            cells?: SheetsRowsCell[];

            /** Gets or sets the index of a row in Spreadsheet.
             * @Default {0}
             */
            index?: number;
        }

        export interface Sheet {

            /** Specifies the border for the cell in the Spreadsheet.
             * @Default {[]}
             */
            border?: SheetsBorder[];

            /** Specifies the cell types for a cell or range in Spreadsheet.
             * @Default {[]}
             */
            cellTypes?: any[];

            /** Specifies the conditional formatting for the range of cell in Spreadsheet.
             * @Default {[]}
             */
            cFormatRule?: SheetsCFormatRule[];

            /** Gets or sets a value that indicates to define column count in the Spreadsheet.
             * @Default {21}
             */
            colCount?: number;

            /** Gets or sets a value that indicates to define column width in the Spreadsheet.
             * @Default {64}
             */
            columnWidth?: number;

            /** Gets or sets the data to render the Spreadsheet.
             * @Default {null}
             */
            dataSource?: any;

            /** Gets or sets a value that indicates whether to enable or disable field as column header in the Spreadsheet.
             * @Default {false}
             */
            fieldAsColumnHeader?: boolean;

            /** Gets or sets a value to freeze rows in the Spreadsheet.
             * @Default {0}
             */
            frozenRows?: number;

            /** Gets or sets a value to freeze columns in the Spreadsheet.
             * @Default {0}
             */
            frozenColumns?: number;

            /** Specifies the header styles for the headers in datasource range.
             * @Default {null}
             */
            headerStyles?: any;

            /** To hide the specified columns in Spreadsheet.
             * @Default {[]}
             */
            hideColumns?: any[];

            /** To hide the specified rows in Spreadsheet.
             * @Default {[]}
             */
            hideRows?: any[];

            /** To merge specified ranges in Spreadsheet.
             * @Default {[]}
             */
            mergeCells?: any[];

            /** Specifies the primary key for the datasource in Spreadsheet.
             */
            primaryKey?: string;

            /** Specifies the query for the dataSource in Spreadsheet.
             * @Default {null}
             */
            query?: any;

            /** Specifies single range or multiple range settings for a sheet in Spreadsheet.
             * @Default {[]}
             */
            rangeSettings?: SheetsRangeSetting[];

            /** Gets or sets a value that indicates to define row count in the Spreadsheet.
             * @Default {20}
             */
            rowCount?: number;

            /** Specifies the rows for a sheet in Spreadsheet.
             * @Default {[]}
             */
            rows?: SheetsRow[];

            /** Gets or sets a value that indicates whether to show or hide grid lines in the Spreadsheet.
             * @Default {true}
             */
            showGridlines?: boolean;

            /** Gets or sets a value that indicates whether to enable or disable the datasource header in Spreadsheet.
             * @Default {true}
             */
            showHeader?: boolean;

            /** Gets or sets a value that indicates whether to show or hide headings in the Spreadsheet.
             * @Default {true}
             */
            showHeadings?: boolean;

            /** Specifies the name for sheet in the Spreadsheet.
             * @Default {string}
             */
            sheetName?: string;

            /** Specifies the start cell for the datasource range in Spreadsheet.
             * @Default {A1}
             */
            startCell?: string;
        }

        enum AutoFillOptions {

            ///Specifies the CopyCells property in AutoFillOptions.
            CopyCells,

            ///Specifies the FillSeries property in AutoFillOptions.
            FillSeries,

            ///Specifies the FillFormattingOnly property in AutoFillOptions.
            FillFormattingOnly,

            ///Specifies the FillWithoutFormatting property in AutoFillOptions.
            FillWithoutFormatting,

            ///Specifies the FlashFill property in AutoFillOptions.
            FlashFill
        }


        enum scrollMode {

            ///To enable Infinite scroll mode for Spreadsheet.
            Infinite,

            ///To enable Normal scroll mode for Spreadsheet.
            Normal
        }


        enum SelectionType {

            ///To select only Column in Spreadsheet.
            Column,

            ///To select only Row in Spreadsheet.
            Row,

            ///To select both Column/Row in Spreadsheet.
            Default
        }


        enum SelectionUnit {

            ///To enable Single selection in Spreadsheet
            Single,

            ///To enable Range selection in Spreadsheet
            Range,

            ///To enable MultiRange selection in Spreadsheet
            MultiRange
        }


        enum BorderType {

            ///To apply top border for the given range of cell.
            Top,

            ///To apply left border for the given range of cell.
            Left,

            ///To apply right border for the given range of cell.
            Right,

            ///To apply bottom border for the given range of cell.
            Bottom,

            ///To apply outside border for the given range of cell.
            OutSide,

            ///To apply all border for the given range of cell.
            AllBorder,

            ///To apply thick box border for the given range of cell.
            ThickBox,

            ///To apply thick bottom border for the given range of cell.
            ThickBottom,

            ///To apply top and bottom border for the given range of cell.
            TopandBottom,

            ///To apply top and thick bottom border for the given range of cell.
            TopandThickBottom
        }


        enum CFormatRule {

            ///To identify greater than values in the given range of cells.
            GreaterThan,

            ///To identify less than values in the given range of cells.
            LessThan,

            ///To identify in between values in the given range of cells.
            Between,

            ///To identify the equal values in the given range of cells.
            EqualTo,

            ///To identify the specified text in the range of cells.
            TextContains,

            ///To identify the specified date in the range of cells.
            DateOccurs
        }


        enum CFormatHighlightColor {

            ///Highlights red with dark red text color.
            RedFillwithDarkRedText,

            ///Highlights yellow with dark yellow text color.
            YellowFillwithDarkYellowText,

            ///Highlights green with dark green text color.
            GreenFillwithDarkGreenText,

            ///Highlights with red fill.
            RedFill,

            ///Highlights with red text.
            RedText
        }


        enum ChartProperties {

            ///Specifies to make the data label center of the chart.
            DataLabelCenter,

            ///Specifies to make the data label inside base of the chart.
            DataLabelInsideBase,

            ///Specifies to make the data label inside end of the chart.
            DataLabelInsideEnd,

            ///Specifies to make the data label none of the chart.
            DataLabelNone,

            ///Specifies to make the data label outside end of the chart.
            DataLabelOutsideEnd,

            ///Specifies to make the legends to bottom of the chart.
            LegendsBottom,

            ///Specifies to make the legends to left of the chart.
            LegendsLeft,

            ///Specifies to make the legends to none of the chart.
            LegendsNone,

            ///Specifies to make the legends to right of the chart.
            LegendsRight,

            ///Specifies to make the legends to top of the chart.
            LegendsTop,

            ///To set the primary horizontal of the chart.
            PrimaryHorizontal,

            ///To set the primary horizontal axis title of the chart.
            PrimaryHorizontalAxisTitle,

            ///To set the primary major horizontal of the chart.
            PrimaryMajorHorizontal,

            ///To set the primary major vertical of the chart.
            PrimaryMajorVertical,

            ///To set the primary minor horizontal of the chart.
            PrimaryMinorHorizontal,

            ///To set the primary minor vertical of the chart.
            PrimaryMinorVertical,

            ///To set the primary vertical of the chart.
            PrimaryVertical,

            ///To set the primary vertical axis title of the chart.
            PrimaryVerticalAxisTitle,

            ///Specifies to make the title to center of the chart.
            TitleCenter,

            ///Specifies to make the title to far of the chart.
            TitleFar,

            ///Specifies to make the title to near of the chart.
            TitleNear,

            ///Specifies to make the title to none of the chart.
            TitleNone
        }
    }
}