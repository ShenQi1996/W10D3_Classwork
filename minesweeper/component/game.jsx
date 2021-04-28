import React from 'react';
import * as Minesweeper from '../frontend/minesweeper.js';
import Board from './board';
console.log("Webpack is working");
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(10,8)
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return <Board board={this.state.board} updateGame={this.updateGame}/>
  }
}

export default Game;