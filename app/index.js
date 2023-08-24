import {  Text, View } from 'react-native'
import React from 'react'
import { TopContext ,useContext} from '../helpers/Context'

export default function index() {
  const {isdark} = useContext(TopContext)
  return (
    <View>
      <Text>index {isdark}</Text>
    </View>
  )
}
