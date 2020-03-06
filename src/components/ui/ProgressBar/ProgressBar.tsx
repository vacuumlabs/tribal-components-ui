import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import {Svg, G, Path} from 'react-native-svg'

interface ProgressBar {
  scale?: number
  value: number
  total: number
  color?: string
  style?: StyleProp<ViewStyle>
}

const ProgressBar = ({scale = 1, value, total, color = '#FD4344', style}: ProgressBar) => {
  const percent = Math.max(Math.min((value / total) * 100, 100), 0)
  const progress = percent - 100
  // const width = Dimensions.get('window').width / (Dimensions.get('window').width - 48)

  return (
    <Svg width={68 * scale} height={36 * scale} style={style}>
      <G transform="translate(2.00000, 2.00000)" fill="none" strokeLinecap="round" scale={scale}>
        <Path
          d="M64,32 C64,14.326888 49.673112,0 32,0 C14.326888,0 0,14.326888 0,32"
          stroke="#F2F5F8"
          strokeWidth={(2 / scale) * 2}
        />
        <Path
          d="M64,32 C64,14.326888 49.673112,0 32,0 C14.326888,0 0,14.326888 0,32"
          stroke={color}
          strokeWidth={(2 / scale) * 2}
          strokeDasharray={100}
          strokeDashoffset={progress}
        />
      </G>
    </Svg>
  )
}

export default ProgressBar
