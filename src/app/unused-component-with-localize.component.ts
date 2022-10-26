import { Component } from '@angular/core';
import { $localize } from '@angular/localize/init';

@Component({
  selector: 'app-unused-component',
  template: '<div i18n>unused template with localize</div>'
})
export class UnusedComponentWithLocalizeComponent {
  name = $localize`my name`;
}
