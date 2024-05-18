let form = document.getElementById('form')

let inputBox = document.getElementById('input')
let submit = document.getElementById('submitBtn')
// let ul = document.getElementById('ul')
// let li = document.getElementById('li')

let items = []

// console.log(ul);
// console.log(li);

// form.addEventListener('submit', createListItem)

function inputClick() {
    var inputValue = inputBox.value
    // console.log(inputValue);
    return inputValue
}

function submitClick() {
    let value = inputClick()
    // console.log(value);
    items.push(value) 
    createListItem()
    // console.log(items)
}

function createListItem() {
    let ul = document.querySelector('ul')
    items.forEach((item) => {
        var li = document.createElement('li')
        ul.appendChild(li)
        li.innerText += item
    })
}




