import './style.scss';
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

$(function () {
    if ($(window).width() < 896) {
        $('#search-btn-img').attr('src', '../assets/img/icons/search-loop_green.png');
        $('#basket-image').attr('src', '../assets/img/icons/online-shopping-cart_orange.png');
        $('#categories-list').addClass('header__categories-list_close');
        $('.header__list-item').removeClass('header__list-item_has_right_border');
    }

    if ($(window).width() >= 896) {
        $('#search-btn-img').attr('src', '../assets/img/icons/search-loop_white.png');
        $('#basket-image').attr('src', '../assets/img/icons/online-shopping-cart_black.png');
        $('#menu-navigation').removeClass('header__menu-navigation_close');
        $('#search-form-input').removeClass('search-form__input_hidden');
        $('.footer__title-column')
            .removeClass('footer__title-column_close')
            .siblings().removeClass('footer__list_close');
    }

    $('#selection-categories__toggle-button').click(() => {
        let popup = $('#selection-categories__popup');
        if (popup.hasClass('selection-categories__popup_hidden')) {
            popup.fadeIn();
        } else {
            popup.fadeOut();
        }
        popup.toggleClass('selection-categories__popup_hidden selection-categories__popup_visible');
    });

    if ($(window).width() < 1280 && $(window).width() > 895) {
        $('#menu-categories')
            .append('<button class="header__categories-button-next swiper-button-next"></button>')
            .append('<button class="header__categories-button-prev swiper-button-prev"></button>');
        $('.header__categories-list').addClass('swiper-wrapper');
        $('.header__categories-item').addClass('swiper-slide');
        const swiperCategories = new Swiper('#menu-categories', {
            breakpoints: {
                767: {
                    slidesPerView: 3
                },
                895: {
                    slidesPerView: 4
                },
                1023: {
                    slidesPerView: 5
                },
                1151: {
                    slidesPerView: 6
                },
                1279: {
                    slidesPerView: 7
                }
            },
            spaceBetween: 30,
            navigation: {
                nextEl: '.header__categories-button-next',
                prevEl: '.header__categories-button-prev',
            }
        });
    }

    let swiper = new Swiper('#portfolio', {
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.portfolio__pagination',
            clickable: true,
            bulletClass: 'portfolio__pagination-bullet',
            bulletActiveClass: 'portfolio__pagination-bullet_active',
            modifierClass: ''
        },
        navigation: {
            nextEl: '.portfolio__button-next',
            prevEl: '.portfolio__button-prev',
        },
    });

    $('#toggle-menu-categories').click(() => {
        let list = $('#categories-list');
        list.slideToggle();
        if (list.hasClass('header__categories-list_close')) {
            list.toggleClass('header__categories-list_close header__categories-list_open');
        } else {
            list.toggleClass('header__categories-list_open header__categories-list_close');
        }
    });

    $('#toggle-menu').click(() => {
        let btn = $('#toggle-menu'),
            nav = $('#menu-navigation');
        btn.toggleClass('header__toggle-menu_close header__toggle-menu_open');
        nav.slideToggle();
        if (nav.hasClass('header__menu-navigation_close')) {
            nav.toggleClass('header__menu-navigation_close header__menu-navigation_open');
        } else {
            nav.toggleClass('header__menu-navigation_open header__menu-navigation_close');
        }
    });

    if ($(window).width() < 896) {
        $('#search-btn').click(() => {
            event.preventDefault();
            let input = $('#search-form-input');
            if (input.hasClass('search-form__input_hidden')) {
                input
                    .slideToggle()
                    .toggleClass('search-form__input_hidden search-form__input_visible');
            } else {
                if (input.val().length === 0) {
                    input
                        .slideToggle()
                        .toggleClass('search-form__input_visible search-form__input_hidden');
                } else {
                    $('#search-form').submit();
                }
            }
        });
        $('.footer__title-column').click(() => {
            $(event.target).toggleClass('footer__title-column_close footer__title-column_open');
            $(event.target).siblings().slideToggle();
            $(event.target).siblings().toggleClass('footer__list_close footer__list_open');
        });
    }

    $(window).resize(() => {
        if ($(window).width() < 896) {
            $('#search-btn-img').attr('src', '../assets/img/icons/search-loop_green.png');
            $('#basket-image').attr('src', '../assets/img/icons/online-shopping-cart_orange.png');
        } else {
            $('#search-btn-img').attr('src', '../assets/img/icons/search-loop_white.png');
            $('#basket-image').attr('src', '../assets/img/icons/online-shopping-cart_black.png');
        }
    });
});