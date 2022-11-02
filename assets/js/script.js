/*
let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
    chips: 100,
    name: "Bill"
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ", " + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {

    let fCard = getRandomCard()
    let sCard = getRandomCard()
    cards = [fCard, sCard]
    sum = fCard + sCard
    isAlive = true
    renderGame()
    
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "New card?"
    } else if (sum === 21) {
        message = "BlackJack!"
        blackJack = true
    } else {
        message = "Bust"
        isAlive = false
    }
    messageEl.textContent = "Dealer: " + message

}

function newCard() {

    if (isAlive === true && blackJack === false) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }

}
*/

let dayOfMonth = 13
let weekday = "Friday"


if (weekday === "Friday" && dayOfMonth === 13) {
    console.log("spooky")
}
