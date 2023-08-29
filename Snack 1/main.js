



/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* Strumenti:
    - prompt x2
    - if/else
    - stampa in pagina
*/

// prompt 1
const primoNumero = Number(prompt('inserisci il primo numero ->'));

// prompt 2
const secondoNumero = Number(prompt('inserisci il secondo numero ->'));

// console.log(primoNumero,secondoNumero); -- debug

const risultatoDOC = document.getElementById('risultato');

if (primoNumero > secondoNumero) {

    risultatoDOC.innerHTML = primoNumero;

} else if (secondoNumero > primoNumero) {

    risultatoDOC.innerHTML = secondoNumero;
    
} else{
    
    risultatoDOC.innerHTML = `sono lo stesso numero '${primoNumero}'`;

}