var Storage = window.localStorage;
var data=JSON.parse(Storage.getItem("PhotoNum"))

$(".header-left").click(function(){
    window.history.back()
})

$(".header-right").click(function(){
    window.open("../html/今日推荐-首页.html","_self")
})

$(".J-user-logout").click(function(){
    Storage.removeItem("PhotoNum")
    window.open("../html/今日推荐-首页.html","_self")
})

$(".vip-index").click(function(){
    window.open("../html/今日推荐-首页.html","_self")
})

$(".user-nick").html(data.photonumber)