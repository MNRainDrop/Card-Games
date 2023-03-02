export default class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        if (this.suit === "♠" || this.suit === "♣") {
            return "black"
        }
        else {
            return "red"
        }
    }

    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.suit} ${this.value}`
        return cardDiv
    }
}