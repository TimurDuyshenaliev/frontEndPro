"use strict";

$(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    type: "GET",
    dataType: "jsonp",
    success: function success(e) {
      e = e, $(".icon").html("<img src=\"https://openweathermap.org/img/w/".concat(e.weather[0].icon, ".png\">")), $(".city").text("" + e.name), $(".temp").text("temp: " + e.main.temp), $(".desc").text("" + e.weather[0].main), $(".pressure").text("pressure: " + e.main.pressure), $(".humidity").text("humidity: " + e.main.humidity), $(".wind").text("wind speed: ".concat(e.wind.speed, ", wind deg: ") + e.wind.deg);
    }
  });
});