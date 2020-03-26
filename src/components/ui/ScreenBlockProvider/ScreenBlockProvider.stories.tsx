import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React, {useCallback, useContext, useState} from 'react'
import Button from '../Button/Button'
import ScreenBlockProvider, {ScreenBlockContext} from './ScreenBlockProvider'

const ButtonScreen = () => {
  const {enableScreenBlock, disableScreenBlock} = useContext(ScreenBlockContext)

  const DURATION = 10
  const [seconds, setSeconds] = useState(DURATION)

  const onPress = useCallback(() => {
    action('onPress')()
    enableScreenBlock()
    const intervalId = setInterval(() => {
      setSeconds((s) => s - 1)
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalId)
      disableScreenBlock()
      setSeconds(DURATION)
    }, DURATION * 1000)
  }, [enableScreenBlock, disableScreenBlock])

  return (
    <Button
      title={seconds === DURATION ? 'Enable screen block' : `Screen block enabled (${seconds})`}
      onPress={onPress}
    />
  )
}

storiesOf('ScreenBlockProvider', module).add('basic', () => (
  <ScreenBlockProvider>
    <ButtonScreen />
  </ScreenBlockProvider>
))
