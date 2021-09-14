import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions, RowNode } from 'ag-grid-community';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { FullCellRendererComponent } from '../../cell-renderers/full-cell-renderer/full-cell-renderer.component';
import { ToggleCellRendererTwoComponent } from '../../cell-renderers/toggle-cell-renderer-two/toggle-cell-renderer-two.component';


@Component({
  selector: 'app-expandable-table-example-1',
  templateUrl: './expandable-table-example.component.html',
  styleUrls: ['./expandable-table-example.component.less']
})
export class ExpandableTableExampleComponent {
  gridOptions: GridOptions = {
    frameworkComponents: {
      defaultCell: DefaultCellRendererComponent,
      toggleCell: ToggleCellRendererTwoComponent,
      fullWidthCellRenderer: FullCellRendererComponent,
    },
    rowHeight: 70,
  };

  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'toggleCol',
      colId: 'toggleCol',
      cellRenderer: 'toggleCell',
      cellRendererParams: {
        clicked: ({colDef, data}: { colDef: ColDef, data: any }) => {
          const node: RowNode = this.gridOptions.api.getRowNode(data.id);
          const message: any = {id: `expanded_${ data.id }`, message: `hello id_${ data.id }`, fullWidth: true};

          if (!node.data.expanded) {
            this.gridOptions.api.applyTransaction({
              add: [message],
              addIndex: node.rowIndex + 1,
            });
            node.data.expanded = true;
          } else {
            this.gridOptions.api.applyTransaction({
              remove: [{id: `expanded_${ data.id }`}],
            });
            node.data.expanded = false;
          }
        },
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
      cellRenderer: 'defaultCell',
    },
  ];

  rowData: any = [
    {id: 1, make: 'Porsche1', model: 'Boxter', price: 172000},
    {id: 2, make: 'Porsche2', model: 'Boxter', price: 272000},
    {id: 3, make: 'Porsche3', model: 'Boxter', price: 372000},
    {id: 4, make: 'Porsche4', model: 'Boxter', price: 472000},
    {id: 5, make: 'Porsche5', model: 'Boxter', price: 572000},
    {id: 6, make: 'Porsche6', model: 'Boxter', price: 672000},
    {id: 7, make: 'Porsche7', model: 'Boxter', price: 772000},
    {id: 8, make: 'Porsche8', model: 'Boxter', price: 872000},
  ];

  public isFullWidthCell(rowNode: RowNode): boolean {
    return rowNode.data.fullWidth;
  }

  public getRowNodeId(data: any): number {
    return data.id;
  }
}
