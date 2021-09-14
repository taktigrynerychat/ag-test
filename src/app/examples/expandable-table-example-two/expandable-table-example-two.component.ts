import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { ExpandableCellRendererComponent } from '../../cell-renderers/expandable-cell-renderer/expandable-cell-renderer.component';
import { ToggleCellRendererComponent } from '../../cell-renderers/toggle-cell-renderer/toggle-cell-renderer.component';

@Component({
  selector: 'app-expandable-table-example-2',
  templateUrl: './expandable-table-example-two.component.html',
  styleUrls: ['./expandable-table-example-two.component.less'],
})
export class ExpandableTableExampleTwoComponent {

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
      toggleCell: ToggleCellRendererComponent,
    },
    rowHeight: 70,
  };

  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'toggleCol',
      colId: 'toggleCol',
      cellRendererParams: {
        expandableCellRenderer: 'toggleCell',
      },
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
    {
      make: 'Porsche', model: 'Boxter', price: 72000, children: [
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
  ];
}
