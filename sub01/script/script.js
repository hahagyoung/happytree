jQuery(document).ready(function(){

    //메뉴 슬라이드
    $(window).resize(function(){
        if(window.innerWidth > 679){
            $('.ham>li').mouseover(function(){
                $(this).find('.submenu').css("display","flex");
            }).mouseout(function(){
                $(this).find('.submenu').stop().css("display","none");
            })
        }else{
            $('.ham>li').mouseout(function(){
                $(this).find('.submenu').stop().css("display","flex");
            });
        }
    }).resize();
    
    const bar = document.querySelector(".bar");
    const ham = document.querySelector(".ham");

    bar.addEventListener("click", ()=>{
        ham.classList.toggle("on");
        bar.classList.toggle("on");
    });
});