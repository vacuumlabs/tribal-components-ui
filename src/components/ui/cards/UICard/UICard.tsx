import {LinearGradient} from 'expo-linear-gradient'
import React, {ReactElement} from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {formatMessage} from '../../../../utils/formats'
import Icon from '../../Icon/Icon'
import Text from '../../Text/Text'

export const CARD_HEIGHT = (Dimensions.get('window').width - 32) / 1.64 // divide by card ratio

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  card: {
    height: CARD_HEIGHT,
    minHeight: 200,
    alignSelf: 'stretch',
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#015397',
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pan: {
    position: 'absolute',
    top: 77,
  },
  cardEmbossText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 24,
    letterSpacing: 3,
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0,0,0,0.12)',
    textShadowRadius: 2,
    textShadowOffset: {height: 2, width: 0},
    opacity: 0.56,
    marginLeft: 24,
    marginTop: 24,
  },
  nameText: {
    color: '#fff',
    fontWeight: '700',
  },
  cardLogo: {
    position: 'absolute',
    bottom: 12,
    right: 24,
    width: 50,
    height: 50,
  },
  chip: {
    position: 'absolute',
    top: 40,
    left: 24,
  },
  icon: {
    position: 'absolute',
    top: 44,
    left: 94,
  },
  loading: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  orderCard: {
    marginTop: 'auto',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 16,
  },
  cardProcessing: {
    marginBottom: 16,
    marginTop: 'auto',
    justifyContent: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 24,
    fontSize: 14,
    color: '#fff',
  },
  expiryContainer: {
    position: 'absolute',
    bottom: -4,
    left: 0,
  },
  expiryLabelText: {
    color: '#fff',
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.71,
    marginLeft: 24,
  },
  expiryValueText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 1.6,
    opacity: 0.64,
    marginBottom: 24,
    marginLeft: 24,
  },
  action: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 24,
    left: 28,
  },
  actionIcon: {
    width: 8,
    marginLeft: 10,
    top: -1,
  },
  invisibleButton: {
    height: '100%',
  },
})

const CARD_GRADIENT = {
  colors: ['#1bc9a7', '#015397'],
  start: {x: 0, y: 1.2},
  end: {x: 0.9, y: 0.25},
}

const logos: {[key: string]: ImageSourcePropType} = {
  mastercard: require('../../../../../assets/images/card/mastercard-logo.png'),
  visa: require('../../../../../assets/images/card/visa-white-logo.png'),
}

interface CardBackgroundProps {
  children: ReactElement | ReactElement[]
}

const CardBackground = ({children}: CardBackgroundProps) => {
  return (
    <View style={styles.card}>
      <LinearGradient {...CARD_GRADIENT} style={[StyleSheet.absoluteFill, styles.background]} />
      <Image
        source={require('../../../../../assets/images/card/img-card-chip.png')}
        style={styles.chip}
      />
      <Image
        source={require('../../../../../assets/images/card/img-card-icon.png')}
        style={styles.icon}
      />
      {children}
    </View>
  )
}

interface UICardProps {
  onPress?: () => void
  loading?: boolean
  error?: Error
  canOrder?: boolean
  handleOrder?: () => void
  canActivate?: boolean
  handleActivate?: () => void
  orderProcessing?: boolean
  expirationDate?: string
  maskedPan?: string
}

const UICard = ({
  onPress,
  loading,
  error,
  canOrder,
  handleOrder,
  canActivate,
  handleActivate,
  orderProcessing,
  expirationDate,
  maskedPan,
}: UICardProps) => {
  if (loading)
    return (
      <View style={styles.card}>
        <ActivityIndicator style={styles.loading} />
      </View>
    )
  if (error)
    return (
      <View style={styles.card}>
        <Text style={styles.error}>{formatMessage('card', 'errLoading')}</Text>
      </View>
    )

  if (canOrder)
    return (
      <CardBackground>
        <View style={styles.pan}>
          <Text style={styles.cardEmbossText}>0000 1234 5678 9000</Text>
        </View>
        {handleOrder ? (
          <View style={styles.action}>
            <Text variant="headline" style={styles.nameText} onPress={handleOrder}>
              {formatMessage('card', 'orderCard')}
            </Text>
            <Icon name="chevron-down" color="#fff" style={styles.actionIcon} />
          </View>
        ) : (
          <View style={styles.expiryContainer}>
            <Text style={styles.expiryLabelText}>{formatMessage('card', 'expiry')}</Text>
            <Text style={styles.expiryValueText}>
              01/{String(new Date().getFullYear() + 2).slice(-2)}
            </Text>
          </View>
        )}
        <Image source={logos['mastercard']} style={styles.cardLogo} resizeMode="contain" />
      </CardBackground>
    )

  if (orderProcessing) {
    return (
      <CardBackground>
        <View style={styles.pan}>
          <Text style={styles.cardEmbossText}>0000 1234 5678 9000</Text>
        </View>
        <View style={styles.action}>
          <Text variant="headline" style={styles.nameText}>
            {formatMessage('card', 'cardProcessing')}
          </Text>
        </View>
      </CardBackground>
    )
  }

  if (canActivate) {
    return (
      <CardBackground>
        <View style={styles.pan}>
          <Text style={styles.cardEmbossText}>0000 1234 5678 9000</Text>
        </View>
        <View style={styles.action}>
          <Text variant="headline" style={styles.nameText} onPress={handleActivate}>
            {formatMessage('card', 'activateCard')}
          </Text>
          <Icon name="chevron-down" color="#fff" style={styles.actionIcon} />
        </View>
        <Image source={logos['mastercard']} style={styles.cardLogo} resizeMode="contain" />
      </CardBackground>
    )
  }

  return (
    <CardBackground>
      <TouchableWithoutFeedback onPress={onPress} style={styles.invisibleButton}>
        <View>
          <View style={styles.pan}>
            <Text style={styles.cardEmbossText}>{maskedPan}</Text>
          </View>

          {onPress ? (
            <View style={styles.action}>
              <Text variant="headline" style={styles.nameText}>
                {formatMessage('card', 'viewCard')}
              </Text>
              <Icon name="chevron-down" color="#fff" style={styles.actionIcon} />
            </View>
          ) : (
            <View style={styles.expiryContainer}>
              <Text style={styles.expiryLabelText}>{formatMessage('card', 'expiry')}</Text>
              <Text style={styles.expiryValueText}>{expirationDate}</Text>
            </View>
          )}
          <Image source={logos['mastercard']} style={styles.cardLogo} resizeMode="contain" />
        </View>
      </TouchableWithoutFeedback>
    </CardBackground>
  )
}

export default UICard
