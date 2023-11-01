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

    //shop 버튼
    const shop = document.querySelector("#shop");

    const btn = shop.querySelector(".btn");
    const one = btn.querySelector(".one");
    const two = btn.querySelector(".two");

    $(function(){
        $('#shop>.btn>button').click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            return false;
        })
        $(one).click(function(){
            $("#shop>.content>.box:nth-child(1)").addClass("active").siblings().removeClass("active");
            return false;
        })
        $(two).click(function(){
            $("#shop>.content>.box:nth-child(2)").addClass("active").siblings().removeClass("active");
            return false;
        })
    });
});