$(document).ready(function(){
    
    
    
    function euler1(n){
        var total=0;
        for (i=1;i<n;i++) {
            if (i%3 == 0 || i%5 ==0){
                total += i;
            };
        };
        
        
         document.getElementById("answer1").innerHTML = total;
    };
    
    function euler2(n){
        var fib = [1,2],i = 1;
        while(fib[i]<n){
          	var next = fib[i] + fib [i-1]
            if (next <n){
            	fib.push(next);
            }
                i++;
            };
        var total=0;
        
        for(var i in fib) {
            if(fib[i]%2==0){
                total+=fib[i];
            };
            
        }
     
        document.getElementById("answer2").innerHTML = total;
    };
    
    function euler3(n){
         var x = function (input) {
                    var factors = [];
                    var numStorage = input;
                    x = 2;
                    while (numStorage != 1) {
                        var result = numStorage % x;
                        if (result === 0) {
                            factors.push(x);
                            numStorage = numStorage / x;
                            x = 2;
                        }
                        else {
                            x = x + 1;
                        }
                    }
                    return factors.pop();
                };
                document.getElementById("answer3").innerHTML = x(n);
    }
   
   function sketch(w,h){
    
        var xwidth = (document.getElementById('pad').offsetWidth/(w))-2;

        $("#pad").empty();
        
        for(y=0;y<h;y++){
           for(i=0;i<w;i++){
               $("#pad").append("<div class='px'></div>");
           }
        }
        $(".px").width(xwidth);
        $(".px").height(xwidth);

   }
   
 function hoverfill(color){
     $(".px").hover(function () {
        $(this).css("background-color", color);
    },function () {
        $(this).css("background-color", color);
    });
 }
 
  function hoverfill_ran(){
      var ran_color = '#'+Math.floor(Math.random()*16777215).toString(16);
      
     $(".px").hover(function () {
         ran_color = '#'+Math.floor(Math.random()*16777215).toString(16)
        $(this).css("background-color", ran_color);
    },function () {
    });
 }
 
   
   function trail(){
      
      
     $(".px").hover(function () {
        
       $(this).animate({
        backgroundColor: 'black'
    },5);
    },function () {
        $(this).animate({
        backgroundColor: 'white'
    },1000)
    });
 }
    
    //Run Functions on Click
    $("#btn1").click(function(){
        euler1($('#number1').val());
    });
    
    $("#btn2").click(function(){
        euler2($('#number2').val());
    });
    
    $("#btn3").click(function(){
        euler3($('#number3').val());
    });
    
    //Toggle Code Divs
    $("#code1").click(function(){
        $(".prob1").toggle();
    });    

    $("#code2").click(function(){
        $(".prob2").toggle();
    });
    
    $("#code3").click(function(){
        $(".prob3").toggle();
    });
    
    $("#reset").click(function(){
        $(".px").css("background-color", "#fff");
    });
    
    $(".sub").click(function(){
        var width = $("#width").val();
        var height = $("#height").val();
        sketch(width,height);
        hoverfill("#f00");
        
    });
    
    $(".ran").click(function(){
        var width = $("#width").val();
        var height = $("#height").val();
        sketch(width,height);
        hoverfill_ran();
    });
    

    
    
        $(".trail").click(function(){
        var width = $("#width").val();
        var height = $("#height").val();
        sketch(width,height);
        trail();
    });
    
    
    
    
        $(".basic").spectrum({
        color: "#f00",
        
        change: function(color) {
            hoverfill(color.toHexString());
  
        }
    });

});

    
        


