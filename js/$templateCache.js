var myModule=/**
* MyModule Module
*
* Description
*/
angular.module('MyModule', []).run(function($templateCache){
	$templateCache.put("hello.html","<div>Hello!!</div>")
});
myModule.directive("hello",function($templateCache){
	// Runs during compile
	return {
		restrict:"AECM",
		template:$templateCache.get("hello.html"),
		replace:true
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),

	};
});