import LottieView from 'lottie-react-native'
import React from 'react'
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native'
import Icon, {IconName} from '../Icon/Icon'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 24,
    borderWidth: 1,
  },
  touchableDisabled: {
    opacity: 0.5,
  },
  touchableFullWidth: {
    flex: 1,
  },
  touchableGrouped: {
    marginLeft: 16,
  },
  touchableGroupedSmall: {
    marginLeft: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  small: {
    height: 32,
    borderRadius: 16,
  },
  medium: {
    height: 40,
    borderRadius: 20,
  },
  large: {
    height: 48,
    borderRadius: 24,
  },
  iconSpacing: {
    marginRight: 4,
  },
  lottieView: {
    height: 15,
  },
})

const COLORS = {
  backgroundColor: {
    primary: '#fd4344',
    'primary-submit': '#fd4344',
    secondary: 'transparent',
    filled: '#015397',
    tertiary: 'transparent',
    danger: '#d32223',
  },
  underlayColor: {
    primary: '#fd4344',
    'primary-submit': '#fd4344',
    secondary: '#015397',
    filled: '#015397',
    tertiary: '#e5e5e5',
    danger: '#d32223',
  },
  iconColor: {
    primary: '#fff',
    'primary-submit': '#fff',
    secondary: '#015397',
    tertiary: '#83919b',
    filled: '#fff',
    danger: '#fff',
  },
  textColor: {
    primary: '#ffffff',
    'primary-submit': '#ffffff',
    secondary: '#015397',
    tertiary: '#83919b',
    filled: '#ffffff',
    danger: '#ffffff',
  },
  borderColor: {
    primary: '#fd4344',
    'primary-submit': '#fd4344',
    secondary: '#015397',
    filled: '#015397',
    tertiary: 'transparent',
    danger: '#d32223',
  },
}

type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

const FONT_WEIGHT: {[key: string]: FontWeightType} = {
  primary: 'normal',
  'primary-submit': 'bold',
  secondary: 'normal',
  tertiary: 'normal',
  filled: 'normal',
  danger: 'normal',
}

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void
  title?: string
  icon?: IconName
  isGrouped?: boolean
  isFullWidth?: boolean
  variant?: 'primary' | 'primary-submit' | 'secondary' | 'tertiary' | 'filled' | 'danger'
  size?: 'small' | 'medium' | 'large'
  style?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  disabled?: boolean
  loading?: boolean
  testID?: string
}

const Button = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  isGrouped,
  isFullWidth,
  size = 'medium',
  disabled,
  style,
  titleStyle,
  loading,
  testID,
}: ButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={COLORS.underlayColor[variant]}
      disabled={disabled || loading}
      style={[
        styles.touchable,
        disabled && !loading && styles.touchableDisabled,
        isGrouped && styles.touchableGrouped,
        isGrouped && size === 'small' && styles.touchableGroupedSmall,
        isFullWidth && styles.touchableFullWidth,
        {backgroundColor: COLORS.backgroundColor[variant]},
        {borderColor: COLORS.borderColor[variant]},
        style,
      ]}
      testID={testID}
    >
      <View style={[styles.container, styles[size]]}>
        {loading ? (
          <LottieView
            source={require('../../../../assets/lottie/loading-bullets.json')}
            autoPlay
            loop
            speed={1}
            style={styles.lottieView}
            // TODO colorFilters not supported
            // colorFilters={[{keypath: '*', color: COLORS.textColor[variant]}]}
          />
        ) : (
          <>
            {!!icon && (
              <Icon
                color={COLORS.iconColor[variant]}
                name={icon}
                style={title ? styles.iconSpacing : undefined}
              />
            )}
            {!!title && (
              <Text
                variant="button"
                style={[
                  {color: COLORS.textColor[variant], fontWeight: FONT_WEIGHT[variant]},
                  titleStyle,
                ]}
              >
                {title}
              </Text>
            )}
          </>
        )}
      </View>
    </TouchableHighlight>
  )
}

export default Button
