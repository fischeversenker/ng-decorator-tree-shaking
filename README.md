# NgDecoratorTreeShaking

Reproduction repository to showcase tree-shaking problems when using decorators.

This repository contains:
- a library at `/projects/my-library`. This library contains and exports a single module/component.
- an application at `/src/...`.  It imports the library module in the `app.module.ts` but does not use the exported library component anywhere.
- a `dist` folder (that is kept up-to-date with a `pre-commit` hook) for your convenience

## Problem

The [library component](projects/my-library/src/lib/my-library.component.ts) has a custom decorator. **Without** the decorator the component is tree-shaken. **With** the decorator the component is included in the apps production bundle.

## Quick start

```shell
# install dependencies
yarn install

# build the app
yarn ng build ng-decorator-tree-shaking
```

Now inspect the generated [main bundle](dist/ng-decorator-tree-shaking/main.js) and look for the component selector `lib-my-library`. It's there. If you remove the decorator from the [library component](projects/my-library/src/lib/my-library.component.ts) and rebuild the app, the component is not included in the main bundle.
