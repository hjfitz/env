# Environment Variable Loader
> Loading .env in to process.env

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9ac740aa7d4495daba35205728f9fc9)](https://www.codacy.com/app/hjfitz/local-env-var?utm_source=github.com&utm_medium=referral&utm_content=hjfitz/local-env-var&utm_campaign=badger)
[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/alpaca.svg)](http://lunagao.github.io/BlessYourCodeTag/) [![npm](https://img.shields.io/npm/v/local-env-var.svg)](https://www.npmjs.com/package/local-env-var)

## Intro
This program strives to be a _minimal_ way of loading variables from a configuration file (`.env`), and attaches them to `process.env`.

This works similarly to running your program with `heroku local` running `dotenv.parse()`.

## Prerequisites
All you need for this is a file named `.env`. Its contents should look like this:

```ini
CONTENTFUL_KEY=somesecretkey
CONTENTFUL_SPACE=somespaceurl
SECRET_API_KEY_THAT_WONT_GET_POSTED_TO_GIT=whoops
```

## Usage
Simply load the library!

```js
// ES6 imports
import 'local-env-var';
// Node module require
require('local-env-var');
```


