import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'
import React, {useEffect, useRef, useState} from 'react'
import {Animated, StyleSheet, TextInput, TextInputProps, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  searchContainer: {
    marginBottom: 0,
  },
  hasError: {
    borderBottomColor: '#d32223',
  },
  inputFieldWrapper: {
    paddingLeft: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#dae1e6',
  },
  searchInputFieldWrapper: {
    paddingLeft: 0,
    borderBottomColor: 'transparent',
  },
  withoutBorderBottom: {
    borderBottomColor: 'transparent',
  },
  inputField: {
    paddingVertical: 8,
  },
  input: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 0,
    fontSize: 15,
    color: '#000',
    minHeight: 34,
  },
  searchLabel: {
    paddingBottom: 8,
    paddingLeft: 4,
  },
  searchInput: {
    backgroundColor: '#f2f5f8',
    flexGrow: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 0,
    textAlignVertical: 'center',
  },
  centerInputField: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  label: {
    color: '#83919b',
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    backgroundColor: '#fff',
  },
  error: {
    marginTop: 5,
  },
})

const INPUT_FONTSIZE = {
  small: 13,
  medium: 15,
  large: 24,
}

interface InputFieldRefForwardProps {
  variant?: 'primary' | 'search'
  label?: string
  placeholder?: string
  value: string
  errorMessage?: string | null | false
  keyboardType?: TextInputProps['keyboardType']
  autoCapitalize?: TextInputProps['autoCapitalize']
  secureTextEntry?: TextInputProps['secureTextEntry']
  onChangeText: TextInputProps['onChangeText']
  onSubmitEditing?: TextInputProps['onSubmitEditing']
  autoFocus?: TextInputProps['autoFocus']
  multiline?: TextInputProps['multiline']
  editable?: TextInputProps['editable']
  underline?: boolean
  centerInputField?: boolean
  inputFontSize?: 'small' | 'medium' | 'large'
  rightButtonTitle?: string
  rightButtonOnPress?: () => void
  testID?: TextInputProps['testID']
}

interface InputFieldProps extends InputFieldRefForwardProps {
  innerRef?: React.Ref<TextInput>
}

const InputField = ({
  variant,
  label,
  placeholder,
  value,
  errorMessage,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
  onChangeText,
  onSubmitEditing,
  autoFocus,
  multiline,
  editable,
  underline = true,
  centerInputField,
  inputFontSize,
  rightButtonTitle,
  rightButtonOnPress,
  testID,
  innerRef,
}: InputFieldProps) => {
  const [focused, setFocused] = useState(!!autoFocus)
  const floating = focused || !!value
  const floatingAnimated = useRef(new Animated.Value(floating ? 1 : 0)).current
  const placeholderText = placeholder && (!label || floating) ? placeholder : ''

  const fontSize = INPUT_FONTSIZE[inputFontSize || (variant === 'search' ? 'small' : 'medium')]

  useEffect(() => {
    Animated.timing(floatingAnimated, {toValue: floating ? 1 : 0, duration: 350}).start()
  }, [floatingAnimated, floating])

  const labelTopValue = floatingAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [fontSize * 1.5, 0],
  })
  const labelFontSizeValue = floatingAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [fontSize, 13],
  })

  const AnimatedText = Animated.createAnimatedComponent(Text)

  return (
    <View
      style={[styles.container, variant === 'search' && styles.searchContainer]}
      pointerEvents="auto"
    >
      <View
        style={[
          styles.inputFieldWrapper,
          !underline && styles.withoutBorderBottom,
          variant === 'search' && styles.searchInputFieldWrapper,
          !!errorMessage && styles.hasError,
        ]}
      >
        <View style={styles.inputField}>
          {!!label &&
            (variant === 'search' ? (
              <Text style={[styles.label, styles.searchLabel]}>{label}</Text>
            ) : (
              <AnimatedText
                style={[
                  {top: labelTopValue, fontSize: labelFontSizeValue, lineHeight: fontSize},
                  styles.label,
                  centerInputField && styles.centerInputField,
                ]}
              >
                {label}
              </AnimatedText>
            ))}
          <TextInput
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            style={[
              styles.input,
              centerInputField && styles.centerInputField,
              variant === 'search' && styles.searchInput,
              {fontSize},
              multiline && {minHeight: 120},
            ]}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            ref={innerRef}
            multiline={multiline}
            editable={editable}
            placeholder={placeholderText}
            placeholderTextColor="#83919b"
            testID={testID}
          />
          {!!rightButtonOnPress && (
            <Button
              style={styles.rightButton}
              title={rightButtonTitle}
              onPress={rightButtonOnPress}
              variant="tertiary"
              size={inputFontSize}
            />
          )}
        </View>
      </View>
      {!!errorMessage && (
        <Text variant="error" style={[styles.error, centerInputField && styles.centerInputField]}>
          {errorMessage}
        </Text>
      )}
    </View>
  )
}

export default React.forwardRef<
  TextInput,
  RequireAtLeastOne<InputFieldRefForwardProps, 'label' | 'placeholder'>
>((props, ref) => <InputField innerRef={ref} {...props} />)
