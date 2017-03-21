import React, { Component } from 'react';
import './style.css';
import '../../utilities.css';

class BarCard extends Component {
  render() {
    return (
      <div className="c-bar-card" onClick={this.props.onClick && this.props.onClick.bind(null, this.props.bar)}>
        <img className="c-bar-card__image" src={this.props.bar.image} />
        <div className="c-bar-card__info">
          <div className="u-bold">{this.props.bar.name}</div>
          <div>{this.props.bar.address}</div>
          <div>{this.props.bar.phone}</div>
          <div>{this.props.bar.website}</div>
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
