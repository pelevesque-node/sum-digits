'use strict'

const stringOccurrence = require('string-occurrence')

function isObject (obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object
}

function sumDigits (str) {
  let sum = 0
  for (let i = 0, len = str.length; i < len; i++) {
    const char = str.charAt(i)
    if (/\d/.test(char)) sum += parseInt(char)
  }
  return sum
}

function sumCharsToDigits (str, charsToDigits) {
  let sum = 0
  for (const key in charsToDigits) {
    if (/\d/.test(charsToDigits[key])) {
      const numOccurrences = stringOccurrence(str, key.toString())
      sum += numOccurrences * charsToDigits[key]
    }
  }
  return sum
}

module.exports = (str, charsToDigits = null, runSumDigits = true) => {
  let sum = 0
  if (runSumDigits) sum += sumDigits(str)
  if (isObject(charsToDigits)) sum += sumCharsToDigits(str, charsToDigits)
  return sum
}
