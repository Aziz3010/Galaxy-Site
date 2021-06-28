// vars
let textOffset = $("#Home .text").offset().top;
let QuoteOffset = $(".Quote").offset().top;

// Scrolling
$(window).scroll( function(){
    let topAfterScroll = $(window).scrollTop();

    // Navbar color change
    if(topAfterScroll > textOffset - 60){
        $("#Navbar").css("background-color","#34363b")
    }else{
        $("#Navbar").css("background-color","transparent")
    }

    // up btn display flex
    if(topAfterScroll > QuoteOffset - 71){
        $(".Up").fadeIn(800)
    }else{
        $(".Up").fadeOut(800)
    }

});

// check top in beginning
if( $(window).scrollTop() == 0){
    $(".Up").css("display","none")
}else{
    $(".Up").css("display","flex")
}

// go to top smoothly
$(".Up").click(function(){
    $("body , html").animate({scrollTop:0},1500)
});

// go to section smoothly
$("#Navbar .link li a").click(function(e){

    let currentSection = $(e.target).attr("href")
    let sectionOffset = $(`${currentSection}`).offset().top;
    $("body , html").animate({scrollTop:sectionOffset},1500)

});

// show menu
$(".berger").click(function(){
    if( $("#link").offset().top == 0 ){
        $("#link").slideDown(1000);
    }else{
        $("#link").slideUp(1000);
    }
});