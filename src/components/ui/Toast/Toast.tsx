import React, {useCallback, useEffect, useState} from 'react'
import {Animated, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import {formatMessage} from '../../../utils/formats'

const SLIDE_TIME = 500
const SHOW_TIME = 2000

const defaultOffset = 60

const styles = StyleSheet.create({
  toast: {
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#121E30',
    width: '100%',
    zIndex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    padding: 20,
    flexShrink: 1,
    color: 'white',
    flexWrap: 'wrap',
  },
  close: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    color: '#fd4344',
    textAlign: 'right',
  },
})

interface ToastProps {
  message: string
  disableAutoClose?: boolean
  onClose?: () => void
  onClosing?: () => void
}

const Toast = ({message, disableAutoClose, onClose, onClosing}: ToastProps) => {
  // TODO fix
  const bottomNotchHeight = 64 // getInset('bottom', false)
  const [translateY] = useState(new Animated.Value(defaultOffset))
  const [timerDelay, setTimerDelay] = useState(0)
  const [timer] = useState(new Date().getTime())

  const hide = useCallback(() => {
    if (onClosing) onClosing()
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: defaultOffset + bottomNotchHeight,
        duration: SLIDE_TIME,
      }),
    ]).start(() => {
      if (onClose) onClose()
    })
  }, [onClose, onClosing, translateY, bottomNotchHeight])

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: SLIDE_TIME,
      }),
    ]).start()
  }, [translateY])

  useEffect(() => {
    if (disableAutoClose) return
    if (timerDelay > SHOW_TIME + 2 * SLIDE_TIME) {
      hide()
      return
    }

    const interval = setInterval(() => {
      setTimerDelay(new Date().getTime() - timer)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [timerDelay, disableAutoClose, hide, timer])

  return (
    <Animated.View style={[styles.toast, {transform: [{translateY}]}]}>
      <Text style={styles.message}>{message}</Text>
      {disableAutoClose && (
        <TouchableWithoutFeedback
          onPress={() => {
            hide()
          }}
        >
          <Text style={styles.close}>{formatMessage('common', 'close')}</Text>
        </TouchableWithoutFeedback>
      )}
    </Animated.View>
  )
}

export default Toast
