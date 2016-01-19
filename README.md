
# aws-sdk-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Monkey patches the AWS SDK so that it returns promises.
Similar to [aws-sdk-promise](https://github.com/lightsofapollo/aws-sdk-promise) with some philosophical differences:

- Uses [native-or-bluebird](https://github.com/normalize/native-or-bluebird).
- Does not return the SDK, so AWS SDK will not be a peer dependency.
- Only supports node v4+
- You don't have to do `.promise()` to return the promise
- Tests

Do not use this in modules, only your apps!

## Usage:

```js
const AWS = require('aws-sdk')

// patch the AWS instance
require('aws-sdk-then').patch(AWS)

// create a new S3 instance
const S3 = new AWS.S3()

// use it
S3.getObject({
  Bucket: 'whatever',
  Key: 'whatever'
}).then(result => {

})
```

[npm-image]: https://img.shields.io/npm/v/aws-sdk-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/aws-sdk-then
[travis-image]: https://img.shields.io/travis/jonathanong/aws-sdk-then/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/aws-sdk-then
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/aws-sdk-then/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/aws-sdk-then
[david-image]: http://img.shields.io/david/jonathanong/aws-sdk-then.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/aws-sdk-then
[license-image]: http://img.shields.io/npm/l/aws-sdk-then.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/aws-sdk-then.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/aws-sdk-then
