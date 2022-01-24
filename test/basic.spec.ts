import test from 'japa'
import Person from '../core/Person'
import Santa from "../core/Santa";

test.group('basic', () => {
  test.skip('add person', (assert) => {
    let p = new Person(1, 'joe',"doe",['car','hat'])
    assert.equal(typeof p, 'object')
  })

  test('shuffle', (assert) => {
    const persons = [
      new Person(1, 'joe','doe', ['apple']),
      new Person(1, 'ricko','ridd', ['mazzerati']),
      new Person(1, 'kent','back', ['house']),
    ]
    const s: Santa = new Santa()
    let rez = s.shuffle(persons)

    assert.equal(rez,true)
  })
  })
