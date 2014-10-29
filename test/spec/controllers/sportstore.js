'use strict';

describe('Controller: SportstoreCtrl', function () {

  // load the controller's module
  beforeEach(module('demoAppAppApp'));

  var SportstoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportstoreCtrl = $controller('SportstoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
