var myModule =
    /**
    * MyModule Modul;
    myModule.
    *
    * Description
    */
    angular.module('MyModule', []);
myModule.controller('MyCtrl', ['$scope', function($scope) {
    $scope.sayHello = function(name) {
        alert("Hello " + name);
    }
}]);
myModule.directive('greeting', function() {
    // Runs during compile
    return {
        restrict: 'AE',
        scope: {
            greet: '&'
        },
        template: '<input type="text" ng-model="userName" /><br/>'+ 
            '<button class="btn btn-default" ng-click="greet({name:userName})">Greet</button><br />',
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
