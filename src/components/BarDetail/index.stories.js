import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BarDetail from './index.js';

storiesOf('BarDetail', module)
  .add('with cover', () => (
    <BarDetail />
  ));
