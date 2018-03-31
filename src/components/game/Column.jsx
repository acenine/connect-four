import React from 'react';
import Slot from './Slot.jsx'

class Column extends React.Component {
  render() {
    return (
      <button className="column" onClick={() => this.props.handleClick(this.props.index)}>
        {this.props.slots.map((slot, i)=> {
          return <Slot key={i} index={i} value={slot}/>
        })}
      </button>
    );
  }
  // handleClick(i) {
  //   var slots = this.state.slots.slice();
  //   var top = this.state.top;
  //   if (top > 5 || this.props.winner) {
  //     return
  //   }
  //   slots[5 - top] = this.props.p1turn ? c[0] : c[1];
  //   this.props.handleClick(i, top);
  //   top++;
  //   this.setState({slots, top})
  // }

}

export default Column;
