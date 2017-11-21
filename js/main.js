'use strict';

var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

//
// CLASS - Slider
// =================================================================
var Slider = function() {
	function Slider(selector, options) {
		_classCallCheck(this, Slider);

		this.options = options;
		this.slider = selector.bxSlider(this.options());

		this.watch();
	}

	_createClass(Slider, [{
		key: 'getSettings',
		value: function getSettings() {
			return this.options();
		}
	}, {
		key: 'reloadSettings',
		value: function reloadSettings() {
			this.slider.reloadSlider($.extend(this.getSettings(), {
				startSlide: this.slider.getCurrentSlide()
			}));
		}
	}, {
		key: 'watch',
		value: function watch() {
			var slider = this;

			$(window).on('resize load', function() {
				setTimeout(slider.reloadSettings(), 500);
			});
		}
	}]);

	return Slider;
}();

function createSlider(selector, options) {
	return new Slider(selector, options);
}

/* Get Device Width */
function getWidth() {
	if (self.innerWidth) {
		return self.innerWidth;
	}

	if (document.documentElement && document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}

	if (document.body) {
		return document.body.clientWidth;
	}
}

function dropdown(triger, menu) {
	$(triger).hover(function(event) {
		$(event.currentTarget).find(menu).stop(true, true).fadeIn(300);
	}, function(event) {
		$(event.currentTarget).find(menu).stop(true, true).fadeOut(150);
	});
}

//
// CLASS - Mobile Menu
// =================================================================

var Menu = function() {
	function Menu() {
		var _this = this;

		_classCallCheck(this, Menu);

		this.closeMobileMenuOnOutOfClick();
		$('.js-nav-toggle').on('click', function() {
			_this.toggleMenuVisibility();
			_this.toggleMenuTriggerClass();
			_this.toggleBodyBackground();
		});
	}
	/* eslint class-methods-use-this: ["error", {
 	"exceptMethods": [
 		"toggleMenuVisibility",
 		"toggleBodyBackground",
 		"toggleMenuTriggerClass",
 		"closeMobileMenuOnOutOfClick",
 	] }]
 */

	_createClass(Menu, [{
		key: 'toggleMenuVisibility',
		value: function toggleMenuVisibility() {
			$('.mobile-nav').toggleClass('is--visible');
		}
	}, {
		key: 'toggleBodyBackground',
		value: function toggleBodyBackground() {
			$('body').toggleClass('is--mobile-active');
		}
	}, {
		key: 'toggleMenuTriggerClass',
		value: function toggleMenuTriggerClass() {
			$('.js-nav-toggle').toggleClass('is--active');
		}
	}, {
		key: 'closeMobileMenuOnOutOfClick',
		value: function closeMobileMenuOnOutOfClick() {
			var _this2 = this;

			$('body').mouseup(function(e) {
				var subject = $('.is--visible');

				if (subject.length && !$(e.target).hasClass('js-nav-toggle') && !$(e.target).hasClass('icon-nav') && e.target.className !== subject.attr('class') && !subject.has(e.target).length) {
					_this2.toggleMenuVisibility();
					_this2.toggleBodyBackground();
					_this2.toggleMenuTriggerClass();
				}
			});
		}
	}]);

	return Menu;
}();

function initMenu() {
	return new Menu();
}
initMenu();

//
// Modal Popup
// =================================================================
$.arcticmodal('setDefault', {
	afterClose: function afterClose() {
		$('body').css({
			'overflow': 'auto',
			'margin-right': '0px'
		});
	}
});

$('[data-modal]').on('click', function(e) {
	e.preventDefault();
	var link = $(e.currentTarget).data('modal');

	if (link) {
		$('#' + link).arcticmodal();
	}
});

//
// Slider - Accounts
// =================================================================
if ($('.js-accounts-slider').length) {
	var sliderBlock = $('.js-accounts-slider');
	var options = function options() {
		var setting = {};
		var setting1 = {
			maxSlides: 1
		};
		var setting2 = {
			maxSlides: 2
		};
		var common = {
			auto: false,
			pager: true,
			slideWidth: 555,
			slideMargin: 30,
			minSlides: 1,
			moveSlides: 1,
			controls: false,
			pagerCustom: '.slider__pagination--accounts',
			onSliderLoad: function onSliderLoad() {
				$('.js-account-select').selectric({
					forceRenderBelow: true,
					expandToItemText: true,
					maxHeight: 450
				});
			}
		};

		if (window.innerWidth <= 1200) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(sliderBlock, options);
}

//
// Slider - Product Page Main Photo
// =================================================================
if ($('.js-product-slider').length) {
	var _sliderBlock = $('.js-product-slider');
	var _options = {
		auto: false,
		slideWidth: 750,
		slideMargin: 30,
		minSlides: 1,
		moveSlides: 1,
		pager: true,
		controls: false,
		pagerCustom: '.product__slider-thumbs'
	};

	_sliderBlock.bxSlider(_options);
}

//
// Slider - Product Thumbs
// =================================================================
if ($('.js-product-thumbs-slider').length) {
	var _sliderBlock2 = $('.js-product-thumbs-slider');
	var _options2 = function _options2() {
		var setting = {};
		var setting1 = {
			maxSlides: 1
		};
		var setting2 = {
			maxSlides: 2
		};
		var setting3 = {
			maxSlides: 3
		};
		var common = {
			auto: false,
			pager: false,
			slideWidth: 233,
			slideMargin: 23,
			minSlides: 1,
			moveSlides: 1,
			controls: true,
			nextSelector: '.product__slider-next',
			prevSelector: '.product__slider-prev',
			nextText: '',
			prevText: ''
		};

		if (window.innerWidth <= 900) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth <= 1200) {
			setting = $.extend(setting2, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting3, common);
		}

		return setting;
	};

	createSlider(_sliderBlock2, _options2);
}

//
// Slider - Testimonials
// =================================================================
if ($('.js-testimonials-slider').length) {
	var _sliderBlock3 = $('.js-testimonials-slider');
	var _options3 = function _options3() {
		var setting = {};
		var setting1 = {
			maxSlides: 1
		};
		var setting2 = {
			maxSlides: 2
		};
		var setting3 = {
			maxSlides: 3
		};
		var common = {
			auto: false,
			pager: true,
			slideWidth: 360,
			slideMargin: 30,
			minSlides: 1,
			moveSlides: 1,
			controls: false,
			pagerCustom: '.slider__pagination--testimonials'
		};

		if (window.innerWidth <= 900) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth <= 1200) {
			setting = $.extend(setting2, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting3, common);
		}

		return setting;
	};

	createSlider(_sliderBlock3, _options3);
}

//
// Slider - Goods
// =================================================================
if ($('.js-goods-slider').length) {
	var _sliderBlock4 = $('.js-goods-slider');
	var _options4 = function _options4() {
		var setting = {};
		var setting1 = {
			maxSlides: 1
		};
		var setting2 = {
			maxSlides: 4
		};
		var common = {
			auto: false,
			pager: false,
			slideWidth: 360,
			slideMargin: 30,
			minSlides: 1,
			moveSlides: 1,
			controls: true,
			nextSelector: '.goods__next',
			prevSelector: '.goods__prev',
			nextText: '',
			prevText: ''
		};

		if (window.innerWidth <= 600) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 600) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(_sliderBlock4, _options4);
}

//
// Slider - Shares
// =================================================================
if ($('.js-shares-slider').length) {
	var _sliderBlock5 = $('.js-shares-slider');
	var _options5 = function _options5() {
		var setting = {};
		var setting1 = {
			maxSlides: 1,
			slideMargin: 5
		};
		var setting2 = {
			maxSlides: 2

		};
		var common = {
			auto: false,
			pager: false,
			slideWidth: 970,
			slideMargin: 40,
			minSlides: 1,
			moveSlides: 1,
			controls: true,
			nextSelector: '.shares__next',
			prevSelector: '.shares__prev',
			nextText: '',
			prevText: ''
		};

		if (window.innerWidth <= 1200) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(_sliderBlock5, _options5);
}

//
// Slider - Product_Popular
// =================================================================
if ($('.js-product_popular-slider').length) {
	var _sliderBlock6 = $('.js-product_popular-slider');
	var _options6 = function _options6() {
		var setting = {};
		var setting1 = {
			maxSlides: 1,
			slideMargin: 0
		};
		var setting2 = {
			maxSlides: 5

		};

		var setting3 = {
			maxSlides: 3

		};

		var setting4 = {
			maxSlides: 2

		};
		var common = {
			auto: false,
			pager: false,
			slideWidth: 260,
			slideMargin: 30,
			minSlides: 1,
			moveSlides: 1,
			controls: true,
			nextSelector: '.product_popular__next',
			prevSelector: '.product_popular__prev',
			nextText: '',
			prevText: ''
		};

		if (window.innerWidth <= 1200) {
			setting = $.extend(setting3, common);
		}
		if (window.innerWidth <= 920) {
			setting = $.extend(setting4, common);
		}
		if (window.innerWidth <= 630) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(_sliderBlock6, _options6);
}

//
// Slider - shares_special
// =================================================================
if ($('.js-shares_special-slider').length) {
	var _sliderBlock7 = $('.js-shares_special-slider');
	var _options7 = function _options7() {
		var setting = {};
		var setting1 = {
			maxSlides: 1,
			slideMargin: 0
		};
		var setting2 = {
			maxSlides: 5

		};

		var setting3 = {
			maxSlides: 3

		};

		var common = {
			auto: false,
			pager: false,
			slideWidth: 260,
			slideMargin: 30,
			minSlides: 1,
			moveSlides: 1,
			controls: true,
			nextSelector: '.shares_special__next',
			prevSelector: '.shares_special__prev',
			nextText: '',
			prevText: ''
		};

		if (window.innerWidth <= 1200) {
			setting = $.extend(setting3, common);
		}

		if (window.innerWidth <= 991) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 1200) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(_sliderBlock7, _options7);
}

//
// Slider - Catalog Page
// =================================================================
if ($('.js-catalog-slider').length) {
	var _sliderBlock8 = $('.js-catalog-slider');
	var _options8 = function _options8() {
		var setting = {};
		var setting1 = {
			maxSlides: 1
		};
		var setting2 = {
			maxSlides: 1
		};
		var common = {
			auto: false,
			pager: true,
			minSlides: 1,
			moveSlides: 1,
			controls: false,
			pagerCustom: '.slider__pagination'
		};

		if (window.innerWidth <= 600) {
			setting = $.extend(setting1, common);
		}
		if (window.innerWidth > 600) {
			setting = $.extend(setting2, common);
		}

		return setting;
	};

	createSlider(_sliderBlock8, _options8);
}

//
// Dropdown
// =================================================================
dropdown('.dropdown', '.dropdown__menu');
dropdown('.game-accounts', '.game-accounts__dropdown');

//
// Tabs
// =================================================================
var $tabs = $('.js-tabs');
var $tabsContent = $('.js-tab-content');

if ($tabs.length) {
	$tabs.on('click', 'a', function(e) {
		e.preventDefault();
		$tabs.find('a').removeClass('is--active');
		$(e.currentTarget).addClass('is--active');

		$tabsContent.removeClass('is--active');
		var id = $(e.currentTarget).attr('href');

		$(id).addClass('is--active');
	});
}

//
// Подключаем fancybox для фоток товара
//---------------------------------------------------------------------------------------
var $gallery = $('[rel="gallery"]');

if ($gallery.length) {
	$gallery.fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		helpers: {
			title: {
				type: 'inside'
			}
		}
	});
}

//
// Ссылка с прокруткой на элемент
//---------------------------------------------------------------------------------------
var $anchors = $('[data-scroll]');

if ($anchors.length) {
	$anchors.on('click', function(e) {
		e.preventDefault();
		var id = $(e.currentTarget).data('scroll');
		var offsetTop = $('#' + id).offset().top;

		$('body,html').animate({
			scrollTop: offsetTop
		}, 1500);
	});
}

//
// Price Range Slider
// =================================================================
var priceRange = $('#price_range');

if (priceRange.length) {
	priceRange.ionRangeSlider({
		type: 'double',
		grid: false,
		min: 0,
		max: 2000,
		from: 0,
		to: 2000,
		prefix: '$'
	});
}

//
// Champions Range Slider
// =================================================================
var championsRange = $('#champions_range');

if (championsRange.length) {
	championsRange.ionRangeSlider({
		type: 'double',
		grid: false,
		min: 0,
		max: 136,
		from: 0,
		to: 136
	});
}

//
// Skins Range Slider
// =================================================================
var skinsRange = $('#skins_range');

if (skinsRange.length) {
	skinsRange.ionRangeSlider({
		type: 'double',
		grid: false,
		min: 23,
		max: 366,
		from: 23,
		to: 366
	});
}

//
// Search List Function
// =================================================================
function searchList(inputId, listId) {
	var input = document.getElementById(inputId);
	var filter = input.value.toUpperCase();
	var ul = document.getElementById(listId);
	var li = ul.getElementsByTagName('li');

	for (var i = 0; i < li.length; i++) {
		var label = li[i].getElementsByTagName('label')[0];

		if (label && label.innerText.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}

//
// Scroll pane Init
// =================================================================
var $scrollable = $('.js-scroll-list');

if ($scrollable.length) {
	$scrollable.jScrollPane();
}

//
// FAQ
// =================================================================
var $faqItem = $('.faq__item');

if ($faqItem.length) {
	$('.faq__content', $faqItem).slideUp(0);
	$faqItem.on('click', function(event) {
		console.log(event.target);
		$(event.target).toggleClass('is--active').next().stop().slideToggle();
	});
}

var $filter = $('.filter.is--collapsible');

if ($filter.length) {
	$('.filter__list', $filter).slideUp(0);
	$filter.on('click', '.filter__header', function(event) {
		console.log(event.target);
		$(event.target).toggleClass('is--active').next().stop().slideToggle();
	});
}

//
// Region
// =================================================================
var $regions = $('.region__list');
var $regionsLink = $regions.find('a');
var $regionsMap = $('.region__map-item');
var $regionsPayment = $('.payment-methods__item');

if ($regions.length) {
	$regions.on('click', 'a', function(event) {
		event.preventDefault();
		var target = event.target;
		var region = $(target).data('region');

		$regionsLink.removeClass('is--active');
		$regionsMap.removeClass('is--active');
		$regionsPayment.removeClass('is--active');
		$('[data-region="' + region + '"]').addClass('is--active');
	});
}

//
// Region
// =================================================================
$('.js-scroll-to').on('click', function(event) {
	event.preventDefault();
	var $this = $(event.target);
	var $target = $('.' + $this.data('scroll-to'));

	$('html, body').animate({
		scrollTop: $target.offset().top
	}, 1500);
});
