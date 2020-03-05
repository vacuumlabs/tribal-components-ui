import {Text} from '@components/ui'
import React, {useEffect, useRef, useState} from 'react'
import {Animated, Dimensions, Easing, Image, StyleSheet, View, ViewStyle} from 'react-native'
import RNCarousel from 'react-native-snap-carousel'

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: 'center',
  },
  slide: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 48,
    marginTop: 30,
    width: '100%',
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    color: '#081c2b',
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#83919b',
    paddingHorizontal: 32,
    paddingBottom: 24,
    textAlign: 'center',
  },
  progress: {
    backgroundColor: '#f2f5f8',
    borderRadius: 5,
    height: 10,
    width: 60,
  },
  progressBar: {
    backgroundColor: '#fd4344',
    height: 10,
    width: 40,
    borderRadius: 5,
  },
})

interface CarouselSlideDataProps {
  src: object
  title: string
  body: string
}

interface CarouselSlideProps {
  item: CarouselSlideDataProps
}

const CarouselSlide = ({item}: CarouselSlideProps) => (
  <View style={styles.slide}>
    <Image source={item.src} style={styles.image} resizeMode="contain" />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.bodyText}>{item.body}</Text>
  </View>
)

interface CarouselProps {
  data: CarouselSlideDataProps[]
  style?: ViewStyle
}

const Carousel = ({data, style}: CarouselProps) => {
  const {width} = Dimensions.get('window')
  const slideWidth = width - 32 // 16px offsets
  const carousel: any = useRef()
  const barPos = useRef(new Animated.Value(0)).current
  const [activeSlide, setActive] = useState(0)

  const moveBar = barPos.interpolate({
    inputRange: [0, data.length - 1],
    outputRange: [0, 20],
  })

  useEffect(() => {
    Animated.timing(barPos, {toValue: activeSlide, duration: 150, easing: Easing.linear}).start()
  }, [barPos, activeSlide])

  return (
    <View style={[styles.wrapper, style]}>
      <RNCarousel
        ref={carousel}
        renderItem={CarouselSlide}
        data={data}
        sliderWidth={slideWidth}
        itemWidth={slideWidth}
        sliderHeight={300}
        itemHeight={300}
        onBeforeSnapToItem={(index: number) => setActive(index)}
      />
      <View style={styles.progress}>
        <Animated.View style={[styles.progressBar, {transform: [{translateX: moveBar}]}]} />
      </View>
    </View>
  )
}

export default Carousel
