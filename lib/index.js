'use strict'

const Promise = require('any-promise')
const memo = require('memorizer')

exports.patch = (AWS) => {
  const promise = Symbol('promise')

  memo(AWS.Request.prototype, promise, function () {
    return new Promise((resolve, reject) => {
      this.on('complete', (response) => {
        if (response.error) return reject(response.error)
        resolve(response)
      })

      this.send()
    })
  })

  AWS.Request.prototype.then = function (resolve, reject) {
    return this[promise].then(resolve, reject)
  }

  AWS.Request.prototype.catch = function (reject) {
    return this[promise].catch(reject)
  }
}
