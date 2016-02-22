angular.module('warRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouteProvider){
  console.log("Test 1 app.js")

  $urlRouteProvide.otherwise('/home');

  $stateProvider.state('home', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    url: '/home'
  }).state('detail', {
    templateUrl: 'templates/detail.html',
    controller: 'DetailController',
    url: '/home/:id'
  })
})
