/* globals $ */

////// ハンバーガーメニュー //////
$(document).ready(function () {
    $(".hamburger").on("click", function () {
        $(this).toggleClass("active"); // hamburgerにactiveクラスを切り替える
        $(".header__nav-sp").toggleClass("active"); // header__nav-spにactiveクラスを切り替える
    });
});

// メニュー項目をクリックしたらメニューを閉じる
$(".header__nav-sp a").on("click", function () {
    $(".hamburger").removeClass("active"); // hamburgerのactiveクラスを削除
    $(".header__nav-sp").removeClass("active"); // header__nav-spのactiveクラスを削除
});


////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
    loop: false,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 10,

    // ブレークポイントの設定とPC版のスライド数の設
    breakpoints: {
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },

    // ナビゲーションボタンの設定
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

  // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

////////// トップに戻るボタンのスクロール位置が200pxを超えたらフェードインする //////////
$(document).ready(function () {
    const $backToTop = $(".btn__back-to-top");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $backToTop.addClass("show");
        } else {
            $backToTop.removeClass("show");
        }
    });
});
