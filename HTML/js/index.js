// JavaScript Document
function hcChange() {
    $('.footer').css({
        marginLeft: 0 - $('.footer').width() / 2
    });
    //点击订单 订单页面出现 膜态层出现
    $('.footer span').click(function() {
        $('.goods-box').addClass('goods-box-hover');
        $('body').addClass('overh');
        $('.mask').show();
    });
    //点击膜态层 订单页面消失  膜态层消失
    $('.mask').click(function() {
        $('.goods-box').removeClass('goods-box-hover');
        $('body').removeClass('overh');
        $('.mask').hide();
    });

}

function addFly(event) {
    var offset = $('#amount').offset(),
        flyer = $('<img class="u-flyer" src="images/cfpic_24.png"/>');
    flyer.fly({
        start: {
            left: event.pageX - 40,
            top: event.pageY - 20,
            width: 30,
            height: 30
        },
        end: {
            left: offset.left + 38,
            top: offset.top + 10,
            width: 24,
            height: 24
        }

    });
}




//点击商品出现商品特效
$(function () {
    $(".add1").on("click",
        function () {
            addFly(event);
        });

    //选择取货方式 添加样式  他的兄弟删除样式
    $('.sex-btn a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        //$('.sex-btn a').fadeOut();
        // timedMsg();
    });


    //点击同意   膜态层淡出  右上角淡入
    $('.sex-btn span').click(function(){
        $('.sel-mask,.sex-btn').fadeOut();
        $('.select-btn').fadeIn();
    });
    //点击右上角   登陆框淡出  膜态层淡入
    $('.select-btn').click(function(){
        $('.select-btn').fadeOut();
        $('.sel-mask,.sex-btn').fadeIn();
    });
    //淡出时间
    function timedMsg() {
        var t=setTimeout("$('.sel-mask,.sex-btn a').fadeOut()",300)
    }
});

//计算价格



//插入咖啡


