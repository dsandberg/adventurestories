'use strict';

window.onload = function () {

    // Om oss , las mer
    $('.las-mer').click(function (e) {
        $('#omoss-las-mer').slideToggle();
        e.target.innerHTML = e.target.innerHTML === 'läs mer' ? 'dölj' : 'läs mer';
        e.preventDefault();
    });

    // Instagram
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4243449644', // User id
        accessToken: '4243449644.1677ed0.45c36320ad144ef791751da5bffc3547',
        resolution: 'standard_resolution', // Upplösning
        limit: '8', // Hur många bilder som max visas
        template: '<a href="{{link}}" target="_blank" ><img src="{{image}}" /></a>'
    });
    userFeed.run();

    // Scoll animation
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length && !(event.currentTarget.classList[0] === 'event')) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        } else if (event.currentTarget.classList[0] === 'event' && !($('.event-wrapper').css('flex-direction') === 'row') && event.currentTarget.classList[1] === 'active') {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        } else {
            event.preventDefault();
        }
    });

    // Menu
    $('#nav-icon1').click(function () {
        $('#nav-icon1').toggleClass('open');
        $('li').slideToggle();
    });
};