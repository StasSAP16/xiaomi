// шаг 28 по инструкции с сайта подключаем слайдер через функцию пункт "Initialize your slider in your script file or an inline script tag"
$(function(){
    $('.bike-slider').slick({
        // 29 устанавливаем сликдотсы и убираем кнопки нехт и превью
        arrows: false,
        dots: true,
        // 41 делаем переключение картинок без перемотки всех изображений, а сразу на картинку
        fade: true,
        // 42 делаем автозамену картинок в теч 2х секунд
        autoplay: true,
        autoplaySpeed: 2000,
    });
});