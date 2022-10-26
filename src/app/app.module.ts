import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibraryModule } from 'my-library';

import { AppComponent } from './app.component';
import { UnusedComponentComponent } from './unused-component.component';

@NgModule({
  declarations: [AppComponent, UnusedComponentComponent],
  imports: [BrowserModule, MyLibraryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
