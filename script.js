var heure =1;
var minute =0;
var seconde =5;

document.getElementById('heure').innerHTML=heure;
document.getElementById('seconde').innerHTML=seconde;
document.getElementById('minute').innerHTML=minute;

function CaR(){
    document.getElementById('seconde').innerHTML=seconde;
    seconde--;
    if (seconde < 0){
        minute--;
        document.getElementById('minute').innerHTML=minute;
        seconde = 59;
    }
    else if (minute < 0) {
        heure--;
        minute = 59;
        document.getElementById('heure').innerHTML=heure;
        console.log(minute);
    }


    setTimeout(CaR,1000);


}
setTimeout(CaR,1000);