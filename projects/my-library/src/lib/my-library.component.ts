import { Component } from '@angular/core';

// noop decorator factory
/*@__PURE__*/
function noopDecoratorFactory() {
  return /*@__PURE__*/ (target: any) => target;
}

// noop decorator function
/*@__PURE__*/
function noopDecorator(target: any) {
  return target;
}

@noopDecoratorFactory()
// @noopDecorator
@Component({
  selector: 'lib-my-library',
  template: `my-library works!`
})
export class MyLibraryComponent {}
