 window.onscroll = function () {
    if ($(document).scrollTop() > 100) {
        $(".wap-backtop").css("display", "block")
    } else {
        $(".wap-backtop").css("display", "none")
    }

    $(".wap-backtop").click(function () {
        $(document).scrollTop(0)
    })
}


var Storage = window.localStorage;
var num1=JSON.parse(Storage.getItem("Num"))
var num2=window.location.search.substr(1)
$.ajax({
    "type": "get",
    "url": "../json/详情页.json",
    "async": true,
    "data": {},
    "dataType": ""
}).then(function (str){
    $(`<img src="${str[num1.number].secondList[num2].thirdImg}" alt="">`).appendTo(".product-swipe")

    $("<div class='price-bar-wrap'></div>").html(`
    <div class="main-prices">
        <span class="icon-normal">折后价</span>
        <span class="price">${str[num1.number].secondList[num2].secondPrice}</span>
        <div class="help-prices">
            <span class="market-price">${str[num1.number].secondList[num2].secondYPrice}</span>
            <span class="discount">${str[num1.number].secondList[num2].secondDiscount}</span>
        </div>
    </div>
    <div class="refer-prices">
        <span class="rerfer-price">${str[num1.number].secondList[num2].secondSPrice}</span>
    </div>
    `).appendTo(".product-price")

    $(".name-box").html(`${str[num1.number].secondList[num2].secondTitle}`)

    $("<div class='bg-image-v'></div>").html(`
    <div class="v-position1">
        <div class="m">历史售卖价</div>
        <div class="p">${str[num1.number].secondList[num2].hisPirce}</div>
    </div>
    <div class="v-position2">
        <div class="m">折后价</div>
        <div class="p">${str[num1.number].secondList[num2].secondPrice}</div>
    </div>
    <div class="v-position3">
        <div class="m">活动结束后</div>
        <div class="p">${str[num1.number].secondList[num2].hisPirce}</div>
    </div>
    `).appendTo(".product-price-chart")



    $(".vip-button-large").click(function(){
        
        if(!$(".grid-option").hasClass("checked")){
            alert("请先选择一种尺码")
        }else{
            var Id=str[num1.number].secondList[num2].id
            var Img=str[num1.number].secondList[num2].secondImg
            var Title=str[num1.number].secondList[num2].secondTitle
            var Size=$(".vip-grid-select .checked span").html()
            var Price=str[num1.number].secondList[num2].secondPrice
            var YPrice=str[num1.number].secondList[num2].secondYPrice
            var Number=1
    
            var obj={Id,Img,Title,Size,Price,YPrice,Number}
            var card=[]
            
            if(Storage.getItem("ShopItem")){
                var ckDate=JSON.parse(Storage.getItem("ShopItem"))
                $(".num-brage").html(ckDate.length)
                for(var a=0;a<ckDate.length;a++){
                    card.push(ckDate[a].Id)
                }
                if(card.includes(obj.Id)){
                    for(var b=0;b<ckDate.length;b++){
                        if(ckDate[b].Id==obj.Id){
                            ckDate[b].Number+=1
                            Storage.setItem("ShopItem",JSON.stringify(ckDate))
                        }
                    }
                }else{
                    ckDate.push(obj)
                    Storage.setItem("ShopItem",JSON.stringify(ckDate))
                    $(".num-brage").html(ckDate.length)
                }
            }else{
                $(".num-brage").html(1)
                Storage.setItem("ShopItem","["+JSON.stringify(obj)+"]")
            }
        }
    })
})

var N=JSON.parse(Storage.getItem("ShopItem"))
if(!Storage.getItem("ShopItem")||N.length==0){
    $(".num-brage").html(0)
}else{
    $(".num-brage").html(N.length)
}



$(".bar-left").click(function(){
    window.history.back()
})

$(".grid-option").click(function(){
    $(this).addClass("checked").siblings(".grid-option").removeClass("checked")
})

$(".vip-button").click(function(){
    window.open("../html/购物车.html","_self")
})


