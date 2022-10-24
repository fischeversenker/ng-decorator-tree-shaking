import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';

@NgModule({
  declarations: [MyLibraryComponent],
  exports: [MyLibraryComponent],
})
export class MyLibraryModule {}
