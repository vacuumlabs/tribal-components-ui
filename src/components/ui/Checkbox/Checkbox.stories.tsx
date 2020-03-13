import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import Checkbox from './Checkbox'

interface CheckboxRendererProps {
  render: (value: boolean, setValue: (value: boolean) => void) => JSX.Element
}

const CheckboxRenderer = ({render}: CheckboxRendererProps) => {
  const [value, setValue] = useState(true)
  return render(value, setValue)
}

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <CheckboxRenderer
      render={(value, setValue) => (
        <Checkbox
          value={value}
          onChange={setValue}
          text={text(
            'text',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          )}
        />
      )}
    />
  ))
