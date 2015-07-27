var myModule =
    /**
     * MyModule Module
     *
     * Description
     */
    angular.module('MyModule', []);
myModule.controller('MyCtrl', ['$scope', function($scope) {
    $scope.ctrlFlavor = "Coca Cola";
}]);
myModule.directive('drink', function() {
    // Runs during compile
    return {
        restrict: "AE",
        scope: {
            flavor: "=flavor"
        },
        template: '<input type="text" ng-Model="flavor"/>',
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
        // link: function($scope, iElm, iAttrs, controller) {

        // }
    };
});
