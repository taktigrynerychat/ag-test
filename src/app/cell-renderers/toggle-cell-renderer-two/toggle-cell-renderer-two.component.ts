import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

type ToggleCellRendererParams = ICellRendererParams & { clicked(params: any): void };

@Component({
  selector: 'app-toggle-cell-renderer-two',
  templateUrl: './toggle-cell-renderer-two.component.html',
  styleUrls: ['./toggle-cell-renderer-two.component.less'],
})
export class ToggleCellRendererTwoComponent implements ICellRendererAngularComp {
  public value: any;
  public params: ToggleCellRendererParams;

  public agInit(params: ToggleCellRendererParams): void {
    this.params = params;
    this.value = params.value;
  }

  public refresh(params: ICellRendererParams): boolean {
    return false;
  }

  public toggleClick(): void {
    if ( this.params.clicked) {
      this.params.clicked({colDef: this.params.colDef, data: this.params.data});
    }
  }
}
