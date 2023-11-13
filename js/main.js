// Chiedere le informazioni di base all'utente
let kmdapercorrere = prompt("Inserisci i km che vuoi percorrere.")
if (isNaN(kmdapercorrere)) {
    alert("Non hai inserito un numero!");
}
let eta = prompt("Inserisci la tua età.")
if (isNaN(eta)) {
    alert("Non hai inserito un numero!");
}


// Elaborazione delle statistiche
let prezzokm = kmdapercorrere * 0.21;

if (eta < 19) {
    prezzokm = prezzokm - (prezzokm * 0.2);
}
else if (eta > 64) {
    prezzokm = prezzokm - (prezzokm * 0.4);
}

let prezzofinale = prezzokm.toFixed(2);



console.log(prezzofinale);

document.getElementById("prezzofinale").innerHTML = prezzofinale;