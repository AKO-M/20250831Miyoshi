// hamburger
$(document).ready(function() {
    $(".hamburger").on("click", function() {
        $(".grovalNav").toggleClass("open");
    });
});

// Page Topへ戻るボタン
$(function () {
    let navPos = $("nav").offset().top;
    let pageTop = $("#pageTop");
    pageTop.fadeOut();
    $(window).scroll(function() {
        if($(this).scrollTop() > navPos) {
            $("nav").css({
                "position": "sticky",
                "top": 0,
            });
        } else {
            $("nav").css("position", "static");
        }
        if ($(this).scrollTop() > 700) {
        pageTop.addClass("show").fadeIn();
        } else {
            pageTop.fadeOut(function() {
                pageTop.removeClass("show");
            });
        }
    });
});

// 企業ページ　インストラクター
$(function () {
    $(".instructor-grid").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(".detail-button").on("click", function() {
        $(this).next().slideToggle("fast");
    });
});