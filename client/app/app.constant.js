(function(angular, undefined) {
'use strict';

angular.module('erpApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','customer','admin']})

;
})(angular);