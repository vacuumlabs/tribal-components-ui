import {object, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import RadioButton from './RadioButton'

interface RadioButtonRendererProps {
  render: (value: boolean, setValue: (value: boolean) => void) => JSX.Element
}

const RadioButtonRenderer = ({render}: RadioButtonRendererProps) => {
  const [value, setValue] = useState(true)
  return render(value, setValue)
}

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <RadioButtonRenderer
      render={(value, setValue) => (
        <RadioButton
          value={value}
          onChangeValue={setValue}
          options={object('options', [
            {value: '1', label: 'Label 1'},
            {value: '2', label: 'Label 2'},
            {value: '3', label: 'Label 3'},
          ])}
        />
      )}
    />
  ))
