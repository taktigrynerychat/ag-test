import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-full-cell-renderer',
  templateUrl: './full-cell-renderer.component.html',
  styleUrls: ['./full-cell-renderer.component.less'],
})
export class FullCellRendererComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;

  constructor() {
  }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  public refresh(params: ICellRendererParams): boolean {
    return false;
  }

}
