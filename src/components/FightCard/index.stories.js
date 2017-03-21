import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FightCard from './index.js';

let fight = {
  title: 'Genady Golovkin vs Daniel Jacobs',
  date: 'March 11, 2017 10PM/7PM ET/PT',
  firstFighterImage: 'http://placehold.it/80x80',
  secondFighterImage: 'http://placehold.it/80x80'
};

storiesOf('FightCard', module)
  .add('ppv', () => {
    fight.isPpv = true;
    return <FightCard fight={fight} onClick={(fight) => action('clicked')(fight)} />;
  })
  .add('no ppv', () => {
    fight.isPpv = false;
    return <FightCard fight={fight} onClick={(fight) => action('clicked')(fight)} />;
  });
