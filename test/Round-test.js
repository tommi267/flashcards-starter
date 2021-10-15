const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function(){
  let card1, card2, card3, deck, turn, round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1,card2,card3]);
    turn = new Turn('sea otter', card1);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an istance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should istantiate with a deck of cards', function() {
    expect(round.deck).to.equal(deck.cards);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start with a new Turn and go to the next card when a guess is made', function() {
    round.takeTurn('sea otter');
    expect(turn).to.be.an.instanceof(Turn);
    expect(round.turns).to.equal(1);
    expect(round.deck[0]).to.equal(card2);
  });

  it('should save incorrect guesses', function(){
    round.takeTurn('pug');
    expect(round.incorrect).to.deep.equal([card1.id]);
  });

  it('should tell the user if guess is correct or incorrect', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should be able to calculate the percentage of correct answers', function () {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50)
  });

  it('should let the user know when the round is over', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
  });
});
