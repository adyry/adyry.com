const menu = () => {
  return {
    restrict: 'E',
    templateUrl: './js/templates/menu.html'
  }
}

angular
  .module('adyryApp')
  .directive('menuBar', menu)
