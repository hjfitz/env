# env
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9ac740aa7d4495daba35205728f9fc9)](https://www.codacy.com/app/hjfitz/local-env-var?utm_source=github.com&utm_medium=referral&utm_content=hjfitz/local-env-var&utm_campaign=badger)
[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/alpaca.svg)](http://lunagao.github.io/BlessYourCodeTag/) [![npm](https://img.shields.io/npm/v/local-env-var.svg)](https://www.npmjs.com/package/local-env-var)


This program strives to be a minimal way of loading variables from a configuration file, and attaches them to `process.env`, like `heroku local` or `dotenv` do.

By default, it looks for a file named `.env` in the root dir of your program. It's expected that your `.env` file looks like the following:
```dosini
CONTENTFUL_KEY=somesecretkey
CONTENTFUL_SPACE=somespaceurl
SECRET_API_KEY_THAT_WONT_GET_POSTED_TO_GIT=whoops
```

Build with <3 in TypeScript. Can be used with **ES5** and above!

# Install
```bash
yarn add local-env-var 
```

# Usage

## Require, and call. 
```js
require('local-env-var')();
// or
require('local-env-var')('/path/to/someother/file');
```

## Alternately
```typescript
import * as env from 'local-env-vars';
env();
//or
env('/path/to/someother/file');
```

# Building
`yarn build`

# Testing
`yarn test`

# Bugs
Expected.
