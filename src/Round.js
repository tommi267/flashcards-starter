const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    this.startTurn(guess);
    this.incrementTurn();
    this.pushIncorrectGuess();
    this.flipCard();
    this.returnCurrentCard();
    return this.turn.giveFeedback();
  }

  startTurn(guess) {
    this.turn = new Turn(guess, this.deck[0]);
  }

  incrementTurn() {
    this.turns++;
  }

  pushIncorrectGuess() {
    if (!this.turn.evaluateGuess()) {
      this.incorrect.push(this.deck[0].id);
    }
  }

  flipCard() {
    this.currentCard = this.deck.shift();
  }

  calculatePercentCorrect() {
    if (this.incorrect.length > 0) {
      return (100 * (1 - this.incorrect.length / this.turns).toFixed(4));
    } else {
      return '100!'
    }
  }

  endRound() {
    const messageToUser = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(messageToUser);
    return messageToUser;
  }
}

module.exports = Round;
