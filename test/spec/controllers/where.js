'use strict';

describe('Controller: WhereCtrl', function () {

  // load the controller's module
  beforeEach(module('projectIeuApp'));

  var WhereCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhereCtrl = $controller('WhereCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
