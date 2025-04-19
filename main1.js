let start=false;
let s=0;
let interval;
function pl(){
    if(!start){
        start=true;
        interval=setInterval(() => {
            console.log("run")
            s++;
            let min=Math.floor(s/60);
            
            let sec=s%60;
            if(min/60>=1){ 
                let h=Math.floor(min/60)
                min=min%60;
                if(sec<10 && min<10)document.querySelector(".clock").innerText=`${h}:0${min}:0${sec}`;
                else if(sec<10 && min>=10)document.querySelector(".clock").innerText=`${h}:${min}:0${sec}`;
                else if(sec>=10 && min<10)document.querySelector(".clock").innerText=`${h}:0${min}:${sec}`;
                else document.querySelector(".clock").innerText=`${h}:${min}:${sec}`;
            }
            else{
                if(sec<10 && min<10)document.querySelector(".clock").innerText=`0${min}:0${sec}`;
                else if(sec<10 && min>=10)document.querySelector(".clock").innerText=`${min}:0${sec}`;
                else if(sec>=10 && min<10)document.querySelector(".clock").innerText=`0${min}:${sec}`;
                else document.querySelector(".clock").innerText=`${min}:${sec}`;
            } 
        }, 1000);
        document.querySelector("#pause").disabled=false; 
        document.querySelector("#play").innerHTML='<i class="fa-solid fa-forward"></i>';
        // console.log("hello")
    }
    
}
function pa(){
    // console.log("pause");
    start=false;
    clearInterval(interval);
    let present=document.querySelector(".clock").innerText;
    document.querySelector(".clock").innerText=present;
    document.querySelector("#pause").disabled=true;
}
function r(){
    // console.log("reset");
    start=false;
    clearInterval(interval);
    s=0;
    document.querySelector(".clock").innerText="0.00";
    document.querySelector("#play").innerHTML='<i class="fa-solid fa-play"></i>';
    document.querySelector("#pause").disabled=true;
}





