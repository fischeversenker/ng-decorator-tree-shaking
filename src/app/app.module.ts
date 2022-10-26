import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibraryWithLocalizeModule } from 'library-with-localize';
import { MyLibraryModule } from 'my-library';

import { AppComponent } from './app.component';
import { UnusedComponentWithLocalizeComponent } from './unused-component-with-localize.component';
import { UnusedComponentComponent } from './unused-component.component';

@NgModule({
  declarations: [AppComponent, UnusedComponentComponent, UnusedComponentWithLocalizeComponent],
  imports: [BrowserModule, MyLibraryModule, LibraryWithLocalizeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
