import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const GameData = ({route}) => {
    const info = route?.params?.param;
    // console.log(info);  
  return (
    <SafeAreaView>
    <View
        className="flex px-5 mt-5 h-[100%] space-y-4 items-start "
      >
      <View className=" shadow-lg justify-center rounded-md w-[100%] h-[200px]">
        <Image
        source={{uri:info.thumbnail}}
        className="w-[369px] rounded-md h-[200px]"
        resizeMode='cover'
        />
      </View>
      <View 
      className="space-y-2"
      >
        <Text 
        className="text-[#8A2BE2]"
        style={{ fontFamily: "Ob", fontSize: 20 }}
        >
        {info.title}
        </Text>
        <Text
        style={{fontFamily:"Or"}}
        >
        {info.genre}
        </Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default GameData