import {Switch} from '@components/ui'
import {boolean, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'

interface SwitchRendererProps {
  render: (value: boolean, setValue: (value: boolean) => void) => JSX.Element
}

const SwitchRenderer = ({render}: SwitchRendererProps) => {
  const [value, setValue] = useState(true)
  return render(value, setValue)
}

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <SwitchRenderer
      render={(value, setValue) => (
        <Switch value={value} onValueChange={setValue} disabled={boolean('disabled', false)} />
      )}
    />
  ))
