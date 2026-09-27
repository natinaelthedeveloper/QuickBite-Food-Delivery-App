import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import {useNavigation} from '@react-navigation/native'
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Restaurant', {...item})}>
    
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 24,

          // iOS shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 7,

          // Android shadow
          elevation: 6,

          marginRight: 24,
        }}
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{uri: urlFor(item.image).url()}}
        />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">
            {item.name}
          </Text>

          <View className="flex-row items-center gap-x-1">
            <Image
              source={require("../assets/images/fullStar.webp")}
              className="h-4 w-4"
            />

            <Text className="text-xs">
              <Text className="text-green-700">
                {item.stars}
              </Text>

              <Text className="text-gray-700">
                ({item.review} review) ·{" "}
                <Text className="font-semibold">
                  {item?.type?.name}
                </Text>
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center gap-x-3">
            <Icon.MapPin
              color="gray"
              width="15"
              height="15"
            />

            <Text className="text-gray-700 text-xs">
              BOL · {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}