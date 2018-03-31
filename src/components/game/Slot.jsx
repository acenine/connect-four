import React from 'react';

class Slot extends React.Component {
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

export default Slot;
