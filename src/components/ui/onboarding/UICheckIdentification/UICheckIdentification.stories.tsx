import {action} from '@storybook/addon-actions'
import {boolean, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import UICheckIdentification from './UICheckIdentification'

storiesOf('UICheckIdentification', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UICheckIdentification
      statusLoading={boolean('statusLoading', true)}
      statusText={text('statusText', 'Error message')}
      handleCheckIdentification={action('handleCheckIdentification')}
    />
  ))
