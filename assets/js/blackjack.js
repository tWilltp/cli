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