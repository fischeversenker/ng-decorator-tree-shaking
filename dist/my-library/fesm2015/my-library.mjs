import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

function noop() {
    return  (target) => target;
}
let MyLibraryComponent = class MyLibraryComponent {
};
MyLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.7", type: MyLibraryComponent, selector: "lib-my-library", ngImport: i0, template: `my-library works!`, isInline: true });
MyLibraryComponent = __decorate([
    noop()
], MyLibraryComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-library',
                    template: `my-library works!`,
                }]
        }] });

class MyLibraryModule {
}
MyLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryModule, declarations: [MyLibraryComponent], exports: [MyLibraryComponent] });
MyLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: MyLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MyLibraryComponent],
                    exports: [MyLibraryComponent],
                }]
        }] });

/*
 * Public API Surface of my-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibraryComponent, MyLibraryModule };
//# sourceMappingURL=my-library.mjs.map
