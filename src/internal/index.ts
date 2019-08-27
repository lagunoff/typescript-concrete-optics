/**
 * Helper for totality checking
 * 
 *    type Fruit = 'apple'|'orange';
 *    type Color = 'red'|'yellow'|'orange'|'green'|'blue'|'violet'|'black'|'white';
 *     
 *    function fruitColor(fruit: Fruit): Color[] {
 *      if (fruit === 'orange') return ['orange'];
 *      if (fruit === 'apple') return ['red', 'yellow', 'green'];
 *      return absurd(fruit);
 *    }
 */
export function absurd(x: never): any {
  throw new Error('absurd: unreachable code');
}
