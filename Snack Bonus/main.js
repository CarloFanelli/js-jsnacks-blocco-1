

/* Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

/* Strumenti:
    - array vuoto
    - prompt x6
    - if/else
*/

// array vuoto
const listaNumeri = [];

for (let i = 0; i < 6; i++) {

    const numeroUtente = Number(prompt('inserisci un numero ->'));

    if (numeroUtente % 2 !== 0) {

        listaNumeri.push(numeroUtente);
        console.log(listaNumeri);
        
    }
}

const listaNumeriDOC = document.getElementById('lista');

for (let index = 0; index < listaNumeri.length; index++) {

    const element = listaNumeri[index];

    const markupElement = `<li>${element}</li>`

    listaNumeriDOC.innerHTML += markupElement;
}