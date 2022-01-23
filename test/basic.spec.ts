import test from 'japa'
import Person from '../core/Person'

test.group('Example', () => {
  test('add person', (assert) => {
    let p = new Person(1, 'joe',"doe",['car','hat'])
    assert.equal(typeof p, 'object')
  })
  })
