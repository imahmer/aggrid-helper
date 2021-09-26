import { Component, Input, AfterViewInit } from '@angular/core';


import { AbstractColDef, ColumnApi, GridApi, GridOptions, IDatasource, IGetRowsParams, IServerSideDatasource, IServerSideGetRowsParams, Module } from '@ag-grid-community/core';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { DEFAULT_GRID_OPTIONS } from "./model/grid-option.model";

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements AfterViewInit {
  @Input() datasource = [];
  @Input() customGridOptions: GridOptions;
  modules: Module[] = [ServerSideRowModelModule];
  private _defaultGridOptions: GridOptions = DEFAULT_GRID_OPTIONS;
  private _gridApi: GridApi;
  private _gridColumnApi: ColumnApi;
  gridOptions: GridOptions;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  onGridReady(params): void {
    this._gridApi = params.api;
    this._gridApi.setServerSideDatasource(this.createServerSideDatasource());
  }

  createServerSideDatasource() {
    var self = this;
    return {
      getRows(params: IServerSideGetRowsParams) {
        console.log(`Start Row: ${params.request.startRow}, End Row: ${params.request.endRow}`)
        params.successCallback(self.datasource, 150);
      }
    }
  }

  loadData() {
    this.gridOptions = Object.assign({}, this._defaultGridOptions, this.customGridOptions);
  }
}