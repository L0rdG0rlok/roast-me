import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const TabsPage = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-white'>TabsPage</Text>
      <Link className='text-white' href={"/"}>INDEX</Link>
    </View>
  )
}

export default TabsPage