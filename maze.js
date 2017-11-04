window.onload = function(){
    var s=document.getElementById("start");
    var flag = 0;
    var flag_1 = 0;
    s.onmouseover=function(e){
        flag=1;
        flag_1 = 1;
        document.getElementById("warning").className = "warn";
        document.getElementById("warning").innerHTML = null;
        e.stopPropagation();   
    }
    document.getElementById("road_1").onmouseover=function(e){
        e.stopPropagation();
        flag+=1;
    }
    document.getElementById("road_2").onmouseover=function(e){
        e.stopPropagation();
        flag+=1;
    }
    document.getElementById("road_3").onmouseover=function(e){
        e.stopPropagation();
        flag+=1;
    }
    document.getElementById("road_4").onmouseover=function(e){
        e.stopPropagation();
        flag+=1;
    }
    document.getElementById("road_5").onmouseover=function(e){
        e.stopPropagation();
        flag+=1;
    }
    document.getElementById("end").onmouseover=function(e){
        if(flag_1==1){
          document.getElementById('warning').className="warn1";
          if(flag==6){
           document.getElementById("warning").innerHTML = "You Win";
       }else{
           document.getElementById("warning").innerHTML = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!"
       }
       
   }
   
   flag_1 = 0;
   
}
var a = document.getElementById("wall_1");
a.onmouseover=function(){
    if(flag_1==1){
        a.className="wall2";
        document.getElementById('warning').className="warn1";
        document.getElementById("warning").innerHTML = "You Lose";
        
        flag=0;
        flag_1=0;
    }  
}
a.onmouseout=function(){
    a.className="wall";
}

var b = document.getElementById("wall_2");
b.onmouseover=function(){
    if(flag_1==1){
        b.className="wall2";
        document.getElementById('warning').className="warn1";
        document.getElementById("warning").innerHTML = "You Lose";
        
        flag=0;
        flag_1=0;
    }  
}
b.onmouseout=function(){
    b.className="wall";
}

var c = document.getElementById("wall_3");
c.onmouseover=function(){
    if(flag_1==1){
        c.className="wall2";
        document.getElementById('warning').className="warn1";
        document.getElementById("warning").innerHTML = "You Lose";
        
        flag=0;
        flag_1=0;
    }  
}
c.onmouseout=function(){
    c.className="wall";
}

var d = document.getElementById("wall_4");
d.onmouseover=function(){
    if(flag_1==1){
        d.className="wall2";
        document.getElementById('warning').className="warn1";
        document.getElementById("warning").innerHTML = "You Lose";
        
        flag=0;
        flag_1=0;
    }  
}
d.onmouseout=function(){
    d.className="wall";
}
var e = document.getElementById("wall_5");
e.onmouseover=function(){
    if(flag_1==1){
        e.className="wall2";
        document.getElementById('warning').className="warn1";
        document.getElementById("warning").innerHTML = "You Lose";
        
        flag=0;
        flag_1=0;
    }  
}
e.onmouseout=function(){
    e.className="wall";
}

}