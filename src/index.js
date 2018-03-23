import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: Array(7).fill(null),
    };
  }
  handleClick() {
    //when a column is clicked we need to check if the column is full, if not, drop a piece. (add to top of stack)

  }

  render() {
    return (
      <div className="board">
        {this.state.columns.map((e, i)=>
          <Column key={i}/>
        )}
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
    };
  }

  render() {
    return (
      <div className="column" onClick={()=>{return}}>
        
        {this.state.slots.map((e, i)=>
          <Slot key={i}/>
        )}
      </div>
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
    return (
      <div className="slot">
        <div className="window">
          
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
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

// a Board has 7 Columns
// a Column has 6 Slots
// a piece can be placed in a Column if there is a free space (Column is not full)
// when a piece is placed in the selected column, the piece goes to the bottom most free space
// once 7 pieces are placed, it is necessary to check if there is a winner. 
// if 42 pieces are placed the game ends either in a win or a draw