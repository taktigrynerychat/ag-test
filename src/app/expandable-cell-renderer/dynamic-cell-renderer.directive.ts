import { ComponentFactoryResolver, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, ViewContainerRef } from '@angular/core';
import { GridOptions, ICellRendererParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[appDynamicCellRenderer]',
})
export class DynamicCellRendererDirective implements OnInit, OnDestroy {
  @Input() params: ICellRendererParams;
  @Input() data: any;
  @Input() fullData: any;
  @Output() toggleClick: EventEmitter<void> = new EventEmitter();

  public componentRef: any;
  public componentClass: any;
  private gridOptions: GridOptions;
  private subscriptions: Subscription = new Subscription();

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
      const newParams: ICellRendererParams = {
        ...this.params,
        value: this.data,
        data: {...this.fullData},
      };
      const factory = this.resolver.resolveComponentFactory(
        this.componentClass,
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.agInit(newParams);
      if (this.componentRef.instance.toggleClick && newParams.data.children?.length) {
        this.subscriptions.add(
          this.componentRef.instance.toggleClick.subscribe(linkTag => {
            this.toggleClick.emit(linkTag);
          }));
      }
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
