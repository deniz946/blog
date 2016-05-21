'use strict';

describe('Component: PostComponent', function () {

  // load the controller's module
  beforeEach(module('erpApp'));

  var PostComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostComponent = $componentController('PostComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
