import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { HomeImage } from "../assets";
import * as Animatable from "react-native-animatable";
SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const [fontsloaded] = useFonts({
    Or: require("../assets/fonts/Oxanium-Regular.ttf"),
    Ob: require("../assets/fonts/Oxanium-Bold.ttf"),
    Om: require("../assets/fonts/Oxanium-Medium.ttf"),
    Oeb: require("../assets/fonts/Oxanium-ExtraBold.ttf"),
  });
  const LoadedView = useCallback(async () => {
    if (fontsloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded]);
  if (!fontsloaded) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        className="flex-row px-5 mt-5 space-x-2 items-center "
        onLayout={LoadedView}
      >
        <View>
          <Animatable.Text
            animation="fadeInUp"
            easing="ease-in-out"
            style={{ fontFamily: "Ob", fontSize: 30 }}
            className="text-[#8A2BE2] text-3xl font-semibold "
          >
            Beem
          </Animatable.Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUp" easing="ease-in-out" className="px-5 mt-5 space-y-3" onLayout={LoadedView}>
        <Text
          style={{ fontFamily: "Or" }}
          className=" text-[#3c6072] text-[42px]"
        >
          Compare Games at the
        </Text>
        <Text
          style={{ fontFamily: "Ob" }}
          className="text-[#8A2BE2] text-[38px]"
        >
          Speed of Thought
        </Text>
        <Text
          className="text-[#3c6072] text-base"
          style={{ fontFamily: "Om" }}
        >Unveils the metaverse's limitless wonders, where tech propels you through boundless realms.</Text>
      </Animatable.View>
      <View className="w-[400px] h-[400px] bg-[#8A2BE2] absolute top-80 -right-36 rounded-full"></View>
      <View className="  w-[100%] min-h-[100px] bottom-[-45px] relative justify-center items-center">
        <View className="w-[70px] h-[70px] bg-black absolute left-10 top-20  rounded-full"></View>
        <Animatable.Image
          animation="fadeInUp"
          easing="ease-in-out"
          source={HomeImage}
          className=" object-cover"
        />

        <TouchableOpacity  className=" border-[#8A2BE2] border-l-2 border-r-2 border-t-4 w-[100px] h-[50px] items-center justify-center rounded-full absolute bottom-[100px]"
        onPress={()=>{
            navigation.navigate("Discover");
        }}>
            <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" className="bg-[#8A2BE2] w-[90px] h-[40px] items-center justify-center rounded-full">
              <Text style={{ fontFamily: "Om" }}>Go</Text>
            </Animatable.View>
        </TouchableOpacity>

      </View>
      <View className="w-[400px] h-[400px] bg-[#e99265] bottom-20 right-40 rounded-full"></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
