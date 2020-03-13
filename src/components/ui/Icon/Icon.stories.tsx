import {color, select, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Icon from './Icon'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Icon
      name={select('name', ['copy', 'edit', 'delete'], 'edit')}
      color={color('color', '#83919b')}
    />
  ))
