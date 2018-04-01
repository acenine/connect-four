import React from 'react';
import Palette from './Palette.jsx';
// import PlayerPanel from './PlayerPanel.jsx';

class Menu extends React.Component {
  render() {
    return (
      <div className="container menu">
        <Palette/>
      </div>
    );
  }
}

export default Menu;
