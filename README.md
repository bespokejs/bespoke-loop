[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-loop.png)](http://travis-ci.org/markdalgleish/bespoke-loop)

# bespoke-loop

### Looping Presentations for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Turn your Bespoke.js presentation into an infinite loop.

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-loop.min.js
[max]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-loop.js

## Usage

First, include both `bespoke.js` and `bespoke-loop.js` in your page.

Then, simply include the plugin when using the `from(selector[, plugins])` method.

```js
bespoke.horizontal.from(selector, {
  loop: true
});
```

## Questions?

Contact me on GitHub or Twitter: [@markdalgleish](http://twitter.com/markdalgleish)

## License

Copyright 2013, Mark Dalgleish  
This content is released under the MIT license  
http://markdalgleish.mit-license.org