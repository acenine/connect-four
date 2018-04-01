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
    var status = this.getStatus();
    return (
      <div className="game container">
        <div className="status container" >
          {status}
        </div>
        <Button value="New Game" clickFn={this.newGame.bind(this)}/>
        <Board columns={this.state.board} columnClick={this.updateBoard.bind(this)}/>
      </div>
    );
  }
  getStatus() {
    var {winner, turn} = this.state;
    var name = this.player().name;
    if (!winner && turn < 42) {
      return (name) + '\'s turn';
    }
    else {
      if (winner) {
        name = this.player(turn - 1).name;
        return `Game over: ${name} wins!`
      }
      return 'Game over: It\'s a draw!'
    }
  }
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
    var turn = arguments[0] || this.state.turn;
    const players = this.props.players;
    const numPlayers = players.length;
    return players[turn % numPlayers];
  }

  updateBoard(i) {
    var {board, turn, winner} = this.state;
    var j = board[i].indexOf(null);
    if (j < 0 || winner || turn === 42) {
      return;
    }
    turn++;
    var player = this.player();
    board[i][j] = player.color;
    winner = winCheck(this.state.board, i, j);
    this.setState({board, turn, winner});
  }
}

// App will keep all the info because there is info that is created on page Menu that will be used by Game
// App keeps p1 name and p2 name and their respective chose colors
// example:
//   var players = [{name: 'Chad', color:'green'}, {name: 'Lucy', color: 'gray'}]
//   p1 = players[0], p2 = players[1];


export default Game;
