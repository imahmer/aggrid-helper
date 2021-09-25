import { GridOptions } from "@ag-grid-community/core";

export const DEFAULT_GRID_OPTIONS: GridOptions = {
    //// See here: https://www.ag-grid.com/angular-data-grid/localisation/
    // localeText: AgGridLocaleText,
    defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true,
    },
    rowData: null,
    suppressDragLeaveHidesColumns: true,
    suppressNoRowsOverlay: false,
    suppressLoadingOverlay: false,
    // loadingOverlayComponent: 'customLoadingOverlayComponent',
    // noRowsOverlayComponent: 'customNoRowsOverlayComponent'
}