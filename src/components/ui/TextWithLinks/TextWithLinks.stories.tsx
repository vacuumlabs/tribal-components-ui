import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import TextWithLinks from './TextWithLinks'

storiesOf('TextWithLinks', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <TextWithLinks text={text('text', 'Example [[link title]](https://www.google.com/)')} />
  ))
