import React from 'react';
import Column from './Column.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1turn: true,
      winner: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="board">
          {this.props.columns.map((column, i)=> {
            return (
              // <Column
              //   key={i}
              //   index={i}
              //   handleClick={this.handleClick.bind(this)}
              //   p1turn={this.state.p1turn}
              //   winner={this.state.winner}
              // />
              <Column
                key={i}
                index={i}
                slots={column}
                columnClick={this.props.columnClick}
                p1turn={this.state.p1turn}
                winner={this.state.winner}
              />
            );
          })}
        </div>
      </div>
    );
  }
  // handleClick(i) {
  //   //when a column is clicked we need to check if the column is full, if not, drop a piece. (add to top of stack)
  //   var {board, p1turn} = this.state;
  //   if (board[[i, j]]) {
  //     return
  //   }
  //   board[[i, j]] = p1turn ? c[0] : c[1];
  //   p1turn = !p1turn;
  //   this.setState({board, p1turn})
  //   if (this.checkWinner(i, j)) {
  //     this.setState({winner: true})
  //   }
  // }
  //

}


////////// helpers ///////////



  export default Board;
