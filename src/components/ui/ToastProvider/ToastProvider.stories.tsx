import {storiesOf} from '@storybook/react-native'
import React, {useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import ToastProvider, {ToastContext} from './ToastProvider'

const styles = StyleSheet.create({
  buttonScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  providerContainer: {
    position: 'relative',
    flex: 1,
    marginBottom: 40,
  },
})

const ButtonScreen = () => {
  const toastContext = useContext(ToastContext)

  return (
    <View style={styles.buttonScreenContainer}>
      <ButtonGroup vertical>
        <Button
          title="Toast autoClose 1"
          onPress={() => {
            toastContext.addToast({message: 'Toast 1'})
          }}
        />
        <Button
          title="Toast autoClose 2"
          onPress={() => {
            toastContext.addToast({message: 'Toast 2'})
          }}
        />
        <Button
          title="Toast disableAutoClose 1"
          onPress={() => {
            toastContext.addToast({message: 'Toast 3', disableAutoClose: true})
          }}
        />
        <Button
          title="Toast disableAutoClose 2"
          onPress={() => {
            toastContext.addToast({message: 'Toast 4', disableAutoClose: true})
          }}
        />
      </ButtonGroup>
    </View>
  )
}

const MultipleToastProvider = () => {
  return (
    <View style={styles.providerContainer}>
      <ToastProvider>
        <ButtonScreen />
      </ToastProvider>
    </View>
  )
}

storiesOf('ToastProvider', module).add('basic', () => <MultipleToastProvider />)
