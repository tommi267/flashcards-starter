const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have 2 arguments', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ['sea otter', 'pug', 'capybara'], "sea otter");
    const turn = new Turn('pug', card);
    expect(turn.guess).to.be.a('string');
    expect(turn.card).to.deep.equal({id: 1, question: "What is Robbie's favorite animal?", answers: ['sea otter', 'pug', 'capybara'], correctAnswer: "sea otter"});
  });

  it('should be able to return the guess', function(){
    const card = new Card(1, "What is Robbie's favorite animal?", ['sea otter', 'pug', 'capybara'], "sea otter");
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return the card', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ['sea otter', 'pug', 'capybara'], "sea otter");
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate if the guess is correct or incorrect', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ['sea otter', 'pug', 'capybara'], "sea otter");
    const correctTurn = new Turn('sea otter', card);
    const incorrectTurn = new Turn('pug', card);
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it('should let the user know if their guess was correct or incorrect', function(){
    const card = new Card(1, "What is Robbie's favorite animal?", ['sea otter', 'pug', 'capybara'], "sea otter");
    const correctTurn = new Turn('sea otter', card);
    const incorrectTurn = new Turn('pug', card);
    expect(correctTurn.giveFeedback()).to.equal('correct!');
    expect(incorrectTurn.giveFeedback()).to.equal('incorrect!');
  });
});
