import { Component } from '@angular/core';
import { $localize } from '@angular/localize/init';

@Component({
  selector: 'lib-library-with-localize',
  template: `<div i18n>unused library template with localize</div>`,
})
export class LibraryWithLocalizeComponent {
  name = $localize`my name`;
}
