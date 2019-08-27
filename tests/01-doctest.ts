
const assert = require('chai').assert;
import * as optics from '../src';


// --[ src/internal/index.ts ]--
describe("absurd", () => {
  it('satisfies doctests', () => {
    type Fruit = 'apple'|'orange';
    type Color = 'red'|'yellow'|'orange'|'green'|'blue'|'violet'|'black'|'white';
     
    function fruitColor(fruit: Fruit): Color[] {
      if (fruit === 'orange') return ['orange'];
      if (fruit === 'apple') return ['red', 'yellow', 'green'];
      return absurd(fruit);
    }
  });
});
// --[ src/index.ts ]--
describe("compose", () => {
  it('satisfies doctests', () => {
    const lens = optics.identityLens();
    const prism = optics.identityPrism();
    const iso = optics.identityIso();
    assert.isTrue(optics.isLens(optics.compose(lens, lens)));
    assert.isTrue(optics.isPrism(optics.compose(prism, prism)));
    assert.isTrue(optics.isIso(optics.compose(iso, iso)));
    assert.isTrue(optics.isLens(optics.compose(iso, lens)));
    assert.isTrue(optics.isPrism(optics.compose(iso, prism)));
    assert.isTrue(optics.isCompose(optics.compose(lens, prism)));
  });
});