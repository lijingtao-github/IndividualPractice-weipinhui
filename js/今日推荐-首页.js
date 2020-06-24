var Unclick = false
$(".more").click(function () {
    if (!Unclick) {
        $(".icon-arrow-down").css("display", "none")
        $(".icon-arrow-up").css("display", "block")
        $(".channel-box").css("display", "block")
        $(".more").css("background-color", "#fff")
    } else {
        $(".icon-arrow-down").css("display", "block")
        $(".icon-arrow-up").css("display", "none")
        $(".channel-box").css("display", "none")
        $(".more").css("background-color", "#f9f9fa")
    }
    Unclick = !Unclick
})



window.onscroll = function () {
    if ($(document).scrollTop() > 1085) {
        $(".wap-backtop").css("display", "block")
    } else {
        $(".wap-backtop").css("display", "none")
    }

    $(".wap-backtop").click(function () {
        $(document).scrollTop(0)
    })
}



$.ajax({
    "type": "get",
    "url": "../json/详情页.json",
    "async": true,
    "data": {},
    "dataType": ""
}).then(function (str){
    for(var a=0;a<str.length;a++){
        $("<div class='ltart-sectionlist-item2'></div>").html(`
        <div class="ltart-sectionlist-box">
            <div class="sectionlist-box-top">
                <img src="${str[a].firstImg}" alt="">
            </div>
            <div class="sectionlist-box-bottom">
                <div class="title">
                    <h3>${str[a].firstTitle}</h3>
                    <span>${str[a].firstLasttime}</span>
                </div>
                <div class="discount">
                    <span class="num">${str[a].firstDiscount}</span>
                    折起
                </div>
            </div>
        </div>
        `).appendTo(".Box")
    }

    var Storage = window.localStorage;
    $(".ltart-sectionlist-item2").click(function(){
        window.open("../html/商品详情页1.html?"+$(this).index(),"_self")

        var number=$(this).index()
        var obj={number}
        if(Storage.getItem("Num")){
            var ckNumber=JSON.parse(Storage.getItem("Num"))
            ckNumber.push(obj.number)
            Storage.setItem("Num",JSON.stringify(ckNumber))
        }else{
            Storage.setItem("Num",JSON.stringify(obj))
        }
    })
    
})

$(".header-right").click(function(){
    window.open("../html/分类页.html","_self")
})

var Storage = window.localStorage;
var data=JSON.parse(Storage.getItem("PhotoNum"))

if(!Storage.getItem("PhotoNum")||data==null){
    $(".header-left-button").html("登录")
}else{
    $(".header-left-button").html("我的")
    
}
$(".header-left-button").click(function(){
    if(!Storage.getItem("PhotoNum")||data==null){
        window.open("../html/手机注册登录.html","_self")
    }else{
        window.open("../html/我的.html","_self")
    }
})




$(".J-cart-cmp").click(function(){
    window.open("../html/购物车.html","_self")
})