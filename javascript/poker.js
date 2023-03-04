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

const communityDeckElement = document.querySelector(".community-deck")
const communityCardsElement = document.querySelector(".community-cards")
const playerDeckElement = document.querySelector(".player")
const dealerDeckElement = document.querySelector(".dealer")

let communityDeck
let communityCards
let playerDeck
let dealerDeck

startGame()

function startGame() {
    communityDeck = new Deck()
    communityDeck.shuffle()

    let tempPlayerDeck = []
    let tempDealerDeck = []
    let tempCommunityCards = []

    for (let i = 0; i < 2; i++) {
        tempPlayerDeck.push(communityDeck.pop())
        tempDealerDeck.push(communityDeck.pop())
    }

    playerDeck = new Deck(tempPlayerDeck)
    dealerDeck = new Deck(tempDealerDeck)

    for (let i = 0; i < 5; i++) {
        tempCommunityCards.push(communityDeck.pop())
    }

    communityCards = new Deck(tempCommunityCards)

    playRound()
}

function playRound() {
    for (let i = 0; i < playerDeck.numOfCards; i++) {
        playerDeckElement.appendChild(playerDeck.cards[i].getHTML())
    }
}