import { Component, OnInit, Input } from '@angular/core';

import { AbstractColDef, ColumnApi, GridOptions, IDatasource, IGetRowsParams, Module } from '@ag-grid-community/core';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { AgGridDatasource } from './model/aggrid.model';

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent extends AgGridDatasource implements OnInit {
  @Input() columns: AbstractColDef[];
  @Input() datasource: any[];
  modules: Module[] = [ServerSideRowModelModule];
  rowCount?: number;

  protected constructor(gridOptions: GridOptions) {
    super(Object.assign({},{
      rowModelType: 'infinite',
      pagination: false,
      rowSelection: 'none',
      suppressCellSelection: true,
      cacheBlockSize: 100,
     },gridOptions));
  }

  createColumns() {
    console.log(`Getting input columns here`)
    console.log(this.columns)
    return this.columns;
  }

  ngOnInit() {
    this.gridOptions.datasource = this.dataSource;
    this.createColumns();
    this.refreshColumns();
  }

  dataSource: IDatasource = { 
    getRows(params: IGetRowsParams): void {
      setTimeout(() => {
        console.log(`Getting updated input rows here`)
        console.log(this.datasource)
        params.successCallback(this.datasource, -1);
      }, 200);
    }
  }
}