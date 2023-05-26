//I principali tipi di datatype sono:

/*Number = E' un dato di tipo numerico, può essere qualsiasi numero
compreso tra -(253-1) e +(253-1). Può essere intero o decimale.

String = E' una sequenza alfanumerica di caratteri compresi tra ", ' oppure ``

Boolean = Il boleano è un dato logico, può essere solo vero o falso

Undefined = Rappresenta un valore che non esiste ancora, Rappresenta
una variabile a cui non ho dato ancora un valore. Valore di default che viene dato
a una variabile di cui non specifico nulla.

Null = Rappresenta un valore vuoto, infatti la variabile non contiene nulla.

BigInt=?
Symbol=?

*/

let x=12

let secondo=20

let somma=x + secondo

console.log (somma);

somma=32

 let name=`Andrea`;

console.log (somma, x, name)

let sottrazione=4-x

console.log ("la sottrazione vale", sottrazione);

let persona={
    nome: `Andrea`,
    cognome:`Manna`,
    hobby:`sport`
}

console.log (persona);

let name1=`john`
let name2=`John`

console.log (name1.toLowerCase === name2.toLowerCase)
