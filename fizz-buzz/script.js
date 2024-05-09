let wrapperElement = document.querySelector(".wrapper")

for (let i = 1; i < 100; i++) {

    let newElement = document.createElement("div")
    newElement.innerText = i
    newElement.classList.add("box")

    if (i % 15 == 0) {
        newElement.innerText = "FIZZ BUZZ!"
        newElement.classList.add("box", "fizz-buzz")
        console.log("FIZZ BUZZ!")
    } else {
        if (i % 3 == 0) {
            newElement.innerText = "FIZZ"
            newElement.classList.add("box", "fizz")
            console.log("FIZZ")
        } else {
            if (i % 5 == 0) {
                newElement.innerText = "BUZZ"
                newElement.classList.add("box", "buzz")
                console.log("BUZZ")
            } else {
                newElement.innerText = i
                newElement.classList.add("box")
                console.log(i)
            }
        }
    }

    wrapperElement.append(newElement)

}