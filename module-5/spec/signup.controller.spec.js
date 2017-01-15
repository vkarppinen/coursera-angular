describe("SignUpController tests", function () {

  beforeEach(module('restaurant'));

  var $controller;
  var SignUpController;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    $controller.user = {};

    var RestaurantServiceMock = {};
    RestaurantServiceMock.getMenuItem = function (dish) {
      return true;
    };

    SignUpController =
      $controller('SignUpController',
                  {RestaurantService: RestaurantServiceMock });

  }));

  it("it should check the value of dishNotFound flag", function() {
    SignUpController.submit("asd");
    expect(SignUpController.dishNotFound).toBe(true);
  });

});
