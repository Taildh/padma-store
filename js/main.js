$(document).ready(function () {
    $(".main-nav").slick({
        slidesToShow: 9,
        slidesToScroll: 9,
        variableWidth: true,
        prevArrow: false,
        nextArrow: `<img src="./images/arrow-right.svg" alt="">`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
        ]
    });

    $(".banner-wrapper").slick({
        slidesToShow: 1,
        arrows: false,
        lazyLoad: 'ondemand',
    })

    function mobileOnlySlider() {
        $('.order-tab').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: false,
            nextArrow: `<img src="./images/arrow-right.svg" alt="">`,
        });
    }
    if (window.innerWidth < 768) {
        mobileOnlySlider();
    }


    function toggleSideProfile() {
        $(".profile-toggle").click(function () {
            $(this).toggleClass("open")

            if ($(this).hasClass("open")) {
                $(".profile-sidebar-content").fadeIn(1000);
            } else {
                $(".profile-sidebar-content").fadeOut('fast');
            }

        })
    }

    function tab() {
        $(".global-tab-contents").hide();
        $(".global-tab-contents:first").show();
        $(".tab-header li:first").addClass('active');

        $(".tab-header li").click(function () {
            let id = $(this).find("a").attr('id');
            $(".tab-header li").removeClass('active');
            $(this).addClass('active');
            $('.global-tab-contents').hide();
            $(".global-tab-contents[data-tab=" + id + "]").fadeIn();

        });
    }

    $("#icon-filter").click(function () {
        $(".left-sidebar-wrapper").toggleClass("sidebar-show");
    });

    $(".radio-price").click(function () {
        $(".label-radio-price").removeClass("price-checked");
        $(this).parent().addClass("price-checked");
    })

    
    $(".radio-rating").click(function () {
        $(".label-radio-rating").removeClass("rating-checked");
        $(this).parent().addClass("rating-checked");
    })


    $(".bg-fake").click(function () {
        $(".left-sidebar-wrapper").toggleClass("sidebar-show");
    })

    $("#close-sidebar").click(function () {
        $(".left-sidebar-wrapper").toggleClass("sidebar-show");
    })

    tab();
    toggleSideProfile();
});
