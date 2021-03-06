var apiWeather = "https://weather-proxy.freecodecamp.rocks/api/current?";
var latitude, longitude;

function getTempo(latitude, longitude) {
  var urlWt = apiWeather + latitude + "&" + longitude;
  $.ajax({
    url: urlWt,
    success: function (data) {
      $(".icons").attr("src", data.weather[0].icon);
      $(".citta").text(data.name);
      $(".paese").text(data.sys.country);
      $(".temperatura").text(data.main.temp.toFixed(1) + "°C");
      $(".tempMM").text("Min. " + data.main.temp_min.toFixed(1) + "°C Max " + data.main.temp_max.toFixed(1) + "°C");
      $("pressione").text("Pressione " + data.main.pressure + " hPa");
      $("umidita").text("Umidità " + data.main.humidity + "%");
    } });

}

$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      var latitude = "lat=" + pos.coords.latitude;
      var longitude = "lon=" + pos.coords.longitude;
      getTempo(latitude, longitude);
    });
  } else {
    alert("Geolocation error");
  }
});