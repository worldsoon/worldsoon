/**
 * Created by XIANYH on 2015-10-21.
 */
/* global angular, console */
require.config({
    baseUrl: '', // 模块文件的根目录设置为项目根路径。baseUrl指的模块文件的根目录，可以是绝对路径或相对路径。相对路径指引入require.js的页面为参考点
    paths: {
        jquery: 'lib/jquery/jquery-2.1.4',
        angular: 'lib/angular-1.3.9/angular',
        angularRoute: 'lib/angular-1.3.9/angular-route'
    },
    shim: {
        angularRoute: ['angular']
    }
});

require(['angular', 'angularRoute', 'jquery'], function () {
    'use strict';

    var app = angular.module('myApp', ['ngRoute'], function(){
    })
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/test',
                {
                    template: 'test'
                }
            );
        }])
        .provider('ezHello', function(){
            //$get方法是一个类工厂，返回服务的实例
            this.$get = function(){
                return 'hello,world!';
            };
        });
    angular.element(document).ready(function() {
        angular.injector(['ng', 'myApp']).invoke(["ezHello",function(hhh){
            //将ezHello实例对象转成字符串显示出来
            var e = document.querySelector("#logger");
            angular.element(e).text(hhh);
        }]);
        angular.bootstrap(document, ['myApp']);
    });
});
