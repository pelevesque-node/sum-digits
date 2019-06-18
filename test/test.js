/* global describe, it */
'use strict'

const expect = require('chai').expect
const sumDigits = require('../index')

describe('#sumDigits()', () => {
  describe('#should work with the sumPlainDigits flag set to false', () => {
    it('should not count digits when the sumPlainDigits flag is false', () => {
      const expected = 0
      const str = '12345'
      const result = sumDigits(str, { sumPlainDigits: false })
      expect(result).to.equal(expected)
    })

    it('should still run substringsToDigits assignments if the sumPlainDigits flag is false', () => {
      const expected = 8
      const str = '12345'
      const substringsToDigits = { '12': 1, '34': 2, '345': 5 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits, sumPlainDigits: false })
      expect(result).to.equal(expected)
    })
  })

  describe('#should work without substringsToDigits assignments', () => {
    it('should return 0 for an empty string', () => {
      const expected = 0
      const str = ''
      const result = sumDigits(str)
      expect(result).to.equal(expected)
    })

    it('should sum a string composed solely of digits', () => {
      const expected = 45
      const str = '1234567890'
      const result = sumDigits(str)
      expect(result).to.equal(expected)
    })

    it('should sum a string while ignoring non-digit characters', () => {
      const expected = 45
      const str = '1a2bc3.456#$78@9!0'
      const result = sumDigits(str)
      expect(result).to.equal(expected)
    })
  })

  describe('#should work with substringsToDigits with single character keys', () => {
    it('should work with substringsToDigits with assignments that are numbers', () => {
      const expected = 666
      const str = '1a2b3!'
      const substringsToDigits = { 'a': 5, 'b': 55, '!': 600 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with assignments that are stringified numbers', () => {
      const expected = 666
      const str = '1a2b3!'
      const substringsToDigits = { 'a': '5', 'b': '55', '!': '600' }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that are numbers', () => {
      const expected = 576
      const str = '1234'
      const substringsToDigits = { 1: 11, 2: 222, 3: 333 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that are stringified numbers', () => {
      const expected = 576
      const str = '1234'
      const substringsToDigits = { '1': 11, '2': 222, '3': 333 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore substringsToDigits assignments that return non-digit characters', () => {
      const expected = 6
      const str = '1a2b3!'
      const substringsToDigits = { 'a': '!', '$': '@', '#': '#' }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })
  })

  describe('#should work with substringsToDigits with multiple character keys', () => {
    it('should work with substringsToDigits with assignments that are numbers', () => {
      const expected = 666
      const str = '1ab2cd3man'
      const substringsToDigits = { '1a': 1, 'ab': 5, 'cd': 54, 'man': 600 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with assignments that are stringified numbers', () => {
      const expected = 666
      const str = '1ab2cd3man'
      const substringsToDigits = { '1a': '1', 'ab': '5', 'cd': '54', 'man': '600' }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that overlap', () => {
      const expected = 20
      const str = '1ab2abd3bd'
      const substringsToDigits = { 'ab': 1, 'b': 2, 'bd': 3 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that are nested', () => {
      const expected = 87
      const str = '12panama34'
      const substringsToDigits = { 'panama': 11, 'nam': 66 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that are numbers', () => {
      const expected = 576
      const str = '1234'
      const substringsToDigits = { 1: 11, 2: 222, 234: 333 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should work with substringsToDigits with keys that are stringified numbers', () => {
      const expected = 576
      const str = '1234'
      const substringsToDigits = { '12': 11, '2': 222, '234': 333 }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore substringsToDigits assignments that return non-digit characters', () => {
      const expected = 6
      const str = '1a2b3!'
      const substringsToDigits = { 'ab': '!', 'cd': '@', 'man': '#' }
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })
  })

  describe('#should ignore substringsToDigits when it is not an object', () => {
    it('should ignore string', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = 'string'
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore number', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = 666
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore undefined', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = undefined
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore array', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = []
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore null', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = null
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })

    it('should ignore boolean', () => {
      const expected = 6
      const str = '123'
      const substringsToDigits = true
      const result = sumDigits(str, { substringsToDigits: substringsToDigits })
      expect(result).to.equal(expected)
    })
  })
})
