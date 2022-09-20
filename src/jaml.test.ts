import { jaml } from './index'

const MOCK_INPUT = {
  str1: 'string 1',
  arr1: [
    { id: 'foo', name: 'bar '},
    { id: 'baz', name: 'bang '},
  ],
  obj1: {
    key1: 'obj1.value1',
    key2: {
      nest1: 'obj1.key2.nest1',
      bool1: true
    }
  },
  arr2: ['foo', 'bar', 'baz'],
  arrWObj1: ['snap', 'crackle', {
      arrObj: 'pop',
      nestedArrObj: {
        arrObjK1: 'arrWObj[2].nestedArrObj.arrObjK1'
      }
    }
  ],
  nullable: null,
}

const EXPECTED = `str1: string 1
obj1:
  key1: obj1.value1
key2:
  nest1: obj1.key2.nest1
arr2:
  - foo
  - bar
  - baz
arrWObj1:
  - snap
  - crackle
    arrObj: pop
    nestedArrObj:
      arrObjK1: arrWObj[2].nestedArrObj.arrObjK1
`

test('is creates string field', () => {
  const json = { foo: 'bar' }
  const expected = 'foo: bar'
  const actual = jaml(json)
  expect(actual).toBe(expected)
})

test.skip('it outputs proper yml string', () => {
  const actual = jaml(MOCK_INPUT)
  console.log(actual)
  // expect(actual).toBe(EXPECTED)
})
