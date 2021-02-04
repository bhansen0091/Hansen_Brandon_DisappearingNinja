$(document).ready(function(){

    $(".ninjaImgs").on("click", function(){
        $(this).toggle(400);
    });

    $(".restoreBtn").on("click", function(){
        $(".ninjaImgs").show(400);
    })

});