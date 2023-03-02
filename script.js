import Deck from "./deck.js";

const CARD_VALUE_MAP = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck
let computerDeck
let inRound
let stop


document.addEventListener('click', () => {
    if (stop) {
        startGame()
        return
    }
    
    if (inRound) {
        preRound()
    }
    else {
        playRound()
    }
})

startGame()

function startGame() {
    inRound = false
    stop = false
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numOfCards))
    preRound()
}

function preRound() {
    inRound = false
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    computerCardSlot
    text.innerText = ""
    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numOfCards
    playerDeckElement.innerText = playerDeck.numOfCards
}

function playRound() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    updateDeckCount()

    if (isRoundWinner(playerCard, computerCard) === 1) {
        text.innerText = "Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (isRoundWinner(playerCard, computerCard) === 2) {
        text.innerText = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {
        text.innerText = "You Lose!!"
        stop = true
    } else if (isGameOver(computerDeck)) {
        text.innerText = "You Win!!"
        stop = true
    }
}

function isRoundWinner(cardOne, cardTwo) {
    if (CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]) {
        return 1
    } else if (CARD_VALUE_MAP[cardOne.value] < CARD_VALUE_MAP[cardTwo.value]){
        return 2
    } else {
        return 0
    }
}

function isGameOver(deck) {
    return deck.numOfCards === 0
}