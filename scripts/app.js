(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

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
			]
		}
	];

})();
