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
    
    risultatoDOC.innerHTML = `sono lo stesso numero '${primoNumero}'g`;

}

// con while

let i = 0;

const numeriUtente = [];

while (i < 2){

    const numeroUtente = Number(prompt('inserisci il numero'));
    numeriUtente.push(numeroUtente);
    const numeroConfronto = numeriUtente[i - 1];

    console.log(numeroConfronto);

    if (numeriUtente[i] > numeroConfronto) {
        
        console.log(`il numero ${numeriUtente[i]} è maggiore di ${numeroConfronto}`);

    } else{

        console.log(`il numero ${numeroConfronto} è maggiore di ${numeriUtente[ i ]}`);

    }

    i++;
}
