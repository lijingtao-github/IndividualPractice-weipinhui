window.onscroll=function(){
    if($(document).scrollTop()>=80){
        $(".J-brand-filter").css({"position":"fixed","top":"0","left":"0"})
        $(".filter-bar").css("background","#fff")
    }else{
        $(".J-brand-filter").css("position","relative")
        $(".filter-bar").css("background","hsla(0, 0%, 100%, .9)")
    }
}


$(".u-spot").click(function(){
    $(".u-spot").css("animation-name","open-entry-animate")
    $(".u-bg").css({"animation-name":"open-bg-animate","display":"block"})
    $(".u-resident-menus").addClass("active")
})

$(".icon-close").click(function(){
    $(".u-spot").css("animation-name","close-entry-animate")
    $(".u-bg").css({"animation-name":"close-bg-animate","display":"none"})
    $(".u-resident-menus").removeClass("active")
})


$(".J-cart-cmp").click(function(){
    window.open("../html/购物车.html","_self")
})


var num=window.location.search.substr(1)

$.ajax({
    "type": "get",
    "url": "../json/详情页.json",
    "async": true,
    "data": {},
    "dataType": ""
}).then(function (str){
    $("<span class='ui-ellipsis'></span>").html(`${str[num].firstTitle}`).appendTo(".title")
    $("<span></span>").html(`${str[num].firstLasttime}`).appendTo(".leavetime-wrap")
    for(var a=0;a<str[num].secondList.length;a++){
        $("<li></li>").html(`
        <a href="javascript:;" class="ablock">
            <img src="${str[num].secondList[a].secondImg}" alt="">
        </a>
        <div class="product-price-wrap">
            <div class="vip-price-wrap-type-203">
                <div class="vip-price-msg">
                    <span>折后价</span>
                </div>
                <div class="vip-promotion-price">
                    <span>${str[num].secondList[a].secondPrice}</span>
                </div>
            </div>
            <div class="grally-price-wrapper">
                <span class="grally-price">${str[num].secondList[a].secondSPrice}</span>
                <span class="mark-price">${str[num].secondList[a].secondYPrice}</span>
                <span class="discount">${str[num].secondList[a].secondDiscount}</span>
            </div>
        </div>
        <div class="product-name">
            ${str[num].secondList[a].secondTitle}
        </div>
        `).appendTo(".list-view-page")
    }

    $(".list-view-page li").click(function(){
        window.open("../html/商品详情页2.html?"+$(this).index(),"_self")
    })
})

var Storage = window.localStorage;
$(".back").click(function(){
    window.history.back()
    Storage.removeItem("Num")
})

$(".home").on("click",function(){
    window.open("../html/今日推荐-首页.html","_self")
    Storage.removeItem("Num")
})
$(".u-body-menus li").eq(0).on("click",function(){
    window.open("../html/今日推荐-首页.html","_self")
    Storage.removeItem("Num")
})

