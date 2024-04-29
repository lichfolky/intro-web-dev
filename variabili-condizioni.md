# Tipi di dati

bit, byte rappresentazione binaria, decimale ed esadecimale

RGB (Red, green, blue)  
#5a0000 è rosso scuro   
#FFFF00 è giallo  

ASCII (American Standard Code for Information Interchange)

Tipi di dati:

- booleani 
- numeri

- char 
    https://www.asciitable.com/
    https://it.wikipedia.org/wiki/ASCII

"unix" (default) Unix line endings: \n for LF.
"windows" Windows line endings: \r\n for CRLF.

Unicode!

    ctrl + cmd + space MAC
    tasto win + '.'

    https://it.wikipedia.org/wiki/Unicode (UTF-8)

modificatori:

`U+006E` n LATIN SMALL LETTER N followed by `U+0303` `◌̃` COMBINING TILDE is defined by Unicode to be canonically equivalent to the single code point `U+00F1` `ñ` LATIN

zalgo text

- stringhe
  non è un tipo di dato primitivo

undefined e null

JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

```js
const foo = 42; // foo is a number
const result = foo + "1"; 

console.log(result); // 421
```

# Variabili

let e const
dichiarazione, inizializzazione

## Espressioni
Operatori logici AND OR NOT

Tabelle di verità

Operatori aritmetici * / + - %

Operatori di confronto < <= > >= != ==

## Espressioni e Operazioni

## Hello world

```
let messaggio = "ciao mondo";
console.log(messaggio);
```
## Benvenuto `<inserisci nome>`

```
let nome = prompt("Ciao, inserisci il tuo nome");
console.log("Ciao " + nome + "!");
```
Es: Login inserisci nome e poi password con prompt
poi alert: "puoi entrare: true"

## Invertire due variabili

```
let a = 10;
let b = 5;
let aux;

aux = a;
a = b;
b = aux;
```

Immagina di dover scambiare contenuto di due bicchieri.

## Conversione

parseInt e typeof


## ESERCIZIO A CASA
es: chiedi due numeri e stampa in console la loro somma


![js tipi dati](/img/webdev101-js-datatypes.png)

![js logica](/img/webdev101-js-decisions.png)

## Extra

https://www.asciiart.eu/text-to-ascii-art

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures info


VIM

cmd terminale

git -v

gitlab

scaffolding

css bem 
import

deploy pubblicare + siti

cdn

dominio
siti

scope

deprecata 
undefined null