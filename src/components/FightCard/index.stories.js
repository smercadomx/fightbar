import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FightCard from './index.js';

storiesOf('FightCard', module)
  .add('ppv', () => (
    <FightCard
      title="Genady Golovkin vs Daniel Jacobs"
      date="March 11, 2017 10PM/7PM ET/PT"
      isPpv={true}
      firstFighterImage="http://placehold.it/80x80"
      secondFighterImage="http://placehold.it/80x80" />
  ))
  .add('no ppv', () => (
    <FightCard
      title="Genady Golovkin vs Daniel Jacobs"
      date="March 11, 2017 10PM/7PM ET/PT"
      isPpv={false}
      firstFighterImage="http://placehold.it/80x80"
      secondFighterImage="http://placehold.it/80x80" />
  ));;
