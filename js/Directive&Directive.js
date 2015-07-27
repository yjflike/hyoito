var myModule =
    /**
     *  Module
     *
     * Description
     */
    angular.module('MyModule', []);
myModule.directive('superman',function() {
    // Runs during compile
    return {
        scope: {},
        restrict: 'AE',//指定为属性和元素
        controller: function($scope) { //与angular中的控制器不同,是给别的指令(依赖于当前指令的指令)暴露出一组public方法给外部调用
            $scope.abilities = [];//建立数组,存放superman的能力

            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("l`ight");
            };
        },

        link: function($scope, iElm, iAttrs, controller) {
            iElm.addClass('btn btn-primary col-md-10');//加载一个按钮(基于bootstrap) 
            //这里的col-md-10是相对外层div中所占用的布局比例
            iElm.bind("mouseenter", function() { //绑定一个mouseenter事件
                console.log($scope.abilities);
            });
        }
    };
});
myModule.directive('strength',function() {
    // Runs during compile
    return {
        require: '^superman',//表示该指令依赖于superman指令.
        link: function($scope, iElm, iAttrs, supermanCtrl) {
        	//自动把supermanCtrl(controller中的方法)注入到link函数中来,使我们能够调用到superman指令中的方法
            supermanCtrl.addStrength();
        }
    };
});
myModule.directive('speed', function() {
    // Runs during compile
    return {
        require: '^superman',
        link: function($scope, iElm, iAttrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    };
});
myModule.directive('light', function() {
    // Runs during compile
    return {
        require: '^superman',
        link: function($scope, iElm, iAttrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    };
});
