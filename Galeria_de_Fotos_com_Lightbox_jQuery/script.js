$(document).ready(function () {

    $("a").find(".galeria").bind("click", function () {
        var img = $(this).attr("src");
        $(".divbox img").attr("src", img);
        $(".bgbox, .divbox").fadeIn("fast");
    });

    $(".bgbox, .divbox button").bind("click", function () {
        $(".bgbox, .divbox").fadeOut("fast");
    });

});