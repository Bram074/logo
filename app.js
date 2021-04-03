$(document).ready(function(){


    $("#color1").on("change", function(){

        var newcolor = $(this).val();

        $(".cls-3").css({"fill": newcolor})
        $(".cls-4").css({"fill": newcolor})
        $(".vcls-3").css({"fill": newcolor})
        $(".label1").html(newcolor)
    });

    $("#color2").on("change", function(){

        var newcolor = $(this).val();

        $(".cls-1").css({"fill": newcolor})
        $(".cls-5").css({"fill": newcolor})
        $(".vcls-1").css({"fill": newcolor})
        $(".vcls-4").css({"fill": newcolor})
        $(".label2").html(newcolor)
    });

});