var Storage = window.localStorage;
var PhoneNumber=/^1[3578]\d{9}$/

$(".iconfont-close").click(function(){
    window.history.back()
})

var code;
$(".J-mlogin-get-login-authcode").click(function(){
    code=''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    for (var b = 0; b < 6; b++) {
        var index = Math.floor(Math.random() * 10)
        code += random[index]
    }
    setTimeout(function(){
        alert(code)
    },2000)
})


$(".J-login-models-submit").click(function(){
    if($(".J-mlogin-ipt").eq(0).val().length!=11){
        alert("请将手机号输入完整")
    }else if(PhoneNumber.test($(".J-mlogin-ipt").eq(0).val())==false){
        alert("手机号格式不正确,请重新输入")
    }else if($(".J-mlogin-ipt").eq(1).val()!=code){
        alert("验证码不正确,请重新输入")
    }else if($(".J-mlogin-ipt").eq(0).val().length==11&&PhoneNumber.test($(".J-mlogin-ipt").eq(0).val())==true&&$(".J-mlogin-ipt").eq(1).val()==code){
        var photonumber=$(".J-mlogin-ipt").eq(0).val()
        var obj={photonumber}

        var card=[]
        if(Storage.getItem("PhotoNum")){
            var ckNumber=JSON.parse(Storage.getItem("PhotoNum"))
            ckNumber.push(obj)
            Storage.setItem("PhotoNum",JSON.stringify(ckNumber))
            alert("登录成功")
            window.open("../html/今日推荐-首页.html","_self")
        }else{
            Storage.setItem("PhotoNum",JSON.stringify(obj))
            alert("登录成功")
            window.open("../html/今日推荐-首页.html","_self")
        }
    }
})