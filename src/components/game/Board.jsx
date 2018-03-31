import React from 'react';
import Column from './Column.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: Array(7).fill(Array(6).fill(null)),
      p1turn: true,
      winner: false,
    };
  }
  render() {
    var status = this.getStatus();
    return (
      <div className="container">
        <div className="board">
          {this.state.columns.map((column, i)=> {
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
                handleClick={this.handleClick.bind(this)}
                p1turn={this.state.p1turn}
                winner={this.state.winner}
              />
            );
          })}
        </div>
      </div>
    );
  }
  handleClick(i) {
    //when a column is clicked we need to check if the column is full, if not, drop a piece. (add to top of stack)
    var {board, p1turn} = this.state;
    if (board[[i, j]]) {
      return
    }
    board[[i, j]] = p1turn ? c[0] : c[1];
    p1turn = !p1turn;
    this.setState({board, p1turn})
    if (this.checkWinner(i, j)) {
      this.setState({winner: true})
    }
  }
  getStatus() {
    if (!this.state.winner && Object.keys(this.state.board).length < 42) {
      return (this.state.p1turn ? c[0] : c[1]) + '\'s turn';
    }
    else {
      if (this.state.winner) {
        var winner = (this.state.p1turn ? c[1] : c[0]) + ' wins!'
      }
      return 'Game over: ' + (winner ? winner : 'It\'s a draw!')
    }
  }

}

export default Board;



