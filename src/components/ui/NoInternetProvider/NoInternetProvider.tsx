import NetInfo, {NetInfoState} from '@react-native-community/netinfo'
import React, {createContext, useCallback, useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {getInset} from '../../../utils/helpers'
import NoInternetBanner from '../NoInternetBanner/NoInternetBanner'

const styles = StyleSheet.create({
  banner: {
    zIndex: 10000,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
})

interface NoInternetContextProps {
  noInternet: boolean
}

interface NoInternetProviderProps {
  children: any
}

export const NoInternetContext = createContext({} as NoInternetContextProps)

export const NoInternetProvider = ({children}: NoInternetProviderProps) => {
  const topNotchHeight = getInset('top', false)
  const [noInternet, setNoInternet] = useState(false)

  const onChange = useCallback((state: NetInfoState) => {
    setNoInternet(!state.isInternetReachable)
  }, [])

  useEffect(() => {
    return NetInfo.addEventListener(onChange)
  }, [onChange])

  return (
    <NoInternetContext.Provider value={{noInternet}}>
      {noInternet && <NoInternetBanner style={[styles.banner, {top: topNotchHeight}]} />}
      <View style={styles.content}>{children}</View>
    </NoInternetContext.Provider>
  )
}

export default NoInternetProvider
