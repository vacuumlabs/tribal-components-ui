import {Badge} from '@components/ui'
import {select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Badge
      label={text('label', 'Badge label')}
      variant={select('variant', ['primary', 'secondary', 'danger'], 'primary')}
    />
  ))
