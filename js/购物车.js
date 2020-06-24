var Storage = window.localStorage;

$(".header-left-button").click(function () {
    window.history.back()
})

var date = JSON.parse(Storage.getItem("ShopItem"))
if (!Storage.getItem("ShopItem")) {
    $(".box1").css("display", "block")
    $(".box2").css("display", "none")
    $(".pay-content").css("display", "none")
} else {
    $(".box1").css("display", "none")
    $(".box2").css("display", "block")
    $(".pay-content").css("display", "block")
}

$(".button-primary").click(function () {
    window.open("../html/今日推荐-首页.html", "_self")
})

for (var a = 0; a < date.length; a++) {
    $("<li></li>").html(`
    <a href="javascript:;" class="littleimg">
        <img src="${date[a].Img}" alt="">
    </a>
    <div class="list-item-info">
        <a href="javscript:;" class="meta">
            <h4 class="title">${date[a].Title}</h4>
            <p class="size">${date[a].Size}</p>
            <div class="tips-wrapper">
                <span class="favorable-tip">折后价</span>
            </div>
        </a>
        <div class="stock">
            <a href="javascript:;" class="disabled" _reduce="${date[a].Id}">
                <i class="icon-minus">
                    <img src="../img/减号.png" alt="">
                </i>
            </a>
            <span>${date[a].Number}</span>
            <a href="javascript:;" class="plus" _plus="${date[a].Id}">
                <i class="icon-plus">
                    <img src="../img/加号.png" alt="">
                </i>
            </a>
            <a href="javascript:;" class="delete-product-button" _remove="${date[a].Id}">
                <i class="icon-close">
                    <img src="../img/关闭-弹窗.png" alt="">
                </i>
            </a>
        </div>
        <a href="javascript:;" class="price">
            <span class="original-price">${date[a].Price}</span>
            <del>${date[a].YPrice}</del>
        </a>
    `).appendTo(".cart-order-list")
}





$(".cart-order-list").on("click",".disabled",function(){
    var Reduce = $(this).attr("_reduce")
    for (var b = 0; b < date.length; b++) {
        if (date[b].Id == Reduce) {
            if (date[b].Number <= 1) {
                date[b].Number = 1
                $(".stock span").eq(b).html(1)
                
            } else if (date[b].Number > 1) {
                date[b].Number -= 1
                $(".stock span").eq(b).html(`${date[b].Number}`)
            }
            Storage.setItem("ShopItem", JSON.stringify(date))

            var P=date[b].Price.replace("¥","")
            $(".total-price").html(`¥${parseInt(P)*parseInt(date[b].Number)}`)
        }
    }
})

$(".cart-order-list").on("click",".plus",function(){
    var Plus = $(this).attr("_plus")
    for (var c = 0; c < date.length; c++) {
        if (date[c].Id == Plus) {
            date[c].Number += 1
            $(".stock span").eq(c).html(`${date[c].Number}`)
            Storage.setItem("ShopItem", JSON.stringify(date))

            var P=date[c].Price.replace("¥","")
            $(".total-price").html(`¥${parseInt(P)*parseInt(date[c].Number)}`)
        }
    }
})

$(".cart-order-list").on("click",".delete-product-button",function(){
    var Remove = $(this).attr("_remove")
    for (var d = 0; d < date.length; d++) {
        if (date[d].Id == Remove) {
            date.splice(d, 1)
            $(this).parents("li").remove()
            Storage.setItem("ShopItem", JSON.stringify(date))
            if($(".cart-order-list").html()==""){
                Storage.removeItem("ShopItem")
            }
        }
    }
})

function all(){
    var sum=0
    $(".cart-order-list li").each(function(){
        var P=date[$(this).index()].Price.replace("¥","")
        sum+=parseInt(P)*parseInt($(this).find(".stock span").html())
    })
    $(".total-price").html(sum)
}


$(".btn-pay-online").click(function(){
    window.open("../html/支付页.html","_self")
})