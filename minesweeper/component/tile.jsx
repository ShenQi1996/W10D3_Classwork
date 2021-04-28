import React from "react"

class Tile extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            explored: this.props.tile.explored,
        }
    }
    
    handleClick(e) {
        let newTile = this.props.tile;
        newTile.explore();
        this.setState({explored: newTile.explored});
    }

    render() {
        const tile = this.props.tile;
        if (tile.explored) {
            if (tile.bombed) {
                return <div className="tile bombed">💣</div>
            } else if (tile.flagged) {
                return <div className="tile flagged">⚑</div>
            } else {
                const count = tile.adjacentBombCount();
                return <div className="tile number">{count}</div>
            }
        } else {
            return <div className="tile unexplored" onClick={this.handleClick}></div>
        }
    }
}

export default Tile