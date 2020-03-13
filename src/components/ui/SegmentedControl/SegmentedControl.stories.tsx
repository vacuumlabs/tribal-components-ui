import {array, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import SegmentedControl from './SegmentedControl'

interface SegmentedControlRendererProps {
  render: (value: number, setValue: (value: number) => void) => JSX.Element
}

const SegmentedControlRenderer = ({render}: SegmentedControlRendererProps) => {
  const [value, setValue] = useState(0)
  return render(value, setValue)
}

storiesOf('SegmentedControl', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <SegmentedControlRenderer
      render={(value, setValue) => (
        <SegmentedControl
          selectedIndex={value}
          values={array('values', ['Option 1', 'Option 2', 'Option 3'])}
          onValueChange={setValue}
        />
      )}
    />
  ))
