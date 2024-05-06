# Condizioni

![js logica](/img/webdev101-js-decisions.png)

```js
    const password = "123";
    const passwordInserita = prompt("Inserisci la password");
    alert("ACCESS GRANTED: " + (passwordInserita == password))
```

```js
const password = "123"

let passwordInserita = prompt("inserisci la password")

if(passwordInserita == password){
    console.log("ACCESS GRANTED")
}else{
    console.log("ACCESS DENIED")
}
```

## ESERCIZI

fa caldo, fa freddo: data una temperatura stampare se fa caldo o fa freddo

numero uguale, maggiore o minore?

## Introduzione alle funzioni

Una funzione è la definizione di un blocco di istruzioni, che viene invocata o "chiamata" attraverso il suo nome e assegnando dei valori ai suoi parametri, se li possiede. I parametri di ingresso (le variabili dentro le parentesi tonde) sono assegnati dalla chiamata della funzione, e questa può restituire un valore con return


```js
// DEFINIZIONE FUNZIONE, a e b sono i suoi parametri
function somma(a,b){
    let aInt = parseInt(a);
    let bInt = parseInt(b);
    return aInt + bInt;
}

let risultato = somma(5,3); // CHIAMATA FUNZIONE
// la variabile risultato conterrà 8
```

## Introduzione agli oggetti

proprietà e metodi

## Manipolazione DOM
Il browser genera il `DOM` (Document Object Model) a partire da HTML, CSS.
Scrivendo `console.dir(document)` in console vediamo come viene rappresentato il documento HTML sul browser, ma ogni suo elemento HTML ha una sua rappresentazione.

Come cambiare testo di un Elemento DOM, lo posso selezionare scrivendo una query CSS, un selettore, questa fuzione restituirà il primo elemento che rispetta questo selettore.

```
let elementoHTML = document.querySelector(".classe");
elementoHTML.innerText = "Hello HTML";
```


scope variabile


