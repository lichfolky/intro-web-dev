const user = "dev"
const password = "123"

let userInserita = prompt("inserisci user")
let passwordInserita = prompt("inserisci la password")

if(userInserita == user && passwordInserita == password){
    console.log("Accesso autorizzato")
}else{
    console.log("Accesso negato")
}