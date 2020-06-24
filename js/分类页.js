$(".m-wap-header-left").click(function(){
    window.history.back()
})

$(".m-wap-header-right").click(function(){
    window.open("../html/今日推荐-首页.html","_self")
})



$.ajax({
    "type": "get",
    "url": "../json/分类页.json",
    "async": true,
    "data": {},
    "dataType": ""
}).then(function (str){
    for(var a=0;a<str.length;a++){
        $("<li class='nav-item'></li>").html(`
        <span>${str[a].title}</span>
        `).appendTo(".m-classify-nav")

        $(".nav-item").first().addClass("active")
    }

    for(var b=0;b<str[0].list.length;b++){
        $("<div class='u-classify-sub'></div>").html(`
        <h2 class="u-classify-sub-title">${str[0].list[b].littletit}</h2>
        <div class="m-classify-content-box">
            <ul class="m-classify-list">
                
                
            </ul>
        </div>
        `).appendTo(".m-classify-content-show")

        for(var c=0;c<str[0].list[b].shop.length;c++){
            $("<li></li>").html(`
            <img src="${str[0].list[b].shop[c].coverimg}" alt="">
            <span>${str[0].list[b].shop[c].covertit}</span>
            `).appendTo($(".m-classify-list").eq(b))
        }
    }

    $(".nav-item").click(function(){
        var index=$(this).index()
        $(this).addClass("active").siblings(".nav-item").removeClass("active")
        $(".m-classify-content-show").html("")

        for(var d=0;d<str[index].list.length;d++){
            $("<div class='u-classify-sub'></div>").html(`
            <h2 class="u-classify-sub-title">${str[index].list[d].littletit}</h2>
            <div class="m-classify-content-box">
                <ul class="m-classify-list">
                    
                    
                </ul>
            </div>
            `).appendTo(".m-classify-content-show")

            for(var e=0;e<str[index].list[d].shop.length;e++){
                $("<li></li>").html(`
                <img src="${str[index].list[d].shop[e].coverimg}" alt="">
                <span>${str[index].list[d].shop[e].covertit}</span>
                `).appendTo($(".m-classify-list").eq(d))
            }
        }
    })
})