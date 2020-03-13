import {action} from '@storybook/addon-actions'
import {select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import HeaderRightButton from './HeaderRightButton'

storiesOf('HeaderRightButton', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <HeaderRightButton
      title={text('title', 'Title')}
      icon={select(
        'icon',
        {delete: 'delete', edit: 'edit', 'arrow-back': 'arrow-back', none: undefined},
        undefined,
      )}
      onPress={action('onPress')}
    />
  ))
