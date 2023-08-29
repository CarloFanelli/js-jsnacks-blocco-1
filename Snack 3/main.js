

/* Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let sommaNumeriUtente = 0;

const sommaNumeriDOC = document.getElementById('sommaNumeri');

for (let i = 0; i < 10; i++) {

    const numeroAttuale = Number(prompt('inserisci il numero'));

    sommaNumeriUtente += numeroAttuale;

}

// console.log(sommaNumeriUtente); -- debug

sommaNumeriDOC.append(sommaNumeriUtente);