import React from 'react';
import Column from './Column.jsx';

class Board extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="board">
          {this.props.columns.map((column, i)=> {
            return (
              <Column
                key={i}
                index={i}
                slots={column}
                columnClick={this.props.columnClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Board;
