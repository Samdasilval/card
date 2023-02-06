import { Deck } from "./Deck.js";


const options = {
	values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
}

const desk = new Deck(options);

desk.createFullDeck();

desk.shuffle();

desk.displayCards();


