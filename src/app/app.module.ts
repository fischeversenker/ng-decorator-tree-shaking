import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibraryModule } from 'projects/my-library/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
