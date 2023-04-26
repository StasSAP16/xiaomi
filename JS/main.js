// шаг 28 по инструкции с сайта подключаем слайдер через функцию пункт "Initialize your slider in your script file or an inline script tag"
$(function(){
    $('.bike-slider, .slider__items').slick({
        // 29 устанавливаем сликдотсы и убираем кнопки нехт и превью
        arrows: false,
        dots: true,
        // 41 делаем переключение картинок без перемотки всех изображений, а сразу на картинку
        fade: true,
        // 42 делаем автозамену картинок в теч 2х секунд
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // $("#menu").on("click","a", function (event) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	event.preventDefault();
	// 	//забираем идентификатор бока с атрибута href
	// 	var id  = $(this).attr('href'),
	// 	//узнаем высоту от начала страницы до блока на который ссылается якорь
	// 		top = $(id).offset().top;		
	// 	//анимируем переход на расстояние - top за 1500 мс
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });
    $(".menu, .bike__column").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});