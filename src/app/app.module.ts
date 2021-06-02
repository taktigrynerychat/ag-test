import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { DynamicCellRendererDirective } from './expandable-cell-renderer/dynamic-cell-renderer.directive';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';
import { ExpandableCellRendererComponent } from './expandable-cell-renderer/expandable-cell-renderer.component';
import { DefaultCellRendererComponent } from './default-cell-renderer/default-cell-renderer.component';
import { ToggleCellRendererComponent } from './toggle-cell-renderer/toggle-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloKittyComponent,
    ExpandableCellRendererComponent,
    DefaultCellRendererComponent,
    DynamicCellRendererDirective,
    ToggleCellRendererComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([HelloKittyComponent, DefaultCellRendererComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
