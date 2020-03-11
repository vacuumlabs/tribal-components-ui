import Text from '@components/ui/Text/Text'
import React from 'react'
import {Dimensions, Image, ImageSourcePropType, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  image: {
    marginHorizontal: 16,
    maxWidth: Dimensions.get('window').width - 32,
    alignSelf: 'center',
  },
  title: {
    color: '#2b2b2b',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  secondaryTitle: {
    color: '#fd4344',
    fontWeight: 'bold',
  },
})

type BannerProps = {
  title: string
  secondaryTitle: string
  imgSrc: ImageSourcePropType
}

const Banner = ({title, secondaryTitle, imgSrc}: BannerProps) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text variant="body" style={styles.secondaryTitle}>
          {secondaryTitle}
        </Text>
      </View>
      <Image source={imgSrc} style={styles.image} resizeMode="contain" />
    </View>
  )
}

export default Banner
