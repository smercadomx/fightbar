import React, { Component } from 'react';
import './style.css';

class BarMap extends Component {
  render() {
    return (
      <div className="c-bar-map">
        <div className="c-bar-map__bar">
          <div className="c-bar-map__place">{this.props.bar.name}</div>
          <button>Directions</button>
        </div>
        <div className="c-bar-map__map">Map</div>
      </div>
    );
  }
}

export default BarMap;
