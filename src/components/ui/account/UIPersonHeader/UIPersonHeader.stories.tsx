import {UIPersonHeader} from '@components/ui/account'
import {action} from '@storybook/addon-actions'
import {boolean, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('UIPersonHeader', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UIPersonHeader
      integerBalance={text('integerBalance', '123')}
      centsBalance={text('centsBalance', '00')}
      buttonText={text('buttonText', 'Payments')}
      hasNoData={boolean('hasNoData', false)}
      onPressProfile={action('onPressProfile')}
      onPressSearch={action('onPressSearch')}
      onPressButton={action('onPressButton')}
    />
  ))
