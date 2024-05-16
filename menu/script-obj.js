let menuItems = [
    {
        name: "PARKER HOUSE ROLL",
        price: 8,
        ingredients: ["Miso Honey", "Furikake Dugga", "Fresno Butter"],
        vegan: false,
        glutenFree: false
    }, {
        name: "GREEN GODDESS SALAD",
        price: 15,
        ingredients: ["Little Gem Lettuce", "Coconut Lime Leaf Vinaigrette", "Tarragon", "Pandan Flakes"],
        vegan: true,
        glutenFree: true
    }, {
        name: "THAI CAESAR SALAD",
        price: 16,
        ingredients: ["Frisee", "Lemongrass", "Puffed Rice Crouton", "Smoked Anchovies", "Parmesan"],
        vegan: false,
        glutenFree: true
    }, {
        name: "HONEY WALNUT PRAWNS",
        price: 18,
        ingredients: ["New Caledonian Blue Prawns", "Celeriac Kewpie", "Candied Walnuts", "Horchata Panna Cotta", "Crispy Rice Salad"],
        vegan: false,
        glutenFree: true
    }, {
        name: "MAPO TOFU STUFFED CABBAGE",
        price: 16,
        ingredients: ["Silken Tofu", "Smoked Shiitakes", "Coconut Rice", "Sichuan", "Calabrian Chili Paste"],
        vegan: true,
        glutenFree: true
    }, {
        name: "OCTOPUS BURRATA",
        price: 19,
        ingredients: ["Squid Ink Fry Bread", "Octopus Al Pastor", "Celery Leaf Chermoula", "Potato Confit", "Tomatillo Mostarda"],
        vegan: false,
        glutenFree: false
    }, {
        name: "BROCCOLI BEEF RAVIOLI",
        price: 24,
        ingredients: ["Short Rib", "Dark Soy", "Brown Butter", "Broccolini", "Parmesano Reggiano"],
        vegan: false,
        glutenFree: false
    }, {
        name: "ORANGE CURRY BUCATINO",
        price: 23,
        ingredients: ["Marigold Noodle", "Persimmon Curry", "Apple Chutney", "Pepita Pistou", "Delicata Halo"],
        vegan: true,
        glutenFree: false
    }, {
        name: "COCONUT CURRY CHOCHOYOTES",
        price: 23,
        ingredients: ["Red Curry Fondue", "Blue Masa Dumplings", "Oyster", "Shimeji", "& King Trumpet Mushrooms", "Fried Dill"],
        vegan: true,
        glutenFree: true
    }, {
        name: "STICKY RICE STUFFED GAME HEN",
        price: 24,
        ingredients: ["Banana Ketchup", "Pickled Papaya", "Chicken Gizzard Dirty Rice", "Endive"],
        vegan: false,
        glutenFree: true
    }, {
        name: "MASA FRIED DORADE (Head On / Tail On)",
        price: 32,
        ingredients: ["Hachiya Gazpacho", "Pink Lady Aguachile", "Mussels Escabeche", "Green Zebra Tomatoes", "Fuyu Persimmon", "Pumpkin Spice Labne"],
        vegan: false,
        glutenFree: true
    }, {
        name: "PANANG LAMB NECK",
        price: 29,
        ingredients: ["Saffron Bao", "Persimmon Amba", "Conserva Raro", "Pomegranate Molasses", "Brusselkraut"],
        vegan: false,
        glutenFree: false
    }]


// (V-GE)
let mainElement = document.querySelector("main")
mainElement.innerHTML = ""

let direction = "left"
let numberOfSkulls = 1
for (let i = 0; i < menuItems.length; i++) {

    let menuItemName = document.createElement("div")
    menuItemName.innerText = menuItems[i].name + " " + menuItems[i].price
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
        for (skulls = 1; skulls <= numberOfSkulls; skulls++) {
            let teschietto = document.createElement("img")
            teschietto.src = "img/skull"+skulls+".png"
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
