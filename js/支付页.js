$(".goBack").click(function(){
    window.history.back()
})

$(".vcp").click(function(){
    $(this).addClass("active").siblings(".vcp").removeClass("active")
})

var Storage = window.localStorage;
$(".button-primary").click(function(){
    alert(`使用${$(".active .mutil-text").html()}成功支付了${$(".preview strong").html()}`)
    Storage.removeItem("ShopItem")
    Storage.removeItem("Num")
    window.open("../html/今日推荐-首页.html","_self")
})