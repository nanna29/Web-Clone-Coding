$(".QButton").click(function() {
    $(this).next(".answer").stop().slideToggle(100); // 누르면 내려오게
    $(this).next(".icons").siblings(".icons").css("color","red");
    $(this).next(".answer").siblings(".answer").slideUp(100); // 1개씩 펼치기
    $(".icons").css("color","red");
    
    if ($(this).find(".plus").css('display') == 'block'){
        $(this).find(".plus").css('display', 'none');
        $(this).find(".xmark").css('display', 'block');
        console.log("xxx");
    } else {
        $(this).find(".plus").css('display', 'block');
        $(this).find(".xmark").css('display', 'none');
    }
});

