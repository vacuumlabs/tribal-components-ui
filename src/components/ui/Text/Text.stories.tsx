import {storiesOf} from '@storybook/react-native'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
})

storiesOf('Text', module).add('variants', () => (
  <>
    <Text variant="headline">Change password</Text>
    <View style={styles.separator} />
    <Text variant="body">Enter your current password</Text>
    <View style={styles.separator} />
    <Text variant="error">Could not change password, please try again</Text>
    <View style={styles.separator} />
    <Text variant="button">Submit</Text>
  </>
))
