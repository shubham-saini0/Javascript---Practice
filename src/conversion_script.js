
document.getElementById("htom").onclick()=function(){
    var temp=document.getElementById("htos");
    temp.checked=false;
}

document.getElementById("htos").onclick()=function(){
    var temp=document.getElementById("htom");
    temp.checked=false;
}


function convert(){
    var res=0;
    var t=document.getElementById("input-text").value;
    if(document.getElementById("htom").checked){
        res=t*60;
        document.getElementById("result").innerHTML=t+" hours = "+res+"minutes";
    }
    else{
        res=t*60*60;
        document.getElementById("result").innerHTML=t+" hours = "+res+"seconds";
    }
}