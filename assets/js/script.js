let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let sumEl = document.getElementById('sum-el')

let num1 = 7
let num2 = 8

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2
 
function addition() {
    let result = num1 + num2
    sumEl.textContent = "answer = " + result
}

function minus() {
    let result = num1 - num2
    sumEl.textContent = "answer = " + result
}

function times() {
    let result = num1 * num2
    sumEl.textContent = "answer = " + result
}

function division() {
    let result = num1 / num2
    sumEl.textContent = "answer = " + result
}

addition()
minus()
times()
division()