import React from 'react';
// import Board from './Board.jsx';
import Button from '../Button.jsx';

class Game extends React.Component {
  render() {
    return (
      <div className="game container">
        <div className="status container" >
          {'status'}
        </div>
        <Button value="New Game" clickFn={this.props.newGame}/>
        {/*<Board />*/}
        BOARD
      </div>
    );
  }
}

// App will keep all the info because there is info that is created on page Menu that will be used by Game
// App keeps p1 name and p2 name and their respective chose colors
// example:
//   var players = [{name: 'Chad', color:'green'}, {name: 'Lucy', color: 'gray'}]
//   p1 = players[0], p2 = players[1];


export default Game;
