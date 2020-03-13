import {action} from '@storybook/addon-actions'
import {select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import EmptyList from './EmptyList'

storiesOf('EmptyList', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <EmptyList
      icon={select('icon', {human: 'human', recurrent: 'recurrent', none: undefined}, 'recurrent')}
      title={text('title', 'No recurring payments yet')}
      description={text('description', 'The list of your recurring payments will appear here.')}
      action={action('action')}
      actionTitle={text('actionTitle', 'Add payment')}
      actionIcon={select(
        'actionIcon',
        {
          human: 'human',
          recurrent: 'recurrent',
          'add-circle': 'add-circle',
          send: 'send',
          none: undefined,
        },
        'add-circle',
      )}
    />
  ))
