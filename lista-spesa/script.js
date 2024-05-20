/* 
<div>
<input type="checkbox" id="item-1" name="item" />
<label for="item-1">Item 1</label>
</div>
<div>
<input type="checkbox" id="item-2" name="item" />
<label for="item-2">Item 2</label>
</div> */

let listaSpesa = [
    { nome: "insalata", preso: true },
    { nome: "pasta", preso: true },
    { nome: "patatine fritte", preso: true },
    { nome: "gelato", preso: true }]

let fsElement = document.querySelector("fieldset")
let contatore = 0

for (const item of listaSpesa) {
    createField(item)
}

function createField(item) {
    let field = document.createElement("div")

    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = "item" + contatore
    input.name = "item" + contatore

    let label = document.createElement("label")
    label.htmlFor = "item" + contatore
    label.innerText = item.nome
    contatore++

    field.append(input)
    field.append(label)
    fsElement.append(field)

}

function addItem() {
    let myItem = { nome: "Item " + contatore, preso: false }
    listaSpesa.push(myItem)
    console.log("myItem", myItem)
    createField(myItem)
}

let addElement = document.querySelector(".add")
addElement.addEventListener("click", addItem)