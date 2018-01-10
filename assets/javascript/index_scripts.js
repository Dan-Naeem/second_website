/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {

    $(".header-subtitle").on("click", function () {
        $(".call2action").slideToggle();
    });

    $(".clickButton").on("click", function (e) {
        e.preventDefault();
        $(".column img").toggleClass("bigger");
    });

});
