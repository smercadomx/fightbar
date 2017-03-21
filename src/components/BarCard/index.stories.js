import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BarCard from './index.js';

let bar = {
  id: 1,
  name: 'The Abbey Tavern',
  address: '4100 Geary Blvd',
  image: 'http://placehold.it/100x100',
  phone: '(510) 547-3552',
  website: 'http://abbeytavern.com'
};

storiesOf('BarCard', module)
  .add('with cover', () => (
    <BarCard
      bar={bar}
      distance="11mi"
      cover={20} />
  ))
  .add('without cover', () => (
    <BarCard
      bar={bar}
      distance="11mi" />
  ))
  .add('with onClick', () => (
    <BarCard
      bar={bar}
      distance="11mi"
      onClick={(bar) => action('clicked')(bar)}/>
  ));
