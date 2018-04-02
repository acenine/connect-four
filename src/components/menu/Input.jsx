import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        className="container menu name input"
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.handleChange.bind(this)}
        value={this.props.value} // can add a state for this
        // ref={(input) => this.input = input}

      />
    );
  }
  handleChange(event) {
    var name = event.target.value;
    this.props.setName(name)
    return name;
  }
}

export default Input;
