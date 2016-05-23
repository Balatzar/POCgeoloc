//jshint esversion: 6

(function() {

  navigator.geolocation.watchPosition(updateDOM);

})();

function updateDOM(pos) {
  var coords = pos.coords;
  console.log(coords);
  lat.innerText = coords.latitude;
  lng.innerText = coords.longitude;
  acc.innerText = coords.accuracy;
}
