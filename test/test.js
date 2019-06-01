/* global describe, it */
'use strict'

const expect = require('chai').expect
const sumDigits = require('../index')

describe('#sumDigits()', () => {
  describe('#should work with the runSumDigits flag set to false', () => {
    it('should not count digits when the runSumDigits flag is false', () => {
      const expected = 0
      const str = '12345'
      const runSumDigits = false
      const result = sumDigits(str, undefined, runSumDigits)
      expect(result).to.equal(expected)
    })

    it('should still run charsToDigits assignments if the runSumDigits flag is false', () => {
      const expected = 8
      const str = '12345'
      const charsToDigits = { '12': 1, '34': 2, '345': 5 }
      const runSumDigits = false
      const result = sumDigits(str, charsToDigits, runSumDigits)
      expect(result).to.equal(expected)
    })
  })

  describe('#should work without charsToDigits assignments', () => {
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

  describe('#should work with charsToDigits with single character keys', () => {
    it('should work with charsToDigits with assignments that are numbers', () => {
      const expected = 666
      const str = '1a2b3!'
      const charsToDigits = { 'a': 5, 'b': 55, '!': 600 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with assignments that are stringified numbers', () => {
      const expected = 666
      const str = '1a2b3!'
      const charsToDigits = { 'a': '5', 'b': '55', '!': '600' }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that are numbers', () => {
      const expected = 576
      const str = '1234'
      const charsToDigits = { 1: 11, 2: 222, 3: 333 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that are stringified numbers', () => {
      const expected = 576
      const str = '1234'
      const charsToDigits = { '1': 11, '2': 222, '3': 333 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore charsToDigits assignments that return non-digit characters', () => {
      const expected = 6
      const str = '1a2b3!'
      const charsToDigits = { 'a': '!', '$': '@', '#': '#' }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })
  })

  describe('#should work with charsToDigits with multiple character keys', () => {
    it('should work with charsToDigits with assignments that are numbers', () => {
      const expected = 666
      const str = '1ab2cd3man'
      const charsToDigits = { '1a': 1, 'ab': 5, 'cd': 54, 'man': 600 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with assignments that are stringified numbers', () => {
      const expected = 666
      const str = '1ab2cd3man'
      const charsToDigits = { '1a': '1', 'ab': '5', 'cd': '54', 'man': '600' }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that overlap', () => {
      const expected = 20
      const str = '1ab2abd3bd'
      const charsToDigits = { 'ab': 1, 'b': 2, 'bd': 3 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that are nested', () => {
      const expected = 87
      const str = '12panama34'
      const charsToDigits = { 'panama': 11, 'nam': 66 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that are numbers', () => {
      const expected = 576
      const str = '1234'
      const charsToDigits = { 1: 11, 2: 222, 234: 333 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should work with charsToDigits with keys that are stringified numbers', () => {
      const expected = 576
      const str = '1234'
      const charsToDigits = { '12': 11, '2': 222, '234': 333 }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore charsToDigits assignments that return non-digit characters', () => {
      const expected = 6
      const str = '1a2b3!'
      const charsToDigits = { 'ab': '!', 'cd': '@', 'man': '#' }
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })
  })

  describe('#should ignore charsToDigits when it is not an object', () => {
    it('should ignore string', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = 'string'
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore number', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = 666
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore undefined', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = undefined
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore array', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = []
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore null', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = null
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })

    it('should ignore boolean', () => {
      const expected = 6
      const str = '123'
      const charsToDigits = true
      const result = sumDigits(str, charsToDigits)
      expect(result).to.equal(expected)
    })
  })
})
