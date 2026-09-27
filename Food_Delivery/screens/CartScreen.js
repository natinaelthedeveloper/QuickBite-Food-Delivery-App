import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../slices/cartSlice';
import { useTheme } from '../context/ThemeContext';
import { urlFor } from '../sanity';

export default function CartScreen() {
  const { activeTheme } = useTheme();
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);

  const cartItems = useSelector(selectCartItems) || [];
  const cartTotal = useSelector(selectCartTotal) || 0;

  const [groupedItems, setGroupedItems] = useState({});

  const dispatch = useDispatch();

  const deliveryFee = 2;

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      // Check for _id or id
      const id = item?._id || item?.id;
      if (id) {
        if (group[id]) {
          group[id].push(item);
        } else {
          group[id] = [item];
        }
      }
      return group;
    }, {});

    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">

      {/* Header */}
      <View className="relative py-4 shadow-sm">

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: activeTheme.bgColor(1),
          }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft
            strokeWidth={3}
            stroke="white"
          />
        </TouchableOpacity>

        <View>
          <Text className="text-center font-bold text-xl">
            Your Cart
          </Text>

          <Text className="text-center text-gray-500">
            {restaurant?.name || 'Restaurant'}
          </Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View
        style={{
          backgroundColor: activeTheme.bgColor(0.2),
        }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />

        <Text className="flex-1 pl-4">
          Deliver in 20-30 minutes
        </Text>

        <TouchableOpacity>
          <Text
            className="font-bold"
            style={{
              color: activeTheme.text,
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          const dish = items[0];

          if (!dish) return null;

          return (
            <View
              key={key}
              className="flex-row items-center gap-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              {/* Quantity */}
              <Text
                className="font-bold"
                style={{
                  color: activeTheme.text,
                }}
              >
                {items.length} x
              </Text>

              {/* Image */}
              <Image
                className="h-14 w-14 rounded-full"
                source={dish?.image ? { uri: urlFor(dish.image).url() } : require('../assets/images/delivery.png')}
              />

              {/* Name */}
              <Text className="flex-1 font-bold text-gray-700">
                {dish?.name}
              </Text>

              {/* Price */}
              <Text className="font-semibold text-base">
                ETB {dish?.price}
              </Text>

              {/* Remove One */}
              <TouchableOpacity
                className="p-1 rounded-full"
                onPress={() =>
                  dispatch(
                    removeFromCart({
                      id: dish?._id || dish?.id,
                    })
                  )
                }
                style={{
                  backgroundColor: activeTheme.bgColor(1),
                }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Totals */}
      <View
        style={{
          backgroundColor: activeTheme.bgColor(0.2),
        }}
        className="p-6 px-8 rounded-t-3xl gap-y-4"
      >

        {/* Subtotal */}
        <View className="flex-row justify-between">
          <Text className="text-gray-500">
            Subtotal
          </Text>

          <Text className="text-gray-500">
            ETB {cartTotal}
          </Text>
        </View>

        {/* Delivery Fee */}
        <View className="flex-row justify-between">
          <Text className="text-gray-500">
            Delivery Fee
          </Text>

          <Text className="text-gray-500">
            ETB {deliveryFee}
          </Text>
        </View>

        {/* Order Total */}
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-bold">
            Order Total
          </Text>

          <Text className="text-gray-700 font-bold">
            ETB {deliveryFee + cartTotal}
          </Text>
        </View>

        {/* Place Order */}
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('OrderPreparing')
            }
            style={{
              backgroundColor: activeTheme.bgColor(1),
            }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}