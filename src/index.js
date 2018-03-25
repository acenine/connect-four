// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       columns: [],
//     };
//   }
//   handleClick() {
//     //when a column is clicked we need to check if the column is full, if not, drop a piece. (add to top of stack)
//     console.log("CLICK!")
//   }

//   render() {
//     return (
//       <div className="board">
//         {Array(7).fill(null).map((e, i)=>
//           <Column key={i}/>
//         )}
//       </div>
//     );
//   }
// }

// class Column extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFull: false,
//       // might have an array that i push onto and check length of or might have an array filled will nulls that I change the values of. i'll start with the first one and change if needed
//       slots: Array(6).fill(null),
//       top: 0,
//     };
//   }

//   render() {
//     return (
//       <button className="column" onClick={()=>{return}}>
//         {this.state.slots.map((e, i)=>
//           <Slot key={i} value={e}/>
//         )}
//       </button>
//     );
//   }
// }

// class Slot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {
//     var color = ' ' + this.props.value || '';
//     return (
//       <div className="slot">
//         <div className={"window" + color}>
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <Board />
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


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
    };
  }
  handleClick(i, j) {
    //when a column is clicked we need to check if the column is full, if not, drop a piece. (add to top of stack)
    var {board, p1turn} = this.state;
    console.log(board[[i, j]])
    if (board[[i, j]]) {
      return
    }
    board[[i, j]] = p1turn ? c[0] : c[1];
    p1turn = !p1turn;
    this.setState({board, p1turn})
    console.dir(board)
  }

  // renderColumn(i) {
  //   return <Column key={i} handleClick={this.handleClick(i)} />
  // }

  render() {
    return (
      <div className="board">
        {Array(7).fill(null).map((e, i)=> {
          return (
            <Column 
              key={i} 
              index={i} 
              handleClick={this.handleClick.bind(this)} 
              p1turn={this.state.p1turn}
            />
          )
        })}
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
    if (top > 5) {
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
    var color = ' ' + this.props.value || '';
    return (
      <div className="slot">
        <div className={"window" + color}>
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