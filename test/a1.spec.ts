import test from 'japa'
import {sum} from "../core/sum";

test.group('Example', () => {
  test('assert sum', (assert) => {
    assert.equal(2 + 2, 4)
  })

  test('1+2', (assert)=>{
    assert.equal(sum(1, 2), 3)
  })
})


