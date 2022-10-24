import { Component } from '@angular/core';

/*@__PURE__*/
function noop() {
  return /*@__PURE__*/(target: any) => target;
}

@noop()
@Component({
  selector: 'lib-my-library',
  template: `my-library works!`,
})
export class MyLibraryComponent {}
