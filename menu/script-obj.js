let menuItems = [
    'PARKER HOUSE ROLL',
    'GREEN GODDESS SALAD',
    'THAI CAESAR SALAD',
    'HONEY WALNUT PRAWNS',
    'MAPO TOFU STUFFED CABBAGE',
    'OCTOPUS BURRATA',
    'BROCCOLI BEEF RAVIOLI',
    'ORANGE CURRY BUCATINO',
    'COCONUT CURRY CHOCHOYOTES',
    'STICKY RICE STUFFED GAME HEN',
    'MASA FRIED DORADE (Head On / Tail On)',
    'PANANG LAMB NECK'
]

let mainElement = document.querySelector("main")
mainElement.innerHTML = ""

let direction = "left"
let numberOfSkulls = 1
for (let i = 0; i < menuItems.length; i++) {

    let menuItemName = document.createElement("div")
    menuItemName.innerText = menuItems[i]
    menuItemName.classList.add("menu-item")

    // se l'elemento è un multiplo di 4
    if (i % 4 == 0) {
        // se la variabile direction contiene
        // la stringa left
        if (direction == "left") {
            // se la variabile direction diventa right
            direction = "right"
        } else {
            direction = "left"
        }
        /*
            let teschietto = document.createElement("img")
            teschietto.src = "../img/skull1.png"
            mainElement.append(teschietto)  
        */
        let container = document.createElement("div")
        container.classList.add("container")
        if (direction == "right") {
            container.classList.add("right")
        }
        for (skulls = 0; skulls < numberOfSkulls; skulls++) {
            let teschietto = document.createElement("div")
            teschietto.innerText = '💀'
            teschietto.classList.add("teschietto")
            container.append(teschietto)
        }
        mainElement.append(container)

        numberOfSkulls++
    }

    if (direction == "right") {
        menuItemName.classList.add("right")
    }

    mainElement.append(menuItemName)
}


// Esempio di ricerca locale
let searchItem = 'OCTOPUS BURRA TA'
let found = false

for (item of menuItems) {
    if (searchItem == item) {
        // trovato
        found = true
    }
}
if (found) {
    console.log("trovato")
} else {
    console.log("non trovato")
}

/*
for (item of menuItems) {
    let menuItemName = document.createElement("div")
    menuItemName.innerText = item
    menuItemName.classList.add("menu-item","right")
    mainElement.append(menuItemName)  
}
*/

// usare gli oggetti per rappresentare l'informazione
let itemObj = [
    {
        name: "PARKER HOUSE ROLL",
        price: 8,
        ingredients: ["Miso Honey", "Furikake Dugga", "Fresno Butter"],
        vegan: true,
        glutenFree: false
    }, {
        name: "PARKER HOUSE ROLL",
        price: 8,
        ingredients: ["Miso Honey", "Furikake Dugga", "Fresno Butter"],
        vegan: false,
        glutenFree: false
    }]

    let menuItemName = document.createElement("div")
    let itemDescr = itemObj[0].name
    if(itemObj[0].vegan){
        itemDescr += " (VEG) "
    }
    itemDescr += " " + itemObj[0].price

    menuItemName.innerText = itemDescr
    menuItemName.classList.add("menu-item","right")
    mainElement.append(menuItemName)  