'use strict';

describe('Controller: WhoCtrl', function () {

  // load the controller's module
  beforeEach(module('projectIeuApp'));

  var WhoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhoCtrl = $controller('WhoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
