(function() {
    'use strict';

    angular.module('App').controller('someController', function(
        BaseController,UserModel,$rootScope, $scope) {
        var controller = {

            testModel: {
                name:'Look, I\'m an angular variable inside Polymer'
            }
        };
        return controller;
    });

}());
