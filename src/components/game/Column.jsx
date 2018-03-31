import React from 'react';
import Slot from './Slot.jsx'

class Column extends React.Component {
  render() {
    return (
      <button className="column" onClick={() => this.props.columnClick(this.props.index)}>
        {this.props.slots.map((slot, i)=> {
          return <Slot key={i} index={i} value={slot}/>
        }).reverse()}
      </button>
    );
  }

}

export default Column;
