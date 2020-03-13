import {select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Badge from './Badge'

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Badge
      label={text('label', 'Badge label')}
      variant={select('variant', ['primary', 'secondary', 'danger'], 'primary')}
    />
  ))
