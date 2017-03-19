import React, { Component } from 'react';
import './style.css';

class BarCard extends Component {
  render() {
    return (
      <div className="BarCard">
        <img src={this.props.image} />
        <div className="BarCard-info">
          <div className="BarCard-name">{this.props.name}</div>
          <div className="BarCard-address">{this.props.address}</div>
          <div className="BarCard-distance">{this.props.distance}</div>
        </div>
        {this.props.cover &&
          <div className="BarCard-cover">${this.props.cover}</div>
        }
      </div>
    );
  }
}

export default BarCard;
