import React, { Component } from 'react';
import './style.css';

class FightCard extends Component {
  render() {
    return (
      <div className="c-fight-card">
        <div className="c-fight-card__images">
          <img src={this.props.firstFighterImage} />
          <img src={this.props.secondFighterImage} />
        </div>
        <div className="c-fight-card__title">{this.props.title}</div>
        <div>{this.props.date}</div>
        {this.props.isPpv &&
          <span className="c-fight-card__ppv">PPV</span>
        }
      </div>
    );
  }
}

export default FightCard;
