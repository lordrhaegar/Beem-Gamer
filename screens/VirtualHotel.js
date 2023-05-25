import { View, Text, Image, TouchableOpacity } from "react-native";
import { RendezVerse } from "../assets";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const VirtualHotelCard = ({ item }) => {
  const navigator = useNavigation();
  return (
    <View className="flex-column mt-2 py-2 px-2 items-center justify-start rounded-md  shadow-lg bg-white space-y-2 w-[48%] h-[200px]">
      <TouchableOpacity className="w-[100%] h-[75%] rounded-md"
      onPress={()=>{
        navigator.navigate("GameData", {param: item})
      }}
      >
      <Image
        source={{ uri: item?.thumbnail ? item?.thumbnail : RendezVerse }}
        className="w-[100%] h-[100%] rounded-md"
        resizeMode="cover"
      />
      </TouchableOpacity>
      <View className="flex-col w-[100%] items-start justify-start">
        <Text style={{ fontFamily: "Ob", fontSize: 20 }}>
          {item?.title.length > 14
            ? `${item?.title.slice(0, 14)}...`
            : item?.title}
        </Text>
        <View className="flex-row flex-wrap items-center space-x-1">
          <FontAwesome name="map-marker" size={15} color="#8A2BE2" />
          <Text style={{ fontFamily: "Or", fontSize: 14 }} numberOfLines={1}>
            {item?.genre.length > 20
              ? `${item?.genre.slice(0, 20)}...`
              : item?.genre}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VirtualHotelCard;
