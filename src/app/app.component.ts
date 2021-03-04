import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridApi, GridOptions, RowNode } from 'ag-grid-community';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  gridOptions: GridOptions = {
    frameworkComponents: {
      hi: HelloKittyComponent,
    },
    rowHeight: 40,
  };
  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'seems',
      colId: 'seems',
      cellRenderer: 'hi',
    },
    {
      field: 'make',
      colId: 'make',
      cellRenderer: 'hi',
    },
    {
      field: 'model',
      colId: 'model',
      cellRenderer: 'hi',
    },
    {
      field: 'price',
      colId: 'price',
      cellRenderer: 'hi',
    },
  ];

  rowData = [
    {seems: '', make: 'Toyota', model: 'Celica', price: 35000},
    {seems: '', make: 'Ford', model: 'Mondeo', price: 32000},
    {
      make: 'Hello Kitty', model: 'Boxter', price: 72000, children: [
        {make: 'Кастом', model: 'Celica', price: 35000},
        {make: 'Строки', model: 'Mondeo llasdalsd la ldalsdl lasld lalsdlasld lalsd lalsdl alsdllalsd lalsdl asldl alsdl lasdl alsdl ald asdl alsd lalsd ', price: 32000},
        {make: 'Чеееек', model: 'Boxter', price: 72000},
      ],
    },
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {seems: '', make: 'Porsche', model: 'Boxter', price: 72000},
  ];

  toggled(e): void {
    console.log(e);
  }
}
