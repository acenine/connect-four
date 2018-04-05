import React from 'react';

class AddPlayer extends React.Component {
  render() {
    return(
      <div className="container panel add" onClick={() => this.props.toggleActive(this.props.index)}>
        <p> Add </p>
        <p> Player </p>
        <p> + </p>
      </div>
    );
  }
}

export default AddPlayer;
