(function() {
	// app defines the business logic of our web store
	var app = angular.module('gemStore', ['store-directives']);

	// a controller defines a set of (specialized) operations
	app.controller('StoreController', ['$http', function($http) {
  	// using service injection
		var store = this;
		// initialize our products array to an empty array
		store.products = [];
		// products getting loaded remotely from an API
		$http.get('../data/products.json')
			.then(function(response) {
				// here, we can't use this.products directly,
				// because 'this' refers to the the http service here.
				store.products = response.data;
			});
	}]);

	// a controller for our review functionality
	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();
