import Card from "./card.js"

const SUITS = ["♠", "♥", "♣", "♦"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numOfCards() {
        return this.cards.length
    }
    
    shuffle() {
        for (let i = this.numOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}