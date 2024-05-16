let immagini = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg"
]


let current = 0
let caruselElement = document.querySelector(".carusel")

let imgElement = document.createElement("img")
imgElement.classList.add ("img")
imgElement.src = immagini[current]

caruselElement.append(imgElement)

let nextElement = document.querySelector(".next")

function next() {    
    if(current < immagini.length - 1 ){
        current++
        console.log(current)
        imgElement.src = immagini[current]
    }else{
        current = 0
        imgElement.src = immagini[current]

    }
}

nextElement.addEventListener("click",next)

let prevElement = document.querySelector(".previous")
function prev() {
    if(current > 0) {
        current--
        console.log(current)
        imgElement.src = immagini[current]
    } 
}
prevElement.addEventListener("click",prev )

