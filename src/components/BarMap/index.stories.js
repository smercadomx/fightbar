import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BarMap from './index.js';

let bar = {name: 'The Abbey Tavern'};

storiesOf('BarMap', module)
  .add('with cover', () => (
    <BarMap bar={bar} />
  ));
