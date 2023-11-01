jQuery(document).ready(function(){
    //shop 버튼
    const shop = document.querySelector("#shop");

    const btn = shop.querySelector(".btn");
    const one = btn.querySelector(".one");
    const two = btn.querySelector(".two");
    const three = btn.querySelector(".three");

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
        $(three).click(function(){
            $("#shop>.content>.box:nth-child(3)").addClass("active").siblings().removeClass("active");
            return false;
        })
    });
});