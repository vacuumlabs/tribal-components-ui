import {storiesOf} from '@storybook/react-native'
import React, {useContext} from 'react'
import Text from '../Text/Text'
import NoInternetProvider, {NoInternetContext} from './NoInternetProvider'

const TextScreen = () => {
  const {noInternet} = useContext(NoInternetContext)
  return <Text>No internet: {String(noInternet)}</Text>
}

storiesOf('NoInternetProvider', module).add('basic', () => (
  <NoInternetProvider>
    <TextScreen />
  </NoInternetProvider>
))
