import {UIGoalItem} from '@components/ui/goals'
import {action} from '@storybook/addon-actions'
import {boolean, number, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('UIGoalItem', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UIGoalItem
      goal={{
        name: text('name', 'My new car'),
        personality: text('personality', 'car'),
        amount: number('amount', 50000),
        targetAmount: number('targetAmount', 150000),
        completed: boolean('completed', false),
      }}
      onPress={action('onPress')}
    />
  ))
