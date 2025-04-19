setInterval(()=>{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let t=(h>12)?"PM":"AM";
    console.log(h);
    document.querySelector("#hour").innerText=(h%12)<10?`0${h%12}`:h;
    document.querySelector("#min").innerText=m<10?`0${m}`:m;
    document.querySelector("#sec").innerText=s<10?`0${s}`:s;
    document.querySelector("#M").innerText=t;
},1000);