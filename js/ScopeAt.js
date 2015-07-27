var myModule =
    /**
    * MyModule Modul;

    *
    * Description
    */
    angular.module('MyModule', []);
myModule.controller('MyCtrl', ['$scope', function($scope) {
    $scope.ctrlFlavor = "coca cola";
}]);
myModule.directive('drink', function() {
    // Runs during compile
    return {
        restrict: 'AE',
        template: '<div>{{flavor}}</div>', //这里的flavor来自于$scope上的flavor
        scope: {
            flavor: '@flavor' //@绑定传递的是字符串而不是一个对象
        },
        //可以通过设置独立scope的方式,代替下面link函数
        // link: function($scope, iElm, iAttrs, controller) {
        // 	$scope.flavor_js=iAttrs.flavorhtml;//iAttrs上的flavorhtml跟html页面上的属性互相联系.
        // }
    };
});
