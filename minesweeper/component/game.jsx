import React from 'react';
import * as Minesweeper from '../frontend/minesweeper.js';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(10,20)
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
    const board = this.state.board;
    if (board.won()) {
      return <h1>You Won!</h1> 
    } else if (board.lost()) {
      return <h1>You Lost!</h1>
    } else {
      return <Board board={this.state.board} updateGame={this.updateGame}/>
    }
  }
}

export default Game;