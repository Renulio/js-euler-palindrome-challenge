'use strict'

const stringSolution = false
const useNodeAddon = true

const reverseNumberInBase = function (number, base) {
  let reversed
  for (reversed = 0; number > 0; number = number / base >>> 0) {
    reversed = reversed * base + number % base
  }

  return reversed
}

const testWithNumber = function (number, base) {
  return number === reverseNumberInBase(number, base)
}

const reverseString = function (string) {
  return string.split('').reverse().join('')
}

const testWithString = function (number, base) {
  const numberAsString = number.toString(base)
  return numberAsString === reverseString(numberAsString)
}

// This function will be called with arguments 2, 10, and 1000000
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  const isNumberPalindrome = stringSolution ? testWithString : testWithNumber
  let sum = 0
  for (let i = 0; i < upperLimit; i++) {
    if (isNumberPalindrome(i, base1) && isNumberPalindrome(i, base2)) {
      sum += i
    }
  }

  return sum
}

module.exports = {
  doubleBasePalindromeSum: useNodeAddon ? require('euler').doubleBasePalindromeSum : doubleBasePalindromeSum
}
