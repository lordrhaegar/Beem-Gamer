import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from './screens/HomeScreen'
import Discover from './screens/Discover';
import GameData from './screens/GameData';
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Sign up" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="GameData" component={GameData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

