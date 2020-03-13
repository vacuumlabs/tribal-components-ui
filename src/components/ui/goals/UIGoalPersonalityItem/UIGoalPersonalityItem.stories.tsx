import {action} from '@storybook/addon-actions'
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import UIGoalPersonalityItem from './UIGoalPersonalityItem'

storiesOf('UIGoalPersonalityItem', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UIGoalPersonalityItem
      personality={text('personality', 'car')}
      completed={boolean('completed', false)}
      size={select('size', ['small', 'wide'], 'small')}
      onPress={action('onPress')}
    />
  ))
