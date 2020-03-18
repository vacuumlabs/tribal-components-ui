import {uniqueId} from 'lodash'
import React, {createContext, useCallback, useEffect, useState} from 'react'
import {Animated, StyleSheet, View} from 'react-native'
import {getInset} from '../../../utils/helpers'
import Toast from '../Toast/Toast'

const SLIDE_TIME = 500

const styles = StyleSheet.create({
  toasts: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  notchOverlay: {
    backgroundColor: '#121E30',
    zIndex: 3,
  },
})

interface BaseToastProps {
  message: string
  disableAutoClose?: boolean
}

interface AddToastProps extends BaseToastProps {
  key?: string
}

interface ToastProps extends BaseToastProps {
  key: string
}

interface ToastContextProps {
  addToast: (toast: AddToastProps) => void
}

interface ToastProviderProps {
  children: any
}

export const ToastContext = createContext({} as ToastContextProps)

export const ToastProvider = ({children}: ToastProviderProps) => {
  const bottomNotchHeight = getInset('bottom', false)
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const [notchOverlayHeight] = useState(new Animated.Value(0))

  const addToast = useCallback(
    (toast: AddToastProps) => {
      const key = toast.key || uniqueId()
      if (toasts.find((t) => key === t.key)) return
      setToasts((toasts) => [...toasts, {...toast, key}])
    },
    [toasts],
  )

  const onClose = useCallback(
    (toast: ToastProps) => {
      setToasts(toasts.filter((t) => toast.key !== t.key))
    },
    [toasts],
  )

  const hide = useCallback(() => {
    Animated.parallel([
      Animated.timing(notchOverlayHeight, {
        toValue: 0,
        duration: SLIDE_TIME,
      }),
    ]).start()
  }, [notchOverlayHeight])

  const onClosing = useCallback(
    (toast: ToastProps) => {
      if (!toasts.filter((t) => toast.key !== t.key).length) {
        hide()
      }
    },
    [toasts, hide],
  )

  useEffect(() => {
    if (toasts.length) {
      Animated.parallel([
        Animated.timing(notchOverlayHeight, {
          toValue: bottomNotchHeight,
          duration: SLIDE_TIME,
        }),
      ]).start()
    }
  }, [bottomNotchHeight, notchOverlayHeight, toasts])

  useEffect(() => {
    if (!toasts.length) {
      hide()
    }
  }, [toasts, hide])

  return (
    <ToastContext.Provider value={{addToast}}>
      {children}
      <View style={[styles.toasts]}>
        {toasts.map((toast) => (
          <Toast
            key={toast.key}
            message={toast.message}
            disableAutoClose={toast.disableAutoClose}
            onClosing={() => onClosing(toast)}
            onClose={() => onClose(toast)}
          />
        ))}
        {/* to add background on notch */}
        <Animated.View style={[styles.notchOverlay, {height: notchOverlayHeight}]}></Animated.View>
      </View>
    </ToastContext.Provider>
  )
}

export default ToastProvider
