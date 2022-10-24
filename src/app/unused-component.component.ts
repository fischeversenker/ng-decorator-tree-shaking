import { Component } from '@angular/core';

/*@__PURE__*/
function noop() {
  return /*@__PURE__*/(target: any) => target;
}

@noop()
@Component({
  selector: 'app-unused-component',
  template: 'unused template'
})
export class UnusedComponentComponent {}
