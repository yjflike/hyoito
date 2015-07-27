var myServiceApp =
    /**
     * MyServiceApp Modul;
     *
     * Description
     */
    angular.module('MyserviceApp', []);
myServiceApp.factory('userListService', ['$http',
    function($http) {
        alert("in factory");
        console.log("in factory");
        var doRequest = function(username, path) {
           console.log("in doRequest");
            return $http({
                method: 'GET',
                url   : 'users.json'
            });
        }
        return {
            userList: function(username) {
             console.log("userList");
                return doRequest(username, 'userList');
            }
        };
    }
]);

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService', function($scope, $timeout, userListService) {
    var timeout;
    alert("in controller");
    $scope.$watch('username', function(newUserName) { //监听username的变化
        if (newUserName) {
            console.log("newUserName");
            if (timeout) {
                console.log("timeout");
                $timeout.cancel(timeout);
            }
            timeout = $timeout(function() {
                console.log("timeout2");
                userListService.userList(newUserName)
                    .success(function(data, status) {
                        $scope.users = data;
                        console.log("success");
                    });
            }, 300);
        }
    });
}]);
