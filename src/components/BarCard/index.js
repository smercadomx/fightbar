import React, { Component } from 'react';
import './style.css';

class BarCard extends Component {
  render() {
    return (
      <div className="c-bar-card">
        <img src={this.props.image} />
        <div className="c-bar-card__info">
          <div className="c-bar-card__name">{this.props.name}</div>
          <div className="c-bar-card__address">{this.props.address}</div>
          <div className="c-bar-card__distance">{this.props.distance}</div>
        </div>
        {this.props.cover &&
          <div className="c-bar-card__cover">${this.props.cover}</div>
        }
      </div>
    );
  }
}

export default BarCard;
