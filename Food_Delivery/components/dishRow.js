import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../slices/cartSlice';
import { urlFor } from '../sanity';
import { useTheme } from '../context/ThemeContext';

export default function DishRow({ item }) {
  const { activeTheme } = useTheme();
  const dispatch = useDispatch();

  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      
      {/* Dish Image */}
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{uri: urlFor(item.image).url()}}
      />

      <View className="flex flex-1 space-y-3">
        
        {/* Dish Information */}
        <View className="pl-3">
          <Text className="text-xl">
            {item.name}
          </Text>

          <Text className="text-gray-700">
            {item.description}
          </Text>
        </View>

        {/* Price + Quantity */}
        <View className="flex-row justify-between pl-3 items-center">
          
          <Text className="text-gray-700 text-lg font-bold">
            ETB {item.price}
          </Text>

          <View className="flex-row items-center">

            {/* Minus Button */}
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{
                backgroundColor: activeTheme.bgColor(1),
                opacity: !totalItems.length ? 0.5 : 1,
              }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>

            {/* Quantity */}
            <Text className="px-3">
              {totalItems.length}
            </Text>

            {/* Plus Button */}
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{
                backgroundColor: activeTheme.bgColor(1),
              }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
}