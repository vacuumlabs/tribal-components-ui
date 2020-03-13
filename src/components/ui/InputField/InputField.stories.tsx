import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import InputField from './InputField'

interface InputFieldRendererProps {
  render: (value: string, setValue: (value: string) => void) => JSX.Element
}

const InputFieldRenderer = ({render}: InputFieldRendererProps) => {
  const [value, setValue] = useState('')
  return render(value, setValue)
}

storiesOf('InputField', module)
  .add('label', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField label="Label" value={value} onChangeText={setValue} />
      )}
    />
  ))
  .add('label + placeholder', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField label="Label" placeholder="Placeholder" value={value} onChangeText={setValue} />
      )}
    />
  ))
  .add('placeholder', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField placeholder="Placeholder" value={value} onChangeText={setValue} />
      )}
    />
  ))
  .add('error', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField
          placeholder="Placeholder"
          value={value}
          onChangeText={setValue}
          errorMessage="Error text"
        />
      )}
    />
  ))
  .add('multiline', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField label="Label" value={value} onChangeText={setValue} multiline={true} />
      )}
    />
  ))
  .add('password', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField label="Password" value={value} onChangeText={setValue} secureTextEntry={true} />
      )}
    />
  ))
  .add('search', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField variant="search" placeholder="Search" value={value} onChangeText={setValue} />
      )}
    />
  ))
  .add('no underline', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField
          variant="primary"
          placeholder="Placeholder"
          value={value}
          onChangeText={setValue}
          underline={false}
        />
      )}
    />
  ))
  .add('center', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <InputField
          variant="primary"
          placeholder="Placeholder"
          value={value}
          onChangeText={setValue}
          underline={false}
          centerInputField={true}
        />
      )}
    />
  ))
  .add('inputFontSize', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <>
          <InputField
            variant="primary"
            label="Small"
            value={value}
            onChangeText={setValue}
            inputFontSize="small"
          />
          <InputField
            variant="primary"
            label="Medium"
            value={value}
            onChangeText={setValue}
            inputFontSize="medium"
          />
          <InputField
            variant="primary"
            label="Large"
            value={value}
            onChangeText={setValue}
            inputFontSize="large"
          />
        </>
      )}
    />
  ))
  .add('variants', () => (
    <InputFieldRenderer
      render={(value, setValue) => (
        <>
          <InputField variant="primary" label="Primary" value={value} onChangeText={setValue} />
          <InputField variant="search" placeholder="Search" value={value} onChangeText={setValue} />
        </>
      )}
    />
  ))
