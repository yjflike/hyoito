var myModule=/**
*  Module
*
* Description
*/
angular.module('MyModule', []);
myModule.directive('hello', function(){
	// Runs during compile
	return {
		scope:{},
		restrict:'AE',
		template:'<div><input type="text" ng-model="userName" />{{userName}}</div>',
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
	}
});