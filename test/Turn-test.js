const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn, card;
  beforeEach(function(){
    card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have 2 arguments', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.card).to.deep.equal({id: 1, question: "What is Robbie's favorite animal?", answers: ['sea otter', 'pug', 'capybara'], correctAnswer: "sea otter"});
  });

  it('should be able to return the guess', function(){
    expect(turn.returnGuess()).to.equal('sea otter');
  });

  it('should be able to return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate if the guess is correct or incorrect', function() {
    const correctTurn = new Turn('sea otter', card);
    const incorrectTurn = new Turn('pug', card);
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it('should let the user know if their guess was correct or incorrect', function(){
    const correctTurn = new Turn('sea otter', card);
    const incorrectTurn = new Turn('pug', card);
    expect(correctTurn.giveFeedback()).to.equal('correct!');
    expect(incorrectTurn.giveFeedback()).to.equal('incorrect!');
  });
});
