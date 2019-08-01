import test from 'tape';
import flatten from '../src/javascript/index';

const initial = [0, 1, [2, 3], [4, [5, 6, 7]]];
const expected = [0, 1, 2, 3, 4, 5, 6, 7];

test('Flattens array of nested integers', function(assert) {
  assert.looseEqual(flatten(initial), expected, 'arrays should be equal');
  assert.end();
});
