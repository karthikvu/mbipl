height = $(window).height();
$(document).ready(function () {
    $('#mainImage').height(height + 'px');
    var pos1 = $('#img-2-text').offset().top;
    var elementIds = ['img-1-text', 'img-2-text', 'img-3-text'];
    details = {};
    $.each(elementIds, function (i, elemId) {
        details[elemId] = {
            top_of_element: $('#' + elemId).offset().top,
            bottom_of_element: $('#' + elemId).offset().top + $('#' + elemId).outerHeight()

        }
        $('#' + elemId).hide();
    });
    $(window).scroll(function () {
        var bottom_of_screen = $(window).scrollTop() + height;
        $.each(elementIds, function (i, elemId) {
            if (bottom_of_screen > details[elemId].top_of_element) {
                setTimeout(function () {
                    $('#' + elemId).fadeIn(500)
                }, 400);
            } else {
                // The element is not visible, do something else
            }

        });


    });


    $(window).scroll();
    setTimeout(function () {
        $('.image-content').fadeIn(400);
    }, 400);

    $('.hamburger').click(function () {
        $('.nav-horizontal').slideToggle(200);
    });

    $('.nav-child').click(function () {
        $.each($('.nav-child'), function (i, obj) {
            $(obj).removeClass('selected');
        });
        $(this).addClass('selected');
        $(window).scrollTo('.anchor-' + $(this).index(), 1000, {
            offset: -50
        });

        var isPhone = $('.hamburger').css('display') == 'block';
        if (isPhone) {
            $('.nav-horizontal').slideToggle(200);
        }
        //console.log($(this).index());
        //$('.nav-horizontal').slideToggle(200);
    });
});