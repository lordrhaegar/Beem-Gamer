import { View, Text, Image, Linking, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
const openLink = async (url) => {
    // Checking if the device supports opening URLs
    const supported = await Linking.canOpenURL(url);
  
    if (supported) {
      // Opening the URL in the browser
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URL: ", url);
    }
  };
const linkOpener = (theUrl)=>{
openLink(theUrl);
} 
const screenWidth = Dimensions.get('window').width; 
const GameData = ({route}) => {
    const info = route?.params?.param;
    // console.log(info);  
  return (
    <SafeAreaView>
    <View
        className="flex px-5 py-5 h-[100%] space-y-4 items-start "
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
        style={{ fontFamily: "Ob", fontSize: 40 }}
        >
        {info.title}
        </Text>
        <View className="flex-row  space-x-1 items-center justify-between w-[370px]  h-[50px]">
            <View className=" flex-row space-x-1 items-center h-[100%]">
            <View className="flex-row h-[25px] w-[25px] items-center justify-center rounded-sm bg-red-100 shadow-lg">
                {info.platform =="PC (Windows)"? (<MaterialCommunityIcons name='laptop' color="#d58574" size={20} />):(<MaterialCommunityIcons name='web' color="#d58574" size={20}/>)}
            </View>
            <View>
                <Text numberOfLines={2} style={{fontFamily: "Ob"}}>{info.platform}</Text>
            </View>
            </View>
            <View className=" flex-row space-x-1 items-center h-[100%]">
            <View className="flex-row h-[25px] w-[25px] items-center justify-center rounded-sm bg-red-100 shadow-lg">
            <MaterialCommunityIcons name='library' color="#d58574" size={16}/>
            </View>
            <View>
                <Text numberOfLines={2} style={{fontFamily: "Ob"}}>{info.developer}</Text>
            </View>
            </View>
            <View className=" flex-row space-x-1 items-center h-[100%]">
            <View className="flex-row h-[25px] w-[25px] items-center justify-center rounded-sm bg-red-100 shadow-lg">
            <FontAwesome name='gamepad' size={16} color="#d58574"/>
            </View>
            <View>
                <Text numberOfLines={2} style={{fontFamily: "Ob"}}>{info.genre}</Text>
            </View>
            </View>
        </View>
      </View>
      <View className="flex-col  space-y-3 items-center justify-between w-[370px] ">
        <Text style={{fontFamily: "Or", fontSize: 17}}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        
        </Text>
        <Text style={{fontFamily: "Or", fontSize: 17}}>
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
        </Text>

        <Text style={{fontFamily: "Or", fontSize: 17}}>
         Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 
        </Text>
      </View>
      <View style={{width: 370}} className=" flex-row justify-center items-center">
      <TouchableOpacity
      className=" px-10 rounded-md py-5 bg-[#8A2BE2]"
      onPress={()=>{
        linkOpener(info.game_url)
      }}
      >
        <Text style={{fontFamily: "Ob", color: "#ffffff", fontSize: 16 }}>
            Game Site
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default GameData