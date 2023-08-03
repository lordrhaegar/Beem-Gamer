import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RendezVerse, profileImage, searchImage } from "../assets";
import { useState } from "react/cjs/react.development";
import { ActivityIndicator } from "react-native";
import VirtualHotelCard from "./VirtualHotel";
import * as Animatable from 'react-native-animatable';
const Discover = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let apiFetch = () => {
    setIsLoading(true);
    const url = `https://www.freetogame.com/api/games?category=${category}`;

    makeRequest = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
        return null;
      }
    };

    makeRequest();
  };

  return (
    <SafeAreaView>
      <View className="flex-column px-6 space-y-3">
        <View className="flex-row mt-5 justify-between items-start">
          <View className="flex-column space-y-2 justify-center">
            <Animatable.Text
              style={{ fontFamily: "Oeb", fontSize: 40 }}
              className="text-[#8A2BE2] text-3xl font-semibold "
              animation="fadeInUp"
            easing="ease-in-out"
            >
              Discover
            </Animatable.Text>
            <Animatable.Text
              style={{ fontFamily: "Or" }}
              className=" text-[#3c6072] text-[35px]"
              animation="fadeInUp"
            easing="ease-in-out"
            >
              numerous games
            </Animatable.Text>
            <Animatable.Text
              style={{ fontFamily: "Or" }}
              className=" text-[#3c6072] text-[35px]"
              animation="fadeInUp"
            easing="ease-in-out"
            >
              from our database
            </Animatable.Text>
          </View>
          <View>
            <Animatable.Image
              source={profileImage}
              className=" rounded-lg w-[50px] h-[50px]"
              animation="fadeInUp"
            easing="ease-in-out"
            />
          </View>
        </View>
        <View>
          <Animatable.View className="flex-row rounded-md space-x-2 items-center justify-center"
          animation="fadeInUp"
          easing="ease-in-out"
          >
            <TextInput
              style={{fontFamily:"Or"}}
              onChangeText={setCategory}
              placeholder="Enter Game Category"
              className="flex px-4 py-3 shadow-lg bg-white w-[83%] rounded-md"
            ></TextInput>
            <TouchableOpacity className=" flex py-3 items-center shadow-lg bg-black rounded-md w-[15%]"

                onPress={() => {
                  apiFetch();
                }}
                >

                <Image source={searchImage} className="w-[20px] h-[20px]" />

            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View className="flex-column space-y-5">
          <Animatable.View
          animation="fadeInUp"
          easing="ease-in-out"
          >
            <Text
              className="text-[#8A2BE2]"
              style={{ fontFamily: "Ob", fontSize: 20 }}
            >
              Top {category} Games
            </Text>
          </Animatable.View>
          <ScrollView>
            <Animatable.View className="flex-row space-y-2 items-center justify-between flex-wrap  w-[100%]"
            animation="fadeInUp"
            easing="ease-in-out"
            >
              {isLoading ? (
                <ActivityIndicator size="large" />
              ) :
              category == "" ? (
                <Text style={{fontFamily: "Ob", fontSize: 20}} className="w-[100%] flex-row h-[100%] items-center justify-center">No Category Selected</Text>
              ): (
                data?.map((item, index) => <VirtualHotelCard item={item} />)
              )}
            </Animatable.View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
  return inputValue;
};
export default Discover;
