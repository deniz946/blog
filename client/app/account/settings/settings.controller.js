'use strict';

class SettingsController {
  constructor(Auth, $scope) {
    this.errors = {};
    this.submitted = false;
    this.Auth = Auth;
    $scope.Auth = Auth
    console.log(this.Auth.getCurrentUser().name)
  }


  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('erpApp')
  .controller('SettingsController', SettingsController);
