$(document).ready(function(){

    var BG = 0;

    $(".reset").on("click", function(){

        var blue = "#002535";
        var yellow = "#ffc303";

        $(".cls-3").css({"fill": yellow});
        $(".cls-4").css({"fill": yellow});
        $(".vcls-3").css({"fill": yellow});
        $(".label1").html(yellow);

        $(".cls-1").css({"fill": blue});
        $(".cls-5").css({"fill": blue});
        $(".vcls-1").css({"fill": blue});
        $(".vcls-4").css({"fill": blue});
        $(".label2").html(blue);

        $("#color1").val(yellow);
        $("#color2").val(blue);
    });

    $(".changeBG").on("click", function(){
        if(BG == 0){
            $("body").css({"background-color":"black"});
            $(".label1").css({"color":"white"});
            $(".label2").css({"color":"white"});
            
            BG = 1;
            return BG
        }else{
            $("body").css({"background-color":"white"});
            $(".label1").css({"color":"black"});
            $(".label2").css({"color":"black"});

            BG = 0;
            return BG
        }
    });

    $("#color1").on("change", function(){

        var newcolor = $(this).val();

        $(".cls-3").css({"fill": newcolor});
        $(".cls-4").css({"fill": newcolor});
        $(".vcls-3").css({"fill": newcolor});
        $(".label1").html(newcolor);
    });

    $("#color2").on("change", function(){

        var newcolor = $(this).val();

        $(".cls-1").css({"fill": newcolor});
        $(".cls-5").css({"fill": newcolor});
        $(".vcls-1").css({"fill": newcolor});
        $(".vcls-4").css({"fill": newcolor});
        $(".label2").html(newcolor);
    });

});