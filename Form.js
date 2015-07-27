var userInfoModule=angular.module('UserInfoModule', [])
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
	$scope.userInfo={
		email:"248777113@qq.com",
		password:"123456",
		autoLogin:true
	};
	$scope.getFormData=function(){
		console.log($scope.userInfo)
	};
	$scope.setFormData=function(){
		$scope.userInfo={
		email:"123456@qq.com",
		password:"248777113",
		autoLogin:false
		}
	};
	$scope.resetFormData=function(){
	$scope.userInfo={
		email:"248777113@qq.com",
		password:"123456",
		autoLogin:true
		}
	};
}])