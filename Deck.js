import { Card } from   "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

export class Deck {
    
    #cards = [];

    constructor(options){
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck() {
        this.values.forEach(v => {
            this.suits.forEach((s) => {
                this.#cards.push(new Card(v, s));
            })
        });
    }

    displayCards() {
        this.#cards.forEach((c) => {
            c.display();
        })
    }

    shuffle() {
        this.#cards = shuffle(this.#cards);
    }
}

