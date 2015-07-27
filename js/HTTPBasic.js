var myModule =
    /** 
     * myModule Module
     *
     * Description
     */
    angular.module('MyModule', []);

myModule.controller('LoadDataCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'data.json'
    }).success(function(data, status, headers, config) {
        console.log("success....");
        console.log(data);
        $scope.users = data;
        alert("success");
    }).error(function(data, status, headers, config) {
        console.log("error.....");
        alert("error");
    }); 
}]);
