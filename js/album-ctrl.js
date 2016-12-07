const albums = ($scope) => {
  $scope.albumslist = [
    {
      id: 0,
      name: '2013',
      image: 'img/2013.jpg',
      description: '01. Clocks 05:31<br>02. Music is delay 03:21<br>03. String 03:35<br>04. Parus Major 02:58<br>05. Delay is math 06:33<br>06. Bridge 02:58<br>All tracks made in 2013 by Adrian Kowalczewski. Track 2 (except drums) is made exclusively from guitar string sound. Track 3 (except drums) is made exclusively from Parus major sound. Track 5 is based on "Short dance song with glitch surprise" from "Short dance songs EP". Thank you to everything and everyone what/who is my inspiration.<br><a href="https://ad1r.bandcamp.com/album/2013" target="_blank" class="content__link">> Listen/buy</a>',
    },{
      id: 1,
      name: 'Decay',
      image: 'img/decayfront.jpg',
      description: 'Limited physical release only. Digital on request.<br>01. Granates 07:31<br>02. Tętno I 03:18<br>03. Perypetie 07:36<br>04. Do/Know 06:27<br>05. Sleep 07:37<br>06. Oddychaj 03:52<br>07. Tętno II 03:18<br>It\'s called decay becouse it\'s about it. It\'s dedicated to love and dissolve, farewells and welcomes, without which I wouldn\'t make those tracks.<br>All tracks made in 2009-2012 by Adrian Kowalczewski.<br><A href="decay.html" target="_blank" class="content__link">> Listen to "Sleep"</a><br><a href="https://ad1r.bandcamp.com/album/2013" target="_blank" class="content__link">> Buy limited physical edition</a>'
    },{
      id: 2,
      name: 'Select (parts 1 + 2)',
      image: 'img/select.jpg',
      description: 'Released on testube netlabel [Tube162]<br>Runtime: 37\'25\"<br>01 Static: c<br>02 Static: Select a<br>03 Static: Select b<br>04 Static: Select c<br>05 Static: b<br>06 Move: a<br>07 Move: Short Guitar Song Part 2<br>08 Move: Part 3<br><A href="http://testtube.monocromatica.com/releases/tube162.htm" target="_blank" class="content__link">> Get it now</A><br><br>Reviews:<br>a href="http://testtube.monocromatica.com/releases/tube162.htm" target="_blank" class="content__link">Pedro Leitao [English]</a><br><a href="http://fabrikproject.com.mx/blog/?p=4514" target="_blank" class="content__link">Fabrik [English]</a>'
    },{
      id: 3,
      name: 'Short Dance Songs EP',
      image: 'img/sds.jpg',
      description: 'Released on testube netlabel [Tube130]<br>Runtime: 23\'24\"<br>01 Short Guitar Song<br>02 Out Moon (Of)<br>03 Short Movie Song<br>04 Too Short 8 Bit Love Song<br>05 Short Dance Song With Glitch Surprise<br>06 Rozliczenie<br>07 Short Vocal Song (parts 1 + 2)<br><a href="http://testtube.monocromatica.com/releases/tube130.htm" target="_blank" class="content__link">> Get it now</a><br><br>Reviews:<br><a href="http://testtube.monocromatica.com/releases/tube130.htm" target="_blank" class="content__link">Pedro Leitao [English]</a><br><a href="http://axunarts.wordpress.com/2008/07/09/adr-short-dance-songs/" target="_blank" class="content__link">Axun [Polish]</a><br><a href="http://disquiet.com/2008/07/17/21st-century-mp3-variations-by-adrian-kowalczewski/" target="_blank" class="content__link">Marc Weidenbaum [disquiet.com] [English]</a><br>'
    }
  ]
}

angular
  .module('adyryApp')
  .controller('albumCtrl', ['$scope', albums])
