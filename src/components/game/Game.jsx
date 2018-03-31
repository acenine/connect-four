import React from 'react';
import Board from './Board.jsx';
import Button from '../Button.jsx';
import winCheck from './winCheck.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [...Array(this.props.width).keys()].map(() => [...Array(this.props.height).keys()].map(()=>null)),
      turn: 0,
      winner: false,
    };
      console.log(this.state.board[3][2])
  }
  render() {
    return (
      <div className="game container">
        <div className="status container" >
          {'status'}
        </div>
        <Button value="New Game" clickFn={this.newGame.bind(this)}/>
        <Board columns={this.state.board} columnClick={this.updateBoard.bind(this)}/>
      </div>
    );
  }
  // getStatus() {
  //   if (!this.state.winner && Object.keys(this.state.board).length < 42) {
  //     return (this.state.p1turn ? c[0] : c[1]) + '\'s turn';
  //   }
  //   else {
  //     if (this.state.winner) {
  //       var winner = (this.state.p1turn ? c[1] : c[0]) + ' wins!'
  //     }
  //     return 'Game over: ' + (winner ? winner : 'It\'s a draw!')
  //   }
  // }
  newGame() {
    var board = [...Array(this.props.width).keys()].map(() => [...Array(this.props.height).keys()].map(()=>null));
    this.setState({
      board: board,
      turn: 0,
      winner: false,
    });
  }
  winner(i, j) {
    return winCheck(this.state.board, i, j);
  }
  player() { // returns the player whose turn it is
    const players = this.props.players;
    const numPlayers = players.length;
    return players[this.state.turn % numPlayers];
  }

  updateBoard(i) {
    var {board, turn, winner} = this.state;
    var j = board[i].indexOf(null);
    if (j < 0 || winner || turn === 42) {
      return;
    }
    var player = this.player();
    board[i][j] = player.color;
    winner = winCheck(this.state.board, i, j);
    turn++;
    this.setState({board, turn, winner});
  }
}

// App will keep all the info because there is info that is created on page Menu that will be used by Game
// App keeps p1 name and p2 name and their respective chose colors
// example:
//   var players = [{name: 'Chad', color:'green'}, {name: 'Lucy', color: 'gray'}]
//   p1 = players[0], p2 = players[1];


export default Game;
