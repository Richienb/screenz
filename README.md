# Screenz [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/screenz/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/screenz)

Get the current screen size.

[![NPM Badge](https://nodei.co/npm/screenz.png)](https://npmjs.com/package/screenz)

## Install

```sh
npm install screenz
```

## Usage

```js
const { width, height } = require("screenz");

console.log(width);
//=> 1920

console.log(height);
//=> 1080
```

## API

### screenz.width

Type: `number`

The screen width.

### screenz.height

Type: `number`

The screen height.
