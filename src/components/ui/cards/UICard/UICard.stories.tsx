import {UICard} from '@components/ui/cards'
import {action} from '@storybook/addon-actions'
import {boolean, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('UICard', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UICard
      onPress={action('onPress')}
      maskedPan={text('maskedPan', '1234 5678 9000 0000')}
      expirationDate={text('expirationDate', '00/00')}
      canOrder={boolean('canOrder', false)}
      canActivate={boolean('canActivate', false)}
      orderProcessing={boolean('orderProcessing', false)}
      loading={boolean('loading', false)}
    />
  ))
