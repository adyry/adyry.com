angular
  .module('adyryApp', ['ngRoute', 'ngSanitize']);

const routing = ($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/develop", {
    templateUrl: "./js/templates/sites.html"
  })
  .when("/music", {
    templateUrl: "./js/templates/music.html"
  })
  .when("/photos", {
    templateUrl: "./js/templates/photos.html"
  })
  .when("/other", {
    templateUrl: "./js/templates/other.html"
  })
  .otherwise({
    templateUrl: "./js/templates/sites.html"
  })

};


angular
  .module('adyryApp')
  .config(routing)
