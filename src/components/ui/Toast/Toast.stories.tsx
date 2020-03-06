import {Button, Toast} from '@components/ui'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    marginBottom: 40,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  toasts: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

const DisableAutoCloseToast = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
      </View>
      <View style={styles.toasts}>
        {isVisible && (
          <Toast message="Toast" disableAutoClose onClose={() => setIsVisible(false)} />
        )}
      </View>
    </View>
  )
}

const AutoCloseToast = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
      </View>
      <View style={styles.toasts}>
        {isVisible && (
          <Toast message="Toast" disableAutoClose={false} onClose={() => setIsVisible(false)} />
        )}
      </View>
    </View>
  )
}

storiesOf('Toast', module)
  .add('autoClose', () => <AutoCloseToast />)
  .add('disableAutoClose', () => <DisableAutoCloseToast />)
