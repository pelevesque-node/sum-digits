'use strict'

const isObject = require('isobject')
const stringOccurrence = require('string-occurrence')

function sumPlainDigits (str) {
  let sum = 0
  for (let i = 0, len = str.length; i < len; i++) {
    const char = str.charAt(i)
    if (/\d/.test(char)) sum += parseInt(char)
  }
  return sum
}

function sumSubstringsToDigits (str, substringsToDigits) {
  let sum = 0
  for (const key in substringsToDigits) {
    if (/\d/.test(substringsToDigits[key])) {
      const numOccurrences = stringOccurrence(str, key.toString())
      sum += numOccurrences * substringsToDigits[key]
    }
  }
  return sum
}

module.exports = (str, substringsToDigits = null, sumPlainDigitsFlag = true) => {
  let sum = 0
  if (sumPlainDigitsFlag) sum += sumPlainDigits(str)
  if (isObject(substringsToDigits)) sum += sumSubstringsToDigits(str, substringsToDigits)
  return sum
}
