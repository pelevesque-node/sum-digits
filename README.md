[![Build Status](https://travis-ci.org/pelevesque/sum-digits.svg?branch=master)](https://travis-ci.org/pelevesque/sum-digits)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/sum-digits/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/sum-digits?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# sum-digits

Sums the digits in a string with a powerful substrings->digits feature.

## Node Repository

https://www.npmjs.com/package/@pelevesque/sum-digits

## Installation

`npm install @pelevesque/sum-digits`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

### Parameters

```js
str     (required)
options (optional) default = { substringsToDigits = null, sumPlainDigits = true }
```

### Examples

```js
const sumDigits = require('@pelevesque/sum-digits')
```

```js
// normal summing
sumDigits('1234') // 10
```

```js
// ignores non numeric characters
sumDigits('1a2!3_4.') // 10
```

```js
// you can provide a hash table of substrings to digits
const substringsToDigits = { a: 1, b: 2, c: 3 }
sumDigits('1a2b3ca', { substringsToDigits: substringsToDigits }) // 13
```

```js
// substrings can be of any length
const substringsToDigits = { '1p': 1000, panama: 100, nam: 10, 2: 1 }
sumDigits('1panama2', { substringsToDigits: substringsToDigits }) // 1114
```

```js
// you can bypass plain digit summing and only use substringsToDigits summing
const substringsToDigits = { '1p': 1000, panama: 100, nam: 10, 2: 1 }
sumDigits('1panama2', { substringsToDigits: substringsToDigits, sumPlainDigits: false}) // 1111
```
