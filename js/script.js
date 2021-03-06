var websiteObject = {
    scrollTo: function(to, duration) {
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, duration);
    },
    setupStickyNav: function() {
        $('.js--section-features').waypoint(function(direction) {
            if(direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');            
            }
        }, {
            offset: '60px;'
        });
    },
    setupAnimation: function() {
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '55%;'
        });
        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '55%;'
        });
        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            offset: '55%;'
        });
        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '55%;'
        });
    },
    init: function() {
        websiteObject.setupStickyNav();
        websiteObject.setupAnimation();
    }
};

$(document).ready(function() {
    websiteObject.init();
    
    // Trigger to scroll to a certain section
    $('.scrollTrigger').on('click', function(e) {
        e.preventDefault();
        var ele = $(e.target),
            to = ele.attr('data-scroll-to');
        websiteObject.scrollTo('.'+to, 1500);
    });
    
    // Mobile Menu
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
});