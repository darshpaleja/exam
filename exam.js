let form = document.getElementById('form')

let submit = document.getElementById('submitBtn')

let ul = document.getElementById('ul')

form.addEventListener('submit', createListItem)

function createListItem(e) {

    e.preventDefault()
    let inputBox = document.getElementById('input').value
    
    ul.className = 'el'

    let li = document.createElement('li')
    li.id = 'list'
    li.innerText = inputBox

    ul.appendChild(li)
}



