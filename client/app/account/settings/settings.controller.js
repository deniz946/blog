'use strict';

class SettingsController {
  constructor(Auth, $scope, Users, $state) {
    this.errors = {};
    this.submitted = false;
    this.Auth = Auth;
    this.Users = Users;
    this.scope = $scope;
    this.scope.Auth = Auth;
    this.state = $state;

  }

  editBio(bio){
    this.edit = {
      id: this.Auth.getCurrentUser()._id,
      bio: this.bio
    };

    this.Users.editBio(this.edit).success(function (bio) {
      console.log(bio);
      alert("Bio edited!!")
    })
  };


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
