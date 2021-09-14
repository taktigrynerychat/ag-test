import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { DefaultCellRendererComponent } from './cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { DynamicCellRendererDirective } from './cell-renderers/expandable-cell-renderer/dynamic-cell-renderer.directive';
import { ExpandableCellRendererComponent } from './cell-renderers/expandable-cell-renderer/expandable-cell-renderer.component';
import { FullCellRendererComponent } from './cell-renderers/full-cell-renderer/full-cell-renderer.component';
import { ToggleCellRendererTwoComponent } from './cell-renderers/toggle-cell-renderer-two/toggle-cell-renderer-two.component';
import { ToggleCellRendererComponent } from './cell-renderers/toggle-cell-renderer/toggle-cell-renderer.component';
import { ExpandableTableExampleComponent } from './examples/expandable-table-example/expandable-table-example.component';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';
import { ExpandableTableExampleTwoComponent } from './examples/expandable-table-example-two/expandable-table-example-two.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloKittyComponent,
    ExpandableCellRendererComponent,
    DefaultCellRendererComponent,
    DynamicCellRendererDirective,
    ToggleCellRendererComponent,
    ToggleCellRendererTwoComponent,
    FullCellRendererComponent,
    ExpandableTableExampleComponent,
    ExpandableTableExampleTwoComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      DefaultCellRendererComponent,
      ToggleCellRendererTwoComponent,
      FullCellRendererComponent,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
