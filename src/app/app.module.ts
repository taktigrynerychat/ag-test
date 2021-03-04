import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HelloKittyComponent } from './hello-kitty/hello-kitty.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloKittyComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([HelloKittyComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
