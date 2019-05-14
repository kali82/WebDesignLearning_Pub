$(document).ready(function () {


    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function () {
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 350));

        if ($(window).scrollTop() > 1500) {
            $(".loveText").addClass("scrolll");

        }

    });

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $('.grid').masonry({

        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0

    });

    new Glider(document.querySelector('.glider'), {

        slidesToShow: 2.5,
        slidesToScroll: 2,
        draggable: true,
        rewind: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

});