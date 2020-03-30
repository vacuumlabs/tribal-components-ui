import {action} from '@storybook/addon-actions'
import {boolean, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import {range} from 'lodash'
import React from 'react'
import Text from '../../Text/Text'
import UITransactionList from './UITransactionList'

storiesOf('UITransactionList', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => {
    const noTransactions = boolean('noTransactions', true)
    return (
      <UITransactionList
        ListHeaderComponent={<Text>This is transaction list header</Text>}
        transactions={
          noTransactions
            ? []
            : [
                {
                  date: 'Feb 2020',
                  amount: {positive: 9800, negative: 1200},
                  key: '1',
                  data: range(1, 31).map((val) => ({id: String(val)})),
                },
                {
                  date: 'Mar 2020',
                  amount: {positive: 7600, negative: 3400},
                  key: '2',
                  data: range(31, 51).map((val) => ({id: String(val)})),
                },
              ]
        }
        emptyMessage={text('emptyMessage', 'No transactions')}
        onEndReached={action('onEndReached')}
        fetchingMore={boolean('fetchingMore', false)}
        renderItem={({item}) => <Text style={{height: 50}}>transaction id: {item.id}</Text>}
        refetch={action('refetch') as any}
        loading={boolean('loading', false)}
        errorFooter={text('errorFooter', '')}
        error={undefined}
      />
    )
  })
