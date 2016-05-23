//jshint esversion: 6

(() => {

  localisation();

  setInterval(localisation, 5000);

})();

function localisation() {
  console.log("getting localisation");
  navigator.geolocation.getCurrentPosition(pos => {
    var coords = pos.coords;
    console.log(coords);
    lat.innerText = coords.latitude;
    lng.innerText = coords.longitude;
    acc.innerText = coords.accuracy + " mètres";
  });
}
