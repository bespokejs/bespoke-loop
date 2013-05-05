/*!
 * bespoke-loop v0.1.1
 *
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

(function(bespoke) {

	bespoke.plugins.loop = function(deck) {
		deck.on('prev', function(e) {
			if (e.index === 0) {
				deck.slide(deck.slides.length - 1);
			}
		});

		deck.on('next', function(e) {
			if (e.index === deck.slides.length - 1) {
				deck.slide(0);
			}
		});
	};

}(bespoke));