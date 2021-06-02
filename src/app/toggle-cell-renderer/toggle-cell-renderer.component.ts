import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-toggle-cell-renderer',
  templateUrl: './toggle-cell-renderer.component.html',
  styleUrls: ['./toggle-cell-renderer.component.less'],
})
export class ToggleCellRendererComponent {
  @Output() toggleClick: EventEmitter<void> = new EventEmitter();
  public value: any;
  public params: ICellRendererParams;

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value = params.value;
  }

  public refresh(params: ICellRendererParams): boolean {
    return false;
  }

}
