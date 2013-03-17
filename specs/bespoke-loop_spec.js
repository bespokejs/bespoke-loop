(function() {
	"use strict";

	describe("bespoke-loop", function() {

		var PARENT_TAG = 'article',
			SLIDE_TAG = 'section',
			NO_OF_SLIDES = 10,
			article,
			slides,
			deck;

		var createDeck = function() {
				slides = [];

				article = document.createElement(PARENT_TAG);
				for (var i = 0; i < NO_OF_SLIDES; i++) {
					slides.push(document.createElement(SLIDE_TAG));
					article.appendChild(slides[i]);
				}

				document.body.appendChild(article);

				deck = bespoke.from(PARENT_TAG, {
					loop: true
				});
			},
			destroyDeck = function() {
				document.body.removeChild(article);
			};

		afterEach(destroyDeck);

		describe("the first slide is active", function() {

			beforeEach(createDeck);

			describe("when the previous slide is requested", function() {

				beforeEach(function() {
					deck.prev();
				});

				it("should activate the last slide", function() {
					expect(deck.slides[deck.slides.length - 1].classList.contains('bespoke-active')).toBe(true);
				});

			});

		});

		describe("the last slide is active", function() {

			beforeEach(function() {
				createDeck();
				deck.slide(deck.slides.length - 1);
			});

			describe("when the next slide is requested", function() {

				beforeEach(function() {
					deck.next();
				});

				it("should activate the first slide", function() {
					expect(deck.slides[0].classList.contains('bespoke-active')).toBe(true);
				});

			});

		});

	});

}());