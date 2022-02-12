
function convert(){
    var d='';
    var area=0;
    var perimeter=0;
    var t1=document.getElementById("input1").value;
    var t2=document.getElementById("input2").value;
    area=t1*t2;
    perimeter=(2*t1)+(2*t2);
    d+='<div> Area is '+area+' sq mtr</div>';
    d+='<div> Perimeter is '+perimeter+' mtr</div>';
    document.getElementById("result").innerHTML=d;
}