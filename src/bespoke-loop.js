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