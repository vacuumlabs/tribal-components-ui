import {LinearGradient} from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import Button from '../../Button/Button'
import Link from '../../Link/Link'
import Text from '../../Text/Text'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  person: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradient: {
    height: 132,
    width: 264,
    borderTopLeftRadius: 132,
    borderTopRightRadius: 132,
    position: 'absolute',
  },
  lottieView: {
    height: 132,
    width: 264,
  },
  gradientWrapper: {
    alignItems: 'center',
    height: 139,
  },
  balanceWrapper: {
    alignItems: 'center',
  },
  integerBalanceText: {
    color: 'rgb(8, 28, 43)',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 20,
    marginTop: 40,
  },
  centBalanceText: {
    color: 'rgb(131, 145, 155)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentsButton: {
    marginTop: 21,
  },
})

const GRADIENT_COLORS = ['rgba(242, 245, 248, 1)', 'rgba(242, 245, 248, 0)']

interface UIPersonHeaderProps {
  integerBalance?: string
  centsBalance?: string
  buttonText: string
  hasNoData?: boolean
  onPressProfile: () => void
  onPressSearch?: () => void
  onPressButton: () => void
}

const UIPersonHeader = ({
  integerBalance,
  centsBalance,
  buttonText,
  hasNoData,
  onPressProfile,
  onPressSearch,
  onPressButton,
}: UIPersonHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.person}>
        <Link icon="human" onPress={onPressProfile} testID="dashboard.profile" />
        {onPressSearch && <Link icon="search" onPress={onPressSearch} />}
      </View>
      <View style={styles.gradientWrapper}>
        {hasNoData ? (
          <LottieView
            source={require('../../../../../assets/lottie/person-header.json')}
            autoPlay
            loop
            style={styles.lottieView}
            speed={1}
          />
        ) : (
          <>
            <LinearGradient colors={GRADIENT_COLORS} style={styles.gradient} />
            <View style={styles.balanceWrapper}>
              <Text style={styles.integerBalanceText}>
                {integerBalance}
                <Text style={styles.centBalanceText}> {centsBalance}</Text>
              </Text>
              <Button style={styles.paymentsButton} title={buttonText} onPress={onPressButton} />
            </View>
          </>
        )}
      </View>
    </View>
  )
}

export default UIPersonHeader
