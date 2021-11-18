/*
  * Template Name: Sumit - Responsive Personal Portfolio Template
  * Author: SHLThemes
  * Author/Developer URL: https://themeforest.net/user/shlthemes
  * Version: 1.0.0
  * License: Themeforest Standard Licenses: https://themeforest.net/licenses
  * File Description: Main JS file of the template
*/
/*-----------------------
Preloader
------------------------- */
$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});

/*-------------------------
 Scroll to Top
--------------------------- */
$(window).on("load", function () {
    var scrollTop = $(".scrollTop");

    $(window).on("scroll", function () {
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 300) {
            $(scrollTop).css({
                "opacity": "1",
                "bottom": "1rem"
            });

        } else {
            $(scrollTop).css({
                "opacity": "0",
                "bottom": "-2rem"
            });
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 150);
        return false;

    });
});

/*-----------------------
Floating Button Function 
------------------------- */
$(window).on("scroll", function () {
    let homeCTA, activeFloatingPos, scrollAmount;
    // home = document.querySelector('.home-section');
    homeCTA = document.querySelector('.home-btn')

    // activeFloatingPos = Math.round(home.clientHeight * .9);
    activeFloatingPos = Math.round(window.innerHeight * .9);
    scrollAmount = Math.round(window.scrollY);

    if (scrollAmount >= activeFloatingPos) {
        homeCTA.classList.add('floating');
    } else {
        homeCTA.classList.remove('floating');
    }
});

/*-------------------------
 Sidebar Toggle Controller
--------------------------- */
$('.sidebar-mobile-toggler').on("click", function () {
    $('.sidebar-mobile-toggler, .sidebar').toggleClass('active');
});

/*-----------------------
Page Scrolling Indicator 
------------------------- */
$(document).on('scroll', function () {
    var scrollInd, sidebarWidth, bodyWidth, scrollIndWidth, totalHeight, progress, indexPage;

    indexPage = document.querySelector('.index-page')

    scrollInd = document.querySelector('.scrolling-indicator');
    sidebarWidth = document.querySelector('.sidebar').offsetWidth;

    bodyWidth = document.body.scrollWidth;
    scrollIndWidth = ((bodyWidth - sidebarWidth) / bodyWidth) * 100;
    totalHeight = document.body.scrollHeight - window.innerHeight;
    progress = (window.pageYOffset / totalHeight) * 100;

    scrollInd.style.width = progress + '%';

    if (indexPage.clientWidth > 992) {
        scrollInd.style.width = (progress / (100 / scrollIndWidth)) + '%';
    }
});

/*-----------------------
Add Background on Scroll
------------------------- */
$(window).on("scroll", function () {
    $(".sidebar.classic").toggleClass("scrolled", $(this).scrollTop() > 50)
});

/*-----------------------
Color Switcher
------------------------- */
$(window).on("load", function () {
    $('.switcher-setting').on("click", function () {
        $('.switcher').toggleClass('active');
    });

    $('.switcher-list li').on("click", function () {
        $('.switcher-list li').removeClass('active');
        $(this).addClass('active');
    })

    // Deep Sky Blue Color
    $('#color-deepSkyBlue').on("click", function () {
        $('#primary-color').attr("href", "css/colors/deepSkyBlue.css");
    });
    // Light Blue Color
    $('#color-lightBlue').on("click", function () {
        $('#primary-color').attr("href", "css/colors/lightBlue.css");
    });
    // Aqua Color
    $('#color-greenLight').on("click", function () {
        $('#primary-color').attr("href", "css/colors/green-light.css");
    });
    // Orange Light Color
    $('#color-orangeLight').on("click", function () {
        $('#primary-color').attr("href", "css/colors/orangeLight.css");
    });
    // Goldenrod Color
    $('#color-goldenrod').on("click", function () {
        $('#primary-color').attr("href", "css/colors/goldenrod.css");
    });
    // Green Color
    $('#color-green').on("click", function () {
        $('#primary-color').attr("href", "css/colors/green.css");
    });
    // Radical Red Color
    $('#color-radicalRed').on("click", function () {
        $('#primary-color').attr("href", "css/colors/radicalRed.css");
    });
    // Pink Color
    $('#color-pink').on("click", function () {
        $('#primary-color').attr("href", "css/colors/pink.css");
    });
    // Purple Color
    $('#color-purple').on("click", function () {
        $('#primary-color').attr("href", "css/colors/purple.css");
    });
    // Dark Blue Color
    $('#color-darkBlue').on("click", function () {
        $('#primary-color').attr("href", "css/colors/darkBlue.css");
    });
});

/*-----------------------
Owl Carousel 
------------------------- */
$(window).on("load", function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        loop: true,
        center: true,
        margin: 20,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoHeight: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ]
    });
});

/*----------------- 
Counter Init 
------------------ */
$(window).on("load", function () {
    $('.achievement-counter').counterUp({
        time: 1000
    });
});

/*-------------------------- 
Portfolio Filter Animation
--------------------------- */
$(window).on("load", function () {
    $('.portfolio-filter li').on("click", function () {
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');
    });
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-filter li').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});

/*-------------------------
 Background Video Init
--------------------------- */
jQuery(function () {
    jQuery("#home-video").YTPlayer();
});

/*---------------------------
Navigation Active Controller
---------------------------- */
$('.nav-link').on("click", function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});

/*----------------------- 
Magnific Popup for Video
------------------------- */
$('.vdo-ctrl').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    patterns: {
        youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; } 

            src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
        },
        vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
        }
    }
});

/*----------------- 
Client Navigation 
------------------ */
$('.client-navigate').on("mouseenter", function () {
    var $splitID, $num;
    $splitID = this.id.split('-');
    $num = $splitID[1];

    $('.client-navigate').removeClass('active');
    $(this).addClass('active');

    $('.client-single').removeClass('active');
    $('#c-' + $num).addClass('active');
});

/*-------------------------
 Magnific Popup for Popup
--------------------------- */
$('.project-popup').magnificPopup({
    type: 'inline',
    midClick: true
  });

/*-------------------------
 Subtle Slideshow 
--------------------------- */
$('#slides').slideshow({
    randomize: false, // Randomize the play order of the slides.
    slideDuration: 3000, // Duration of each induvidual slide.
    fadeDuration: 1000, // Duration of the fading transition. Should be shorter than slideDuration.
    animate: true, // Turn css animations on or off.
    pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
    enableLog: false // Enable log messages to the console. Useful for debugging.
});
