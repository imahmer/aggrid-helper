import { AbstractColDef, ColumnApi, GridApi, GridOptions } from "@ag-grid-community/core";
import { DEFAULT_GRID_OPTIONS } from "./grid-option.model";

export abstract class AgGridDatasource {

    private _gridOptions: GridOptions = DEFAULT_GRID_OPTIONS;
    private _gridApi: GridApi;
    private _gridColumnApi: ColumnApi;

    protected constructor(gridOptions: GridOptions) {
        this._gridOptions = Object.assign({}, this._gridOptions, gridOptions);
    }

    refreshColumns(): void {
        if (this._gridApi) {
            this._gridApi.setColumnDefs(this.createColumns());
        }
    }

    abstract createColumns(): AbstractColDef[];

    onGridReady(event): void {
        this._gridApi = event.api;
        this._gridColumnApi = event.columnApi;
    }

    get gridOptions(): GridOptions {
        return this._gridOptions;
    }

    get gridApi(): GridApi {
        return this._gridApi;
    }

    get gridColumnApi(): ColumnApi {
        return this._gridColumnApi;
    }
  }