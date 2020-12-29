$(function () {
    $(document).scroll(function () {
        var $nav = $("#desktop-nav");
        var $image = $("#hero-image");
        var $height = $image.height();

        $nav.toggleClass('fixed-top', $(this).scrollTop() > $height);
        $('body').toggleClass('extra-padding', $(this).scrollTop() > $height);
    });
});