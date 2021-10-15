const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
   let cards = prototypeQuestions.map(cardInfo => {
     return new Card(
       cardInfo.id,
       cardInfo.question,
       cardInfo.answers,
       cardInfo.correctAnswer);
   });
   const deck = new Deck(cards);
   this.currentRound = new Round(deck);
   this.printMessage(deck, this.currentRound);
   this.printQuestion(this.currentRound);
 }
}

module.exports = Game;
