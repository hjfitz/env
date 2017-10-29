# env
[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/alpaca.svg)](http://lunagao.github.io/BlessYourCodeTag/)


Loads variables from a .env file, and attaches them to `process.env`, like `heroku local` or `dotenv` do.

It's expected that your `.env` file looks like the following:
```dosini
CONTENTFUL_KEY=somesecretkey
CONTENTFUL_SPACE=somespaceurl
SECRET_API_KEY_THAT_WONT_GET_POSTED_TO_GIT=whoops
```

Build with <3 in TypeScript. Can be used with **ES5** and above!

# Install
```bash
yarn add whateverthisispublishedas
```

# Usage

* Require, and call. 
```js
require('env')();
```

* Need a file other than `.env`?
```js
require('env')('/path/to/someother/file');
```

# Building
`yarn build`

# Testing
`yarn test`

# Bugs
Expected.
