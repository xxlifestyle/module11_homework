const countDown = require('./task11.js');

describe('Сount down',() => {
  it('Сount down numbers - 10', () => {
      const result = countDown(10)
      expect(result).toBe(10, 9, 8, 7, 6, 5, 4 ,3, 2 ,1)
  })
  it('Сount down numbers 4', () => {
      const result = countDown(4)
      expect(result).toBe(4 ,3 ,2 ,1)
  })
})