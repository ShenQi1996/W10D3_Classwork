import React from 'react';
import Tile from "./tile"

console.log("Webpack is working222");
class Board extends React.Component {
  constructor(props){
    super(props)

  }
  
  render () {
    return (
      <div>
        {this.props.board.grid.map((row, idx1) =>{
          return( <div key={idx1} className="row">
            {row.map((tile,idx2) =>{
              return <Tile key={[idx1, idx2]} tile={tile} updateGame = {this.props.updateGame} />
            })}
          </div>
        )})}
      </div>
    )
  }
}

export default Board;