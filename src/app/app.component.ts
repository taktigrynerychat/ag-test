import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { DefaultCellRendererComponent } from './default-cell-renderer/default-cell-renderer.component';
import { ExpandableCellRendererComponent } from './expandable-cell-renderer/expandable-cell-renderer.component';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  gridOptions: GridOptions = {
    defaultColDef: {
      cellRenderer: 'expandableCell',
    },
    context: {
      toggleColumn: 'toggleCol',
      toggleColumnContent: 'Похожие:',
    },
    frameworkComponents: {
      expandableCell: ExpandableCellRendererComponent,
      defaultCell: DefaultCellRendererComponent,
    },
    rowHeight: 70,
  };

  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'toggleCol',
      colId: 'toggleCol',
    },
    {
      field: 'make',
      colId: 'make',
    },
    {
      field: 'model',
      colId: 'model',
    },
    {
      field: 'price',
      colId: 'price',
      cellRendererParams: {
        expandableCellRenderer: 'defaultCell',
      },
    },
  ];

  rowData = [
    // {make: 'Toyota', model: 'Celica', price: 35000},
    // {make: 'Ford', model: 'Mondeo', price: 32000},
    {
      make: 'Hello Kitty',
      model: 'Kitty',
      price: 122,
      children: [
        {make: 'Кастом', model: '😁🤬🥵', price: 1},
        {make: 'Строки', model: '🤑🙄😴', price: 2},
        {make: 'Чеееек', model: '(⓿_⓿)', price: 3},
      ],
    },
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
  ];

}
