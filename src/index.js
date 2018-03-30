

///////////////////////////////////////////////////////////////////// < ------ Break ------ > ////////////////////////////////////////////////////////////////////


// a Board has 7 Columns
// a Column has 6 Slots
// a piece can be placed in a Column if there is a free space (Column is not full)
// when a piece is placed in the selected column, the piece goes to the bottom most free space
// once 7 pieces are placed, it is necessary to check if there is a winner. 
// if 42 pieces are placed the game ends either in a win or a draw

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const c = ['blue', 'red'];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {} ,
      // columns: Array(7).fill(null),
      p1turn: true,
      winner: false,
    };
  }
  handleClick(i, j) {
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

  checkWinner(i, j) {
    return (
      this.checkColumn(i, j) ||
      this.checkRow(i, j) ||
      this.checkUpDiag(i, j) ||
      this.checkDownDiag(i, j)
    );
  }

  checkColumn(i, j) {
  // //0-5 0-6
    var board = this.state.board;
    if (j < 3) {
      return false;
    }
    var val = board[[i, j]];
    for (var t = 1; t < 4; t++) {
      if (board[[i, j - t]] !== val) {
        return false;
      }
    }
    return true;
  }
  checkRow(i, j) {
    var board = this.state.board;
    var count = 0;
    var val = board[[i, j]];
    for (var t = 0; t < 7; t++) {
      var space = board[[t, j]];
      if (space && space === val) {
        count ++; 
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
    }
    return false;
  }
  checkUpDiag(i, j) {
    var board = this.state.board;
    var count = 0;
    var val = board[[i, j]];
    var start = [null, null];
    var diff = i - j;
    if (diff > 3 || diff < -2) {
      return false;
    }
    if (diff < 0) {
      start = [0, -diff];
    }
    else{
      start = [diff, 0]
    }
    while(start[0] < 7 && start[1] < 6){
      var space = board[start];
      if (space && space === val) {
        count ++; 
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
      start[0]++;
      start[1]++;
    }
    return false;
  }
  checkDownDiag(i, j) {
    var board = this.state.board;
    var count = 0;
    var val = board[[i, j]];
    var start = [null, null];
    var sum = i + j;
    if (sum < 3 || sum > 8) {
      return false;
    }
    if (sum > 6) {
      start = [6, sum - 6];
    }
    else {
      start = [sum, 0]; 
    }
    while(start[0] > -1 && start[1] < 6){
      var space = board[start];
      if (space && space === val) {
        count ++; 
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
      start[0]--;
      start[1]++;
    }
    return false;
  }
  // renderColumn(i) {
  //   return <Column key={i} handleClick={this.handleClick(i)} />
  // }
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

  render() {
    var status = this.getStatus();
    return (
      <div className="container">
        <div className="status container" > 
          {status}       
        </div>
        <div className="board">
          {Array(7).fill(null).map((e, i)=> {
            return (
              <Column 
                key={i} 
                index={i} 
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
}



class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false,
      // might have an array that i push onto and check length of or might have an array filled will nulls that I change the values of. i'll start with the first one and change if needed
      slots: Array(6).fill(null),
      top: 0,
    };
  }

  // renderSlot(i) {
  //   return (
  //     <Slot key={i} value={e}/>
  //   );
  // }

  handleClick(i) {
    var slots = this.state.slots.slice();
    var top = this.state.top;
    if (top > 5 || this.props.winner) {
      return
    }
    slots[5 - top] = this.props.p1turn ? c[0] : c[1];
    this.props.handleClick(i, top);
    top++;
    this.setState({slots, top})
  }

  render() {
    return (
      <button className="column" onClick={() => this.handleClick(this.props.index)}>
        {this.state.slots.map((e, i)=> {
          return <Slot key={i} index={i} value={e}/>
        })}
      </button>
    );
  }
}



class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var color = this.props.value || '';
    return (
      <div className="slot">
        <div className={"window " + color}>
        </div>
      </div>
    );
  }
}





class Game extends React.Component {
  render() {
    return (
      <div className="game container">
        <h1 className="title">Connect Four</h1>
        <Board />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


///////////////////////////////////////////////////////////////////// < ------ End ------ > ////////////////////////////////////////////////////////////////////


