import React, {createContext, useCallback, useState} from 'react'
import {BackHandler, Dimensions, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  screenBlocker: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    opacity: 0,
  },
})

interface ScreenBlockContextProps {
  enableScreenBlock: () => void
  disableScreenBlock: () => void
}

interface ScreenBlockProviderProps {
  children: any
}

export const ScreenBlockContext = createContext({} as ScreenBlockContextProps)

export const ScreenBlockProvider = ({children}: ScreenBlockProviderProps) => {
  const [visible, setVisible] = useState(false)
  const disabledBackButtonListener = () => true

  const enableScreenBlock = useCallback(() => {
    BackHandler.addEventListener('hardwareBackPress', disabledBackButtonListener)
    setVisible(true)
  }, [])

  const disableScreenBlock = useCallback(() => {
    BackHandler.removeEventListener('hardwareBackPress', disabledBackButtonListener)
    setVisible(false)
  }, [])

  return (
    <ScreenBlockContext.Provider value={{enableScreenBlock, disableScreenBlock}}>
      {children}
      {visible && <View style={styles.screenBlocker} />}
    </ScreenBlockContext.Provider>
  )
}

export default ScreenBlockProvider
