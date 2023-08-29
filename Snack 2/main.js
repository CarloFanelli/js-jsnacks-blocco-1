


/* Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/* Strumenti:
    - prompt x2
    - due collegamenti al DOC
    - if/else per vedere la parola più lunga
    - stampare in pagina le due
 */

// prompt 1
const primaParola = prompt('inserisci la prima parola');

// prompt 2
const secondaParola = prompt('inserisci la seconda parola');

// collego al DOC
const parolaCortaDOC = document.getElementById('parolaCorta');
const parolaLungaDOC = document.getElementById('parolaLunga');


if (primaParola.length > secondaParola.length) {

    parolaCortaDOC.append(secondaParola);
    parolaLungaDOC.append(primaParola);
    
} else if (primaParola.length < secondaParola.length) {

    parolaLungaDOC.append(secondaParola);
    parolaCortaDOC.append(primaParola);
    
} else{

    parolaCortaDOC.append(secondaParola);
    parolaLungaDOC.append(primaParola)
    parolaLungaDOC.insertAdjacentHTML('afterend','sono della stessa lunghezza')
    
}