"use strict";

$(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    type: "GET",
    dataType: "jsonp",
    success: function success(data) {
      showInfo(data);
    }
  });
  function showInfo(data) {
    $(".icon").html("<img src=\"https://openweathermap.org/img/w/".concat(data.weather[0].icon, ".png\">"));
    $(".city").text("".concat(data.name));
    $(".temp").text("temp: ".concat(data.main.temp));
    $(".desc").text("".concat(data.weather[0].main));
    $(".pressure").text("pressure: ".concat(data.main.pressure));
    $(".humidity").text("humidity: ".concat(data.main.humidity));
    $(".wind").text("wind speed: ".concat(data.wind.speed, ", wind deg: ").concat(data.wind.deg));
  }
});