import {NoInternetContext, NoInternetProvider, Text} from '@components/ui'
import {storiesOf} from '@storybook/react-native'
import React, {useContext} from 'react'

const TextScreen = () => {
  const {noInternet} = useContext(NoInternetContext)
  return <Text>No internet: {String(noInternet)}</Text>
}

storiesOf('NoInternetProvider', module).add('basic', () => (
  <NoInternetProvider>
    <TextScreen />
  </NoInternetProvider>
))
