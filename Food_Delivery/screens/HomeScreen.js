import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { StatusBar } from "expo-status-bar";
import { useTheme } from '../context/ThemeContext';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../api';

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const { activeTheme, changeTheme } = useTheme();

  useEffect(() => {
    getFeaturedRestaurants().then(data => {
      setFeaturedRestaurants(data);
    });
  }, []);

  return (
    <SafeAreaView className="bg-white p-3 pb-10">
      <StatusBar style="light" />
      
      {/* search bar */}
      <View className="flex-row items-center gap-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Rest..." className="ml-2 flex-1" />
          <View className="flex-row items-center border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Addis Abeba, BOL</Text>
          </View>
        </View>

        {/* Dynamic theme switcher button */}
        <TouchableOpacity 
          onPress={changeTheme}
          style={{ backgroundColor: activeTheme.bgColor(1) }} 
          className="p-3 rounded-full"
        >
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </TouchableOpacity>
      </View>

      {/* main */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />

        <View className="mt-5">
          {featuredRestaurants.map((item, index) => (
            <FeaturedRow 
              key={index}
              title={item.name}
              restaurants={item.restaurants}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}