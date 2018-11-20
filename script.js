var heure = 0;
var minute = 0;
var seconde = 30;
var temps = setTimeout(CaR, 1000);

function CaR() {
    seconde--;


    if (seconde < 0) {
        minute--;

        seconde = 59;
    }
    if (minute < 0) {
        heure--;


        minute = 59;
        console.log(minute);
    }
    if (heure < 0) {
        heure = 0;
    }
    document.getElementById('seconde').innerHTML = seconde;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('heure').innerHTML = heure;
    temps = setTimeout(CaR, 1000);

    if (heure == 0 && minute == 0 && seconde == 0) {
        clearTimeout(temps);
        alert("BOUM!!!!!");
    }

    if (seconde <= 10) {
        document.body.style.animation = "dd 2s infinite";
    }
    if (seconde == 0) {
        document.body.style.backgroundColor = "darkred";
        document.body.style.animation = "none";
    }

    var tempsTotal = (heure*3600)+(minute*60)+seconde;
    document.getElementById('mechebox').style.width = tempsTotal +"px";


}


document.getElementById('stop').addEventListener("click", function () {
    clearTimeout(temps, 5);


});

document.getElementById('play').addEventListener("click", function () {
    clearTimeout(temps);
    setTimeout(CaR, 1000);


});

function user() {
    var valeurS = document.getElementById('sUser').value;
    var valeurM = document.getElementById('mUser').value;
    var valeurH = document.getElementById('hUser').value;

    if (valeurS) {
        seconde = valeurS;
    } else {
        seconde = 0;
    }

    if (valeurM) {
        minute = valeurM;
    } else {
        minute = 0;
    }

    if (valeurH) {
        heure = valeurH;
    } else {
        heure = 0;
    }
}

document.getElementById("start").addEventListener("click", function () {
    user();
    console.log("sec" + seconde);
    console.log("min" + minute);
    console.log("hrs" + heure);
});
document.getElementById('reset').addEventListener("click", function () {
    seconde = 0;
    minute = 0;
    heure =0;

    document.getElementById('seconde').innerHTML = seconde;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('heure').innerHTML = heure;

    clearTimeout(temps);
});



