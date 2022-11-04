$(function(){
    $.ajax({

        url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
            showInfo(data);
        }
    });
    function showInfo(data){
        $(".icon").html(`<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`);
        $(".city").text(`${data.name}`);
        $(".temp").text(`temp: ${data.main.temp}`);
        $(".desc").text(`${data.weather[0].main}`);
        $(".pressure").text(`pressure: ${data.main.pressure}`);
        $(".humidity").text(`humidity: ${data.main.humidity}`);
        $(".wind").text(`wind speed: ${data.wind.speed}, wind deg: ${data.wind.deg}`);
    }
});
