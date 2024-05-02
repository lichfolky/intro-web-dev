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

fa caldo, fa freddo

numero uguale, maggiore o minore?