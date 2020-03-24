import React from 'react'
import {StyleSheet, View} from 'react-native'
import {formatMessage} from '../../../../utils/formats'
import Text from '../../Text/Text'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
  },
  row: {
    flexDirection: 'row',
  },
  titleText: {
    color: '#081c2b',
    fontWeight: '700',
  },
  labelText: {
    color: '#83919b',
  },
  labelPositiveText: {
    color: '#50c9ba',
  },
  labelNegativeText: {
    color: '#f87777',
    marginLeft: 20,
  },
})

interface TransactionSectionHeaderProps {
  title: string
  amount: {
    positive: number
    negative: number
  }
}

const TransactionSectionHeader = ({title, amount}: TransactionSectionHeaderProps) => (
  <View style={styles.header}>
    <Text variant="body" style={styles.titleText}>
      {title}
    </Text>
    <View style={styles.row}>
      {amount.positive !== 0 && (
        <Text variant="body" style={[styles.labelText, styles.labelPositiveText]}>
          {formatMessage('common', 'amount', {amount: amount.positive})}
        </Text>
      )}
      {amount.negative !== 0 && (
        <Text variant="body" style={[styles.labelText, styles.labelNegativeText]}>
          {formatMessage('common', 'amount', {amount: amount.negative})}
        </Text>
      )}
    </View>
  </View>
)

export default TransactionSectionHeader
