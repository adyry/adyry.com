const album = () => {
  return {
    restrict: 'E',
    templateUrl: './js/templates/album.html',
    controller: 'albumCtrl',
    scope: {
      num: '='
    }
  }
}

angular
  .module('adyryApp')
  .directive('album', album)
