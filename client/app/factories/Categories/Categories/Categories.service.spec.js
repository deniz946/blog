'use strict';

describe('Service: Categories', function () {

  // load the service's module
  beforeEach(module('erpApp'));

  // instantiate service
  var Categories;
  beforeEach(inject(function (_Categories_) {
    Categories = _Categories_;
  }));

  it('should do something', function () {
    expect(!!Categories).toBe(true);
  });

});
