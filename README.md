[![Build Status](https://travis-ci.org/pelevesque/sum-digits.svg?branch=master)](https://travis-ci.org/pelevesque/sum-digits)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/sum-digits/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/sum-digits?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# sum-digits

Sums the digits in a string with a powerful chars->digits feature.

## Node Repository

https://www.npmjs.com/package/@pelevesque/sum-digits

## Installation

`npm install @pelevesque/sum-digits`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const  sumDigits = require('@pelevesque/sum-digits')
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
// you can provide a hash table of chars to digits
const charsToDigits = { 'a' : 1, 'b' : 2, 'c': 3 }
sumDigits('1a2b3ca', charsToDigits) // 13
```

```js
// the hash table can contain alphanumerical keys of any length
const charsToDigits = { '1p' : 1000, 'panama' : 100, 'nam': 10, 2: 1 }
sumDigits('1panama2', charsToDigits) // 1114
```

```js
// you can bypass normal digit summing and only use charsToDigits
const charsToDigits = { '1p' : 1000, 'panama' : 100, 'nam': 10, 2: 1 }
const doNormalSumming = false
sumDigits('1panama2', charsToDigits, doNormalSumming) // 1111
```
