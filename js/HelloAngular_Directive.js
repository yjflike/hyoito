var myModule=/**
* MyModule Modul;
*
* Description
*/
angular.module('MyModule', []);
myModule.directive('hello', function(){
	// Runs during compile
	return {
		restrict:'AEMC',//匹配模式,一共四个选项 A:属性,E:元素,M:注释,C:class样式 推荐使用元素和属性方式使用指令
		template:'<div><h1>Hi everyone!<div ng-transclude></h1></div></div>',//需要显示的HTML标签  推荐采用templateURl↓
		replace: true,
		transclude:true,//主要用于指令的嵌套

		//templateUrl 推荐采用templateURl 可以编写大量的HTML标签
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