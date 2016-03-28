'use strict'

/* eslint-env mocha */

const assert = require('assert')

const AWS = require('aws-sdk')
const S3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
  params: {
    Bucket: process.env.AWS_S3_BUCKET
  }
})
require('..').patch(AWS)

describe('AWS SDK then', () => {
  describe('.then()', () => {
    let data

    it('should return a promise', () => {
      return S3.headBucket().then((_data) => {
        data = _data
        assert(data)
      })
    })

    it('should return the same result as the regular SDK', (done) => {
      S3.headBucket((err, data2) => {
        if (err) return done(err)

        for (const key of Object.keys(data2)) {
          assert(key in data)
        }
        done()
      })
    })
  })

  describe('.catch()', () => {
    it('should handle errors', (done) => {
      /* eslint handle-callback-err: 0 */
      S3.headBucket({
        Bucket: 'klajsdfklajsdflkajsdklfj'
      }).catch((err) => done())
    })
  })
})
