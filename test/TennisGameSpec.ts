/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function() {
    
  var game : TennisGame;
  var somePlayers;

  beforeEach(function() {
    //TODO: Create some players
    game = new TennisGameImpl(somePlayers);
  });

  it('when it has just started, the score should be "love-all"', function() {
    expect(game.getScore()).toBe('love-all');
  });

  it('when player 1 wins a point the score should be "15-love"', function() {
    game.wonPoint(somePlayers[0]);
    expect(game.getScore()).toBe('15-love');
  });

  it('when a the scores a level, and at least 3 points have been scored by each player, then the score should be "deuce"', function() {
    expect(game.getScore()).toBe('love-all');
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('deuce');
  });

  
});

