import React, {Ref, RefObject} from 'react'
import {StyleSheet, Text as RNText, TextProps as RNTextProps} from 'react-native'

const FONTS: {[key: string]: {[key: string]: {[key: string]: string}}} = {
  pxgrotesk: {
    normal: {
      300: 'PxGrotesk-Light',
      400: 'PxGrotesk-Regular',
      normal: 'PxGrotesk-Regular',
      700: 'PxGrotesk-Bold',
      bold: 'PxGrotesk-Bold',
    },
    italic: {
      300: 'PxGrotesk-Light',
      400: 'PxGrotesk-Regular',
      normal: 'PxGrotesk-Regular',
      700: 'PxGrotesk-Bold',
      bold: 'PxGrotesk-Bold',
    },
  },
  lato: {
    normal: {
      100: 'Lato-Hairline',
      200: 'Lato-Thin',
      300: 'Lato-Light',
      400: 'Lato-Regular',
      normal: 'Lato-Regular',
      500: 'Lato-Medium',
      600: 'Lato-Semibold',
      700: 'Lato-Bold',
      bold: 'Lato-Bold',
      800: 'Lato-Heavy',
      900: 'Lato-Black',
    },
    italic: {
      100: 'Lato-HairlineItalic',
      200: 'Lato-ThinItalic',
      300: 'Lato-LightItalic',
      400: 'Lato-Italic',
      normal: 'Lato-Italic',
      500: 'Lato-MediumItalic',
      600: 'Lato-SemiboldItalic',
      700: 'Lato-BoldItalic',
      bold: 'Lato-BoldItalic',
      800: 'Lato-HeavyItalic',
      900: 'Lato-BlackItalic',
    },
  },
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 15,
    lineHeight: 22,
  },
  body: {
    fontSize: 13,
    lineHeight: 16,
  },
  button: {
    fontSize: 14,
    fontWeight: '700',
  },
  error: {
    fontSize: 13,
    lineHeight: 16,
    color: '#d32223',
  },
})

// leaving this loosely typed as linter is mad about getting attributes from style objects
const get = (object: any, key: string, defaultValue: any) => {
  if (object) {
    return object[key] || defaultValue
  }
  return defaultValue
}

interface TextProps extends RNTextProps {
  variant?: 'headline' | 'body' | 'button' | 'error'
  innerRef?: string | ((instance: RNText | null) => void) | RefObject<RNText> | null
  children?: string | React.ReactNode[]
}

const Text: React.FC<TextProps> = ({variant = 'body', innerRef, ...props}) => {
  const activeFontFamily = 'lato'
  const fontWeight = get(props.style, 'fontWeight', 'normal')
  const fontStyle = get(props.style, 'fontStyle', 'normal')

  return (
    <RNText
      {...props}
      ref={innerRef}
      allowFontScaling={false}
      style={[
        styles[variant],
        props.style,
        {fontFamily: FONTS[activeFontFamily][fontStyle][fontWeight]},
      ]}
    />
  )
}

export default React.forwardRef<RNText, TextProps>((props: TextProps, ref: Ref<RNText>) => (
  <Text {...props} innerRef={ref} />
))
