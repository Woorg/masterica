$(function() {
	/*________ Slider________________________________________________________________________*/

	var $slider = $('.slider__ul');

	$slider.bxSlider({
		mode: 'fade',
		speed: 200,
		useCSS: true,
		preloadImages: 'visible',
		pagerCustom: $('.slider__pag'),
		nextText: 'Вперед',
		prevText: 'Назад'
	});


	/*________ Carousel _____________________________________________________________________*/

	var $carousel = $('.carousel__ul');

	$carousel.bxSlider({
		mode: 'horizontal',
		speed: 100,
		useCSS: true,
		minSlides: 1,
		maxSlides: 6,
		moveSlides: 1,
		slideWidth: 177,
		slideMargin: 26,
		pager: false,
		nextText: 'Вперед',
		prevText: 'Назад'
	});


});



/*________ Map _________________________________________________________________________*/

//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

		// в этой версии координаты просто элементы массива (и они поменяны местами)
	var	destinations = {
			'Москва': [55.753559, 37.609218],
			'Санкт-Петербург': [59.938531, 30.313497],
			'Екатеринбург': [56.829748, 60.617435],
			'Одесса': [46.466444, 30.7058]
		},

		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center: destinations['Москва'], // Москва
			zoom: 15
		});

	// все ок

	// куда скакать
	function clickGoto() {

		// город
		var pos = this.getAttribute('data-goto'); // или this.getAttribute('title')

		// переходим по координатам
		myMap.panTo(destinations[pos], {
			flying: 3
		});

		return false;
	}

	// навешиваем обработчики
	var col = document.getElementsByClassName('map__i');
	for (var i = 0, n = col.length; i < n; ++i) {
		col[i].onclick = clickGoto;
	}
}




