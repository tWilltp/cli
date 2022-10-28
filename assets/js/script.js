let countEl = document.getElementById('count-el')
let count = 0
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.innerText = count
}

function save () {
    let saved = count + " - "
    saveEl.textContent += saved
    count = 0
    countEl.innerText = 0
}

save()


