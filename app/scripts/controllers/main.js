'use strict';

/**
 * @ngdoc function
 * @name xrr2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xrr2App
 */
angular.module('ssss', [])
.filter('u',function(){
				return function(input){
					if(input.length>=10){
						return input.substr(0,10)+"......"
					}else{
						return input;
					}
				}
			})
.controller("app",['$scope','$http',function ($scope,$http) {}]).directive('auto',function($http){
		  return {
		  restrict:'EACM',
		  template:'<div><div class="news"></div><div class="list"><ul><li ng-repeat="x in zi">{{x.title | u}}</li></ul><ul><li ng-repeat="x in zi">{{x.title | u }}</li></ul></div><div class="photo" ng-repeat="xx in img"><img ng-src="{{xx.img}}"</div></div>',
		   link:function(scope){
			  $http({
  					url:'http://www.somenote.cn:1510/test',
  					method:'get',
  				}).success(function(e){
  					scope.zi=e
  				})
  				$http({
  					url:'http://www.somenote.cn:1510/aut',
  					method:'get',
  				}).success(function(e){
  					scope.img=e
  				})
  				$http({
  					url:'http://www.somenote.cn:1510/test2',
  					method:'get',
  				}).success(function(e){
  					scope.ii=e
  				})
			   }
			}
		})