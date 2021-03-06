import {number, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import TransactionSectionHeader from './TransactionSectionHeader'

storiesOf('TransactionSectionHeader', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <TransactionSectionHeader
      title={text('title', 'March 2020')}
      amount={{
        positive: number('positive', 876500),
        negative: number('negative', 123400),
      }}
    />
  ))
