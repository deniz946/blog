'use strict';

describe('Component: IndexComponent', function () {

  // load the controller's module
  beforeEach(module('erpApp'));

  var IndexComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    IndexComponent = $componentController('IndexComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
