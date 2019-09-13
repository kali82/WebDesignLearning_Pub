$(document).ready(function () {

    window.onload = () => {
        'use strict';
      
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
                   .register('./sw.js');
        }
      }


    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    var x = window.matchMedia("(max-width: 700px)");
    $(window).on("scroll", function () {
        var scrollFromTop = $(window).scrollTop();
        if ($(body.hasClass("menu-active"))) {
            $("body").toggleClass("scroll2", (scrollFromTop > 350));
        } else {
            $("body").toggleClass("scroll", (scrollFromTop > 350));

        }

        // if ($(window).scrollTop() > 1500) {
        //     if ($(body.hasClass("menu-active"))) {
        //         $(".loveText").addClass("scrolll");
        //     }


        // }

    });

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $('.grid').masonry({

        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0

    });
    if (x) {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            draggable: true,
            rewind: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });

    } else {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 2.5,
            slidesToScroll: 1.5,
            draggable: true,
            rewind: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }



    $('.menu li a[href^="#"]').on('click', function (fun) {

        fun.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }

    });


    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function () {
        body.addClass('menu-active');
    });

    mainOverlay.on('click', function () {
        body.removeClass('menu-active');
    });

    $('.menu li a').on('click', function () {
        $('body').removeClass('menu-active');
    });

});