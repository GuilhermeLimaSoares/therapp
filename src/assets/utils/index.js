import $ from 'jquery';

$( document ).ready(function() {
    $( ".menu-icon" ).click(function() {
        // $(".navigation").css("display","block");
        $(".navigation").css("left","0%");
    });

    // $(".header",).click(function() {
    //     $(".navigation").css("left","-70%");
    // });

    $(".main" ).click(function() {
        $(".navigation").css("left","-70%");
    });
});