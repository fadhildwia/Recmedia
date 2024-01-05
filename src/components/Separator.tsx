import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle> | any
}

const Separator: React.FC<Props> = ({ style }) => {
  return (
    <View style={{ backgroundColor: '#7C7A7A', height: 1, ...style }} />
  )
}

export default Separator