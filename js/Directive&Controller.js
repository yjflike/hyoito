var myModule =
    /**
     * MyModule Module
     *
     * Description
     */
    angular.module('MyModule', []).controller('MyCtrl', ['$scope', function($scope) {
        $scope.loadData = function() {
            console.log("Data is Loading");
        }
    }]);

    myModule.controller('MyCtrl2', ['$scope', function($scope) {
        $scope.loadData2 = function() {
            console.log("Data is Loading....2222");
        }
    }]);

myModule.directive('loader', function() {
    // Runs during compile
    return {
        restrict: "AE",
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

        // link: function(scope, element, attr) {
        // 	element.bind("mouseenter",function(){
        // 		scope.loadData();
        // 	});
        // }
        link: function($scope, iElm, iAttrs, controller) {
        	iElm.bind("mouseenter",function(){//绑定鼠标滑入事件时执行的方法
        		//$scope.loadData();//除了直接用scope调用之外,还可以用apply()
        		//$scope.$apply("loadData()")
        		//iAttrs.howtoload()//在页面调用是的大写,但是在js中要用小写

        		//通过iAttrs.howtoload实现了指令的复用
        		$scope.$apply(iAttrs.howtoload);//这里不要写函数调用的形式,而是用属性调用的形式,howtoload是属性!
        	});
        }

    };
});
