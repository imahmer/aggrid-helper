import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid-angular-helper';
  columns: any[];
  rowData = [{}];
  constructor() {
    this.columns = [{
      flex: 1,
      headerName: "LOAN NO",
      rowGroup: true,
      hide: true,
      field: "loanNumber",
    },
    {
      flex: 1,
      headerName: "LOAN ID",
      hide: true,
      field: "loanId",
    },
    {
      flex: 1,
      headerName: "ADDRESS",
      field: "propertyAddress",
    },
    {
      flex: 1,
      headerName: "BORROWER",
      field: "borrowerName",
      sortable: true
    },
    {
      flex: 1,
      headerName: "VENDOR",
      field: "vendorName",
    },
    {
      flex: 1,
      headerName: "BRANCH",
      field: "branchName",
    }];
    
    for (let index = 0; index < 100; index++) {
      setTimeout(() => {
        this.rowData.push({loanNumber: '123',loanId: 'OVM123',propertyAddress: 'loreum ispum dore',borrowerName: 'Ahmer',vendorName: 'UBL', branchName: 'I I Chundgrigar'})
      }, 500);
    }
  }
}
