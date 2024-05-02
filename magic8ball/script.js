/*
https://it.wikipedia.org/wiki/Magic_8_ball
*/

let risposte = [
    "Per quanto posso vedere, sì",
    "È certo",
    "È decisamente così",
    "Molto probabilmente",
    "Le prospettive sono buone",
    "I segni indicano di sì",
    "Senza alcun dubbio",
    "Sì",
    "Sì, senza dubbio",
    "Ci puoi contare",
    "È difficile rispondere, prova di nuovo",
    "Rifai la domanda più tardi",
    "Meglio non risponderti adesso",
    "Non posso predirlo ora",
    "Concentrati e rifai la domanda",
    "Non ci contare",
    "La mia risposta è no",
    "Le mie fonti dicono di no",
    "Le prospettive non sono buone",
    "Molto incerto"];

let answers = [
    "As I see it, yes",
    "It is certain",
    "It is decidedly so",
    "Most likely",
    "Outlook good",
    "Signs point to yes",
    "Without a doubt",
    "Yes",
    "Yes, definitely",
    "You may rely on it",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];

/*
    Genera un numero casuale tra min e max, compresi
    from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
