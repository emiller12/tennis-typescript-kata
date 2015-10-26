/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {

  private players;

  constructor (
      thePlayers
  ) {
    this.players = thePlayers;
  }

  wonPoint(player) {

  }

  getScore(): string {
    return "I don't know?";
  }
}
