'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('Double base palindromes', function () {
  describe('Bases 2 and 10 for numbers less than 10', function () {
    it('returns 25', function () {
      expect(challenge.doubleBasePalindromeSum(2, 10, 10)).to.equal(25)
    })
  })

  const oneMillion = 1000000

  describe('Bases 2 and 10 for numbers less than 1,000,000', function () {
    it('returns 872187', function () {
      this.timeout(3000)
      expect(challenge.doubleBasePalindromeSum(2, 10, oneMillion))
        .to.equal(872187)
    })
  })
})
