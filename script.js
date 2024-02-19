var time=30;
var score=0;
var hitrn=0
function increasescore(){
    score+=5;
    document.querySelector("#scoreval").textContent=score;
}

function makebubble(){
    var cluster='';

for(var i=0;i<=110;i++){
    var ran=Math.floor(Math.random()*10);
    cluster+=`<div class="bubble">${ran}</div>`

}
document.querySelector("#pbtm").innerHTML=cluster;
}


function runtimer(){
    var timeint=setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timeval").textContent=time;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML=" ";
        }
    },1000)
}

function hitchange(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednumbered=Number(details.target.textContent);
    if(clickednumbered==hitrn){
        increasescore();
        makebubble();
        hitchange();
    }

})

makebubble();
runtimer();
hitchange();
