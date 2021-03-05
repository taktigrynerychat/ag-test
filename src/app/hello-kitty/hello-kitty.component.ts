import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-hello-kitty',
  templateUrl: './hello-kitty.component.html',
  styleUrls: ['./hello-kitty.component.less'],
})
export class HelloKittyComponent implements AgRendererComponent {
  public params: ICellRendererParams;
  public key: string;
  public initialHeight: number;

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

  public toggle(): void {
    this.params.node.setExpanded(!this.params.node.expanded);
    this.params.api.resetRowHeights();
    this.params.node.setRowHeight(
      this.params.node.expanded
        ? (this.params.data.children.length + 1) * this.initialHeight
        : this.initialHeight,
    );
    this.params.api.onRowHeightChanged();
  }

}
