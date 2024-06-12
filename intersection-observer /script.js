
console.log(window.scrollY);


let options = {
    threshold: 1.0,
};

let target = document.querySelector("#explode");
let bomb = document.querySelector("#bomb");

let observer = new IntersectionObserver(explode, options);
observer.observe(target);


function explode(e) {
    if (e[0].intersectionRatio >= 1) {
        bomb.innerText = "BOOMMMM!!!";
    } else {
        bomb.innerText = "💣";
    }

}

