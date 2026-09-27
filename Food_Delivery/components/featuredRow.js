import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './restaurantCard'
import { useTheme } from '../context/ThemeContext'

export default function FeaturedRow({title, description, restaurants}) {
  const { activeTheme } = useTheme();

  return (
    <View >
    <View className="flex-row justify-between items-center px-4">
        <View >
      <Text className="font-bold text-lg">{title}</Text>
      <Text className="text-gray-500 text-xs">
        {description}
      </Text>
    </View>
    <TouchableOpacity >
        <Text style={{color: activeTheme.text}} className="font-semibold">See All</Text>
    </TouchableOpacity>
    </View>
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal: 15
    }}
    className="overflow-visible py-5">
        {
            restaurants.map((restaurant, index)=>{
                return (
                    <RestaurantCard
                    item={restaurant}
                    key={index} />
                )
            })
        }
    </ScrollView>
    </View>
  )
}