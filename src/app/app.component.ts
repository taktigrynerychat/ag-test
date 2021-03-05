import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  gridOptions: GridOptions = {
    context: {
      toggleColumn: 'toggleCol',
      toggleColumnContent: 'Похожие:'
    },
    frameworkComponents: {
      helloKittyRenderer: HelloKittyComponent,
    },
    rowHeight: 40,
  };

  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'toggleCol',
      colId: 'toggleCol',
      cellRenderer: 'helloKittyRenderer',
    },
    {
      field: 'make',
      colId: 'make',
      cellRenderer: 'helloKittyRenderer',
    },
    {
      field: 'model',
      colId: 'model',
      cellRenderer: 'helloKittyRenderer',
    },
    {
      field: 'price',
      colId: 'price',
      cellRenderer: 'helloKittyRenderer',
    },
  ];

  rowData = [
    {toggleCol: '', make: 'Toyota', model: 'Celica', price: 35000},
    {toggleCol: '', make: 'Ford', model: 'Mondeo', price: 32000},
    {
      make: 'Hello Kitty',
      model: 'Kitty',
      price: 0,
      children: [
        {make: 'Кастом', model: '😁🤬🥵', price: 1},
        {make: 'Строки', model: '🤑🙄😴', price: 2},
        {make: 'Чеееек', model: '(⓿_⓿)', price: 3},
      ],
    },
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
    {toggleCol: '', make: 'Porsche', model: 'Boxter', price: 72000},
  ];

}
