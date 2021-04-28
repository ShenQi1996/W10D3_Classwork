import React from 'react';
import * as Minesweeper from '../frontend/minesweeper.js';
import Board from './board';
import Tile from "./tile"
console.log("Webpack is working");
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(10,17)
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if(flagged){
      tile.toggleFlag();
    }else{
      tile.explore();
    }
    this.setState({
      board: this.state.board
    })
  }

  render() {
    return <Board board={this.state.board} updateGame={this.updateGame}/>
  }
}

export default Game;