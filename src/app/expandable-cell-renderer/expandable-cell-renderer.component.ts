import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-expandable-cell-renderer',
  templateUrl: './expandable-cell-renderer.component.html',
  styleUrls: ['./expandable-cell-renderer.component.less']
})
export class ExpandableCellRendererComponent {
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
