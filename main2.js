let interval;
let running=false;
function pl(){
    let h=parseInt(document.getElementById("hr").value) || 0;
    let m=parseInt(document.getElementById("min").value) || 0;
    let s=parseInt(document.getElementById("sec").value) || 0;
    if(!running){
    // console.log(s ,h ,m)
    running=true;
    interval=setInterval(()=>{
        if(m==0 && h==0 && s==0){ 
            clearInterval(interval);
            alert("Time Over!!!");
        }else {
            if (s === 0) {
                if (m > 0) {
                    m--;
                    s = 59;
                } else if (h > 0) {
                    h--;
                    m = 59;
                    s = 59;
                }
            } else {
                s--;
            }
        }
        document.getElementById("hr").value = h < 10 ? `0${h}` : h;
        document.getElementById("min").value = m < 10 ? `0${m}` : m;
        document.getElementById("sec").value = s < 10 ? `0${s}` : s;

    },1000)
    document.querySelector("#stop").disabled=false; 
    document.querySelector("#start").innerHTML='<i class="fa-solid fa-forward"></i>';
}}

function p(){
    // console.log("pause");
    running=false;
    clearInterval(interval);
    let a=document.querySelector("#hr").innerText;
    let b=document.querySelector("#min").innerText;
    let c=document.querySelector("#sec").innerText;
    document.querySelector("#hr").innerText=a;
    document.querySelector("#min").innerText=b;
    document.querySelector("#sec").innerText=c;
    document.querySelector("#stop").disabled=true;
}

function r(){
    console.log("reset");
    start=false;
    clearInterval(interval);
    document.querySelector("#hr").value="";
    document.querySelector("#min").value="";
    document.querySelector("#sec").value="";
    document.querySelector("#start").innerHTML='<i class="fa-solid fa-play"></i>';
    document.querySelector("#stop").disabled=true;
}