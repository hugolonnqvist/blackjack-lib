"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("../models/Card"));
const cards = [
    { label: "A", value: 11 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "J", value: 10 },
    { label: "Q", value: 10 },
    { label: "K", value: 10 },
];
const suits = [
    { suit: "Hearts", suitSymbol: "\u{2665}" },
    { suit: "Diamonds", suitSymbol: "\u{2666}" },
    { suit: "Spades", suitSymbol: "\u{2660}" },
    { suit: "Clubs", suitSymbol: "\u{2663}" },
];
const shuffleDeck = (deck) => {
    for (let i = 0; i < deck.length; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
};
const generateDeck = (numberOfDecks) => {
    const deck = [];
    const addOneDeck = () => {
        for (const card of cards) {
            for (const suit of suits) {
                deck.push(new Card_1.default(card.label, card.value, suit.suit, suit.suitSymbol));
            }
        }
    };
    for (let i = 0; i < numberOfDecks; i++) {
        addOneDeck();
    }
    shuffleDeck(deck);
    return deck;
};
exports.default = generateDeck;
