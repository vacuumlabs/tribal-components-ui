import {init} from '@utils/helpers'
import {AppLoading, registerRootComponent} from 'expo'
import React, {useState} from 'react'
import Storybook from './storybook/index'

const App = () => {
  const [loading, setLoading] = useState(true)

  if (loading)
    return (
      <AppLoading startAsync={init} onFinish={() => setLoading(false)} onError={console.error} />
    )
  return <Storybook />
}

registerRootComponent(App)
