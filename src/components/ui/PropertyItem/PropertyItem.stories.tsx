import {PropertyItem} from '@components/ui'
import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('PropertyItem', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <PropertyItem
      label={text('label', 'PropertyItem label')}
      text={text('text', 'Lorem Ipsum is simply dummy text')}
    />
  ))
