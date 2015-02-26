describe("AppCtrl", function () {

    var scope, controller;
    beforeEach(module('fooforms'));

    beforeEach(inject(function (
        $rootScope, $controller) {

        scope = $rootScope.$new();

        controller = $controller('AppCtrl', {
            $scope: scope
        });
    }));

    it("has a scope variable defined", function () {
        expect(scope).toBeDefined();
    });

});