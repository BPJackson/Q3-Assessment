angular.module('realEstate')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'RealEstateService'];

function HomeController($scope, RealEstateService) {
  console.log("Hello from Home Controller")
  $scope.homes = RealEstateService.getHomes();//.then(function(homes){
  //   $scope.homes = homes;
  // });
}
