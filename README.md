[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-loop.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-loop) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-loop/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-loop)

# bespoke-loop

Looping Presentations for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-loop/master/dist/bespoke-loop.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-loop/master/dist/bespoke-loop.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  loop = require('bespoke-loop');

bespoke.from('article', [
  loop()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.loop()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-loop
```

### Bower

```bash
$ bower install bespoke-loop
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
