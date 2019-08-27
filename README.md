[![Generic badge](https://img.shields.io/badge/status-experimental-red.svg)](https://shields.io/)
## Installation
```sh
$ yarn add typescript-concrete-optics

```
## API reference
#### compose

`function compose<A, B, C>(left: Lens<A, B>, right: Lens<B, C>): Lens<A, C>;
function compose<A, B, C>(left: Prism<A, B>, right: Prism<B, C>): Prism<A, C>;
function compose<A, B, C>(left: Iso<A, B>, right: Iso<B, C>): Iso<A, C>;
function compose<A, B, C>(left: Iso<A, B>, right: Lens<B, C>): Lens<A, C>;
function compose<A, B, C>(left: Lens<A, B>, right: Iso<B, C>): Lens<A, C>;
function compose<A, B, C>(left: Iso<A, B>, right: Prism<B, C>): Prism<A, C>;
function compose<A, B, C>(left: Prism<A, B>, right: Iso<B, C>): Prism<A, C>;
function compose<A, B, C>(left: Optic<A, B>, right: Optic<B, C>): Optic<A, C>;
function compose<R extends Optic<any, any>>(...args: Array<Optic<any, any>>): R;`

Compose several different optics. Function can receive one or more
arguments with type-aligned `Optic`s, but type signatures exist
only for two parameters.

```ts
const lens = optics.identityLens();
const prism = optics.identityPrism();
const iso = optics.identityIso();

assert.isTrue(optics.isLens(optics.compose(lens, lens)));
assert.isTrue(optics.isPrism(optics.compose(prism, prism)));
assert.isTrue(optics.isIso(optics.compose(iso, iso)));
assert.isTrue(optics.isLens(optics.compose(iso, lens)));
assert.isTrue(optics.isPrism(optics.compose(iso, prism)));
assert.isTrue(optics.isCompose(optics.compose(lens, prism)));
```
