(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'A polyhedron with twelve flat faces.',
		canPurchase: false,
		soldOut: true,
	};

})();
