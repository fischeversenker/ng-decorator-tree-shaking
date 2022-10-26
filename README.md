# NgDecoratorTreeShaking

Reproduction repository to showcase problems with tree-shaking of i18n extractions.

This repository contains:
- a library at `/projects/my-library`. This library contains and exports a [single module/component](projects/my-library/src/lib/my-library.component.ts).
- a library at `/projects/library-with-localize`. This library contains and exports a [single module/component](projects/library-with-localize/src/lib/library-with-localize.component.ts).
- an application at `/src/...`.  It imports the library modules in the `app.module.ts` **but does not use the exported library components anywhere**.

## Problem

Unused translation strings are included in the apps extracted translations. It seems like only translations are included from files that don't explicitly import and use the `$localize` function.

## Reproduction steps

```shell
# install dependencies
yarn install

# build the libraries
yarn ng build my-library && yarn ng build library-with-localize

# extract translations
yarn ng extract-i18n
```

Now verify that the generated [`messages.xlf`](messages.xlf) contains unused translations from only these components that don't explicitly import and use `$localize`.
