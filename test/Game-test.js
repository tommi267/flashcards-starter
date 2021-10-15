const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe ('Game', function () {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function(){
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start with a currentRound of 0', function() {
    expect(game.currentRound).to.equal(0);
  });
})
