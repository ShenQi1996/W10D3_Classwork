import React from "react"

class Tile extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        if(e.altKey){
            this.props.updateGame(this.props.tile, true)
        }else{
            this.props.updateGame(this.props.tile, false)
        }
    }

    render() {
        const tile = this.props.tile;
        if (tile.explored) {
            if (tile.bombed) {
                return <div className="tile bombed">💣</div>
            } else {
                const count = tile.adjacentBombCount() || "";
                return <div className="tile number">{count}</div>
            }
        }else if(tile.flagged) {
                return <div  onClick={this.handleClick} className="tile flagged">⚑</div>
        }else {
            return <div className="tile unexplored" onClick={this.handleClick} ></div>
        }
    }
}

export default Tile


// if (tile.flagged) {
//     return <div className="tile flagged">⚑</div>
// }