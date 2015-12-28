import Parse from 'parse';

export default class Game extends Parse.Object {

  constructor() {
    super('Game');
  }
}

window.Game = Game;
