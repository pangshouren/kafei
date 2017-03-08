//加入购物车函数
$(function(){ 
  $("#cof-01").on("click",
    function() {   $('.coflist-01').show();
     $('.coflist-01 input').val('1');
    setTotal(); 
    });
 $("#cof-02").on("click",
    function() {   $('.coflist-02').show();
     $('.coflist-02 input').val('1');
    setTotal(); 
    })
  $("#cof-03").on("click",
    function() {   $('.coflist-03').show();
     $('.coflist-03 input').val('1');
    setTotal(); 
    })
  $("#cof-04").on("click",
    function() {   $('.coflist-04').show();
     $('.coflist-04 input').val('1');
    setTotal(); 
    })
 $("#cof-05").on("click",
    function() {   $('.coflist-05').show();
     $('.coflist-05 input').val('1');
    setTotal(); 
    })
  $("#cof-06").on("click",
    function() {   $('.coflist-06').show();
     $('.coflist-06 input').val('1');
    setTotal(); 
    })
  $("#cof-017").on("click",
    function() {   $('.coflist-07').show();
     $('.coflist-07 input').val('1');
    setTotal(); 
    })
 $("#cof-08").on("click",
    function() {   $('.coflist-08').show();
     $('.coflist-08 input').val('1');
    setTotal(); 
    })
  $("#cof-09").on("click",
    function() {   $('.coflist-09').show();
     $('.coflist-09 input').val('1');
    setTotal(); 
    })
$("#cof-10").on("click",
    function() {   $('.coflist-10').show();
     $('.coflist-10 input').val('1');
    setTotal(); 
    })
 $("#cof-11").on("click",
    function() {   $('.coflist-11').show();
     $('.coflist-11 input').val('1');
    setTotal(); 
    })
  $("#cof-12").on("click",
    function() {   $('.coflist-12').show();
     $('.coflist-12 input').val('1');
    setTotal(); 
    });


  $("#clearbtn").on("click",//清除函数
    function() {   $('.good-height dl').hide();
     $('.good-height input').val('0');
    setTotal(); 
    })

  $(".add").click(function(){ //加杯函数
    var t=$(this).parent().find('input[class*=text_box]'); 
    t.val(parseInt(t.val())+1) 
    setTotal(); 
  }) 
  $(".min").click(function(){ //减杯函数
    var t=$(this).parent().find('input[class*=text_box]'); 
    t.val(parseInt(t.val())-1) 
    if(parseInt(t.val())<0){ 
      t.val(0); 
    } 
    setTotal(); 
  }) 

  function setTotal(){ //总价函数
    var s=0; 
    $("#tab dl").each(function(){ 
      s+=parseInt($(this).find('input[class*=text_box]').val())*parseFloat($(this).find('em[class*=price]').text()); 
    }); 
    $("#total").html(s.toFixed(2));    
  } 
  setTotal();
});
    

