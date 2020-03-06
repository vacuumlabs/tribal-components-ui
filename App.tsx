import {init} from '@utils/helpers'
import {AppLoading} from 'expo'
import React, {useState} from 'react'
import Storybook from './storybook/index'

export default () => {
  const [loading, setLoading] = useState(true)

  if (loading)
    return (
      <AppLoading startAsync={init} onFinish={() => setLoading(false)} onError={console.error} />
    )
  return <Storybook />
}
