import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AgGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    AgGridComponent
  ]
})
export class SharedModule { }
