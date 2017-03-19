import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BarCard from './index.js';

storiesOf('BarCard', module)
  .add('with cover', () => (
    <BarCard
      name="The Abbey Tavern"
      address="4100 Geary Blvd"
      distance="11mi"
      image="http://placehold.it/80x80"
      cover={20} />
  ))
  .add('without cover', () => (
    <BarCard
      name="The Abbey Tavern"
      address="4100 Geary Blvd"
      distance="11mi"
      image="http://placehold.it/80x80" />
  ));
