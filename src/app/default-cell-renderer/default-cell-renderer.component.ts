import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-default-cell-renderer',
  templateUrl: './default-cell-renderer.component.html',
  styleUrls: ['./default-cell-renderer.component.less'],
})
export class DefaultCellRendererComponent {
  public value: any;
  public agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  public refresh(params: ICellRendererParams): boolean {
    return false;
  }

}
