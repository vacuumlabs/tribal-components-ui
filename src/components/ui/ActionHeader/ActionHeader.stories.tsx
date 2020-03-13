import {action} from '@storybook/addon-actions'
import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import ActionHeader from './ActionHeader'

storiesOf('ActionHeader', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <ActionHeader
      title={text('title', 'Title')}
      actionLabel={text('actionLabel', 'Action label')}
      onPress={action('onPress')}
    />
  ))
