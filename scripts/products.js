(function() {
	var app = angular.module('store-products', [ ]);
	
	// custom directive: the camelCase notation will translate into a HTML dash
	app.directive('productTitle', function() {
		return {
			// E is for element, and is the type of the directive
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

  // custom directive with a controller
	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function () {
				this.tab = 1;
				// select tab
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
		    // check if this tab is selected
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panels'
		};
	});

})();
