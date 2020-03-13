import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import CodeInput from './CodeInput'

interface CodeInputRendererProps {
  render: (value: string, setValue: (value: string) => void) => JSX.Element
}

const CodeInputRenderer = ({render}: CodeInputRendererProps) => {
  const [value, setValue] = useState('123456')
  return render(value, setValue)
}

storiesOf('CodeInput', module).add('basic', () => (
  <CodeInputRenderer
    render={(value, setValue) => (
      <CodeInput value={value} onChangeText={setValue} inputLength={6} />
    )}
  />
))
