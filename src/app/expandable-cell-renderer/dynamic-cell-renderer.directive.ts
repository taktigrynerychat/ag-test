import { ComponentFactoryResolver, Directive, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridApi, GridOptions, ICellRendererParams } from 'ag-grid-community';


@Directive({
  selector: '[appDynamicCellRenderer]',
})
export class DynamicCellRendererDirective implements OnInit {
  @Input() params: ICellRendererParams;
  @Input() data: any;
  public componentRef: any;
  public componentClass: any;
  private gridOptions: GridOptions;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    // @ts-ignore
    this.gridOptions = this.params.api.gridCore.gridOptions;
    if (typeof this.params.colDef.cellRendererParams?.expandableCellRenderer === 'string') {
      this.componentClass = this.gridOptions.frameworkComponents[this.params.colDef.cellRendererParams.expandableCellRenderer];
    } else {
      this.componentClass = this.params.colDef.cellRendererParams?.expandableCellRenderer;
    }
    if (this.componentClass) {
      this.params.value = this.data;
      const factory = this.resolver.resolveComponentFactory(
        this.componentClass,
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.agInit(this.params);
    }

  }
}
