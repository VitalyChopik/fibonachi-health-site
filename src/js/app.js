/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper, { Autoplay } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

const sliderPartners = document.querySelector('.partners__container');
const heroSlider = document.querySelector('.hero__content');
let logosSlider = null;
let heroSliderInstance = null;

function initSliders() {
	if (window.innerWidth < 992) {
		if (!logosSlider) {
			logosSlider = new Swiper(sliderPartners, {
				modules: [Autoplay],
				loop: true,
				speed: 10000,
				slidesPerView: 'auto',
				// отступ
				spaceBetween: 30,
				autoplay: {
					delay: 0,
					reverseDirection: false,
					disableOnInteraction: false,
				},
			});
		}
		if (window.innerWidth < 700) {
			if (!heroSliderInstance) {
				heroSliderInstance = new Swiper(heroSlider, {
					loop: true,
					speed: 1500,
					slidesPerView: 'auto',
					centeredSlides: true,
					effect: 'fade',
					spaceBetween: 8,
				});
				heroSliderInstance.slideTo(1, 0);
			}
		}

	} else {
		if (logosSlider) {
			logosSlider.destroy();
			logosSlider = null;
		}
		if (heroSliderInstance) {
			heroSliderInstance.destroy();
			heroSliderInstance = null;
		}
	}
}

function initializeSliders() {
	initSliders();
}

// Инициализация слайдеров при загрузке страницы
window.addEventListener('load', initializeSliders);

// Следим за изменениями размера экрана и инициализируем/уничтожаем слайдеры
window.addEventListener('resize', initSliders);


