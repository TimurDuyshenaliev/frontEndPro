$(function() {
    let modal = $(".js--modal");
    $(".js--gal_item").on("click", function(event){
        modal.addClass("active");
        let index = $(".js--gal_item").index(this);
        let currentImg = index + 1; 
        $(".js--modal__content").html(`<img src="./img/${currentImg}.jpg" alt=""></img>`);
    });
    $(".js--modal__close").on("click", function(event){
        modal.removeClass("active");
    })
 })