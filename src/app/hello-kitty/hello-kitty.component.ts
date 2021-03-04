import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-hello-kitty',
  templateUrl: './hello-kitty.component.html',
  styleUrls: ['./hello-kitty.component.less'],
})
export class HelloKittyComponent implements AgRendererComponent {
  params: ICellRendererParams;
  key: string;
  heightChanged = false;
  initialHeight;

  constructor() {
  }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.key = this.params.column.getColId();
    this.initialHeight = this.params.node.rowHeight;
  }

  public refresh(params: ICellRendererParams): boolean {
    return false;
  }

  toggle(): void {
    this.heightChanged = !this.heightChanged;
    this.params.api.resetRowHeights();
    this.params.node.setRowHeight(
      this.heightChanged
        ? (this.params.data.children.length + 1) * this.initialHeight
        : this.initialHeight,
    );
    this.params.api.onRowHeightChanged();
  }

}
