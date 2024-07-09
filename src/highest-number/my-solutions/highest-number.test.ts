import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  test('should get the only element in the list if there is only one element', () => {
    const given = [100]

    const actual = getHighestNumber(given)

    expect(actual).toBe(100)
  })

  test('should get the highest numbers amongst several numbers', () => {
    const given = [1, 3, 2]

    const actual = getHighestNumber(given)

    expect(actual).toBe(3)
  })

  test('should get the highest numbers amongst several negative numbers', () => {
    const given = [-1, -2, -3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
