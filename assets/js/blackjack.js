// entire blackjack game

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

// basic race game returning fastest time, hard coded

let player1Time = 102
let player2Time = 107

function getFastest() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time + player2Time
    }
}

function totalRaceTime() {
    return player1Time + player2Time
}

let totalTime = totalRaceTime()

console.log(totalTime)

//math.random with dice game

let randomNumber = Math.random()

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollDice())

// or operator with movie selections

let likesDocumentaries = true
let likesStartUps = false

if (likesDocumentaries === true || likesStartUps === true) {
    recomendMovie()
}

function recomendMovie() {
    console.log("movie")
}

// array navigation with course example and airBnB listing

let course = {
    title: "learn css",
    lessons: 16,
    creator: "will",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course["creator"])

let airBnBCastles = {
    stoneWalls: true,
    name: "bigCastle",
    age: 800,
    floors: [0, 1, 2, 3, 4]
}

console.log(airBnBCastles.age)
console.log(airBnBCastles.stoneWalls)

// string concatenation

let person = {
    name: "will",
    age: 22,
    country: "wales"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

// conditional statements

let age = 22

if (age < 10) {
    console.log("ride is free")
} else if (age <= 15) {
    console.log("ride is 1")
} else if (age < 22) {
    console.log("ride is 2")
} else if (age < 64) {
    console.log("ride is 3")
} else {
    console.log("ride is free")
}

console.log(age)

// push pop and shift unushift operators plus array indexing with largest countries

let largestCountries = ["Tuvalu", "india", "USA", "Indonesia", "Monaco"]

largestCountries.pop()
largestCountries.push("Pakistan")
largestCountries.shift()
largestCountries.unshift("China")

for (i = 0; i < largestCountries.length; i++) {
    console.log("- " + largestCountries[i])
}

// spooky if statement

let dayOfMonth = 13
let weekday = "Friday"


if (weekday === "Friday" && dayOfMonth === 13) {
    console.log("spooky")
}

// rock paper scissors game

let hands = ["rock", "paper", "scissor"]

function RPS() {
    let random = Math.floor(Math.random() * 3)
    return hands[random]
}

console.log(RPS())

// sorting through arrays

let fruit = [1, 2, 1, 1, 2]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruit.length; i += 1) {
        if (fruit[i] === 1) {
            appleShelf.textContent += 1
        } else if (fruit[1] === 2) {
            orangeShelf.textContent += 2
        }
    }
    
}

sortFruit()

// add event listeners, html === <div id="box">box</div>

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("open box")
})

// example of when to use const vs let (let variables can be reassigned, const variables cannot)

const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

shippingCost = 15
shippingTime = "7-14 days"

let fullPrice = basePrice - discount + shippingCost

console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// create elements in js

const li = document.createElement("li")
li.textContent = myLeads[i]
ulEl.append(li)

// template literals/strings

const recipient = "James"
const sender = "Will"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`
console.log(email)

// building chrome extension (unfinished)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const container = document.getElementById("container")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems

}

// buy button function

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    container.innerHTML += "<p>Thankyou for buying</p>"
}