import {color, number, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import ProgressBar from './ProgressBar'

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <ProgressBar
      value={number('value', 75)}
      total={number('total', 100)}
      scale={number('scale', 5)}
      color={color('color', '#FD4344')}
    />
  ))
