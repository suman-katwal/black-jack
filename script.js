let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player ={
    name: "Player",
    chips: 200
}


let gameStatusEl = document.getElementById("message-el")
let cardNumbersEl = document.querySelector("#cardsnumbers-el")
let totalCards = document.querySelector("#totalScore-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips
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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame() {
    playerEl.textContent = player.name + ": $" + player.chips
    cardNumbersEl.textContent = "Cards: "

    for (let i =0; i < cards.length; i++){
        cardNumbersEl.textContent += cards[i] + " "
    }

    totalCards.textContent = "Sum: " + sum

    if (sum === 21) {
        message = "You Won! its a black jack!!!"
        hasBlackJack = true
    } else if (sum < 21) {
        message = "Would you like to get a new Card??"
    } else {
        message = " Sorry you lost! Please try again later"
        isAlive = false
        playerEl.textContent = player.name + ": $" + (player.chips-10)
    }
    gameStatusEl.textContent = message
}
function newCard(){
    if(isAlive == true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}