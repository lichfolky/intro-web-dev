# Cicli

iterano per vero

flow chart

let conta = 10
while (conta >= 0) {
    //console.log(conta)
    conta--
}

let risposta = "si"
do{
    console.log("...")
    risposta = prompt("il programma è bloccato continuare? ")
}while(risposta == "si") // se questa è vera, io continuo a ciclare

while (false) {// cambia in true
    console.log("...")
    let risposta = prompt("Uscire?")
    if (risposta == "si") {
        break
    }
}

conta = 10
for (; conta >= 0;) {
    conta--
}

// stampa i numeri dispari da 1 a 100
for (let i = 1; i < 101; i = i + 2) {
    //console.log(i)
}

// stampa i numeri dispari da 1 a 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) { 
        console.log(i) 
    } else {
        console.log("PARI")
    }
}


## Esercizio: fizz buzz

- https://en.wikipedia.org/wiki/Fizz_buzz



- stampiamo una lista della spesa (tipo todolist)
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox


- stampiamo menu poltergeist

PARKER HOUSE ROLL 8
Miso Honey, Furikake Dugga, Fresno Butter
GREEN GODDESS SALAD (V-GE) 15
Little Gem Lettuce, Coconut Lime Leaf Vinaigrette, Tarragon, Pandan Flakes
THAI CAESAR SALAD (GF) 16
Frisee, Lemongrass, Puffed Rice Crouton, Smoked Anchovies, Parmesan
HONEY WALNUT PRAWNS (GF) 18
New Caledonian Blue Prawns, Celeriac Kewpie, Candied Walnuts, Horchata Panna
Cotta, Crispy Rice Salad
MAPO TOFU STUFFED CABBAGE (V-GP) 16
Silken Tofu, Smoked Shiitakes, Coconut Rice, Sichuan, Calabrian Chili Paste
OCTOPUS BURRATA 19
Squid Ink Fry Bread, Octopus Al Pastor, Celery Leaf Chermoula, Potato Confit,
Tomatillo Mostarda
BROCCOLI BEEF RAVIOLI 24
Short Rib, Dark Soy, Brown Butter, Broccolini, Parmesano Reggiano
ORANGE CURRY BUCATINO (V) 23
Marigold Noodle, Persimmon Curry, Apple Chutney, Pepita Pistou, Delicata Halo
COCONUT CURRY CHOCHOYOTES (V-GI) 23
Red Curry Fondue, Blue Masa Dumplings, Oyster, Shimeji, & King Trumpet
Mushrooms, Fried Dill
STICKY RICE STUFFED GAME HEN (GF) 24
Banana Ketchup, Pickled Papaya, Chicken Gizzard Dirty Rice, Endive
MASA FRIED DORADE (Head On / Tail On) (GI) 32
Hachiya Gazpacho, Pink Lady Aguachile, Mussels Escabeche,
Green Zebra Tomatoes, Fuyu Persimmon, Pumpkin Spice Labne
PANANG LAMB NECK 29
Saffron Bao, Persimmon Amba, Conserva Raro, Pomegranate Molasses, Brusselkraut