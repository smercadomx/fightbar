import React, { Component } from 'react';
import './style.css';

class FightCard extends Component {
  render() {
    return (
      <div className="c-fight-card" onClick={this.props.onClick.bind(null, this.props.fight)}>
        <div className="c-fight-card__images">
        <img src={this.props.fight.firstFighterImage} />
        <img src={this.props.fight.secondFighterImage} />
        </div>
        <div className="c-fight-card__title">{this.props.fight.title}</div>
        <div>{this.props.fight.date}</div>
        {this.props.fight.isPpv &&
          <span className="c-fight-card__ppv">PPV</span>
        }
      </div>
    );
  }
}

export default FightCard;
