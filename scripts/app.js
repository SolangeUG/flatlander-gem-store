(function() {
	// app defines the business logic of our web store
	var app = angular.module('store', [ 'store-products' ]);

	// a controller defines a set of (specialized) operations
	app.controller('StoreController', function() {
    // products = property of the StoreController
		this.products = gems;
	});

	// a controller for our review functionality
	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// gems defines our web store data
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'A polyhedron with twelve flat faces.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'images/dodecahedron-24.jpg',
					thumb: 'images/dodecahedron-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-32.jpg',
					thumb: 'images/dodecahedron-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-64.jpg',
					thumb: 'images/dodecahedron-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-128.jpg',
					thumb: 'images/dodecahedron-thumb.jpg'
				},
			],
			reviews: [
				{
					stars: 5,
					body: 'I love this product',
					author: 'joe@thomas.com'
				},
				{
					stars: 1,
					body: 'This product sucks',
					author: 'tim@hater.com'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'A polyhedron with five flat faces.',
			canPurchase: false,
			soldOut: false,
			images: [
				{
					full: 'images/pentagon-24.jpg',
					thumb: 'images/pentagon-thumb.jpg'
				},
				{
					full: 'images/pentagon-32.jpg',
					thumb: 'images/pentagon-thumb.jpg'
				},
				{
					full: 'images/pentagon-64.jpg',
					thumb: 'images/pentagon-thumb.jpg'
				},
				{
					full: 'images/pentagon-128.jpg',
					thumb: 'images/pentagons-thumb.jpg'
				},
			],
			reviews: [
				{
					stars: 5,
					body: 'I totally love this!',
					author: 'helen@love.com'
				},
				{
					stars: 4,
					body: 'Not bad at all',
					author: 'john@doe.com'
				}
			]
		}
	];

})();
