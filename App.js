
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ChatScreens from "./screens/ChatScreens";
import UpdateScreen from "./screens/UpdateScreen";
import CommunitiesScreen from "./screens/CommunitiesScreen";
import CallsScreen from "./screens/CallsScreen";


const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Chats" component={ChatScreens} options={{headerShown: false}}/>
        <Tabs.Screen name="Updates" component={UpdateScreen} options={{headerShown: false}}/>
        <Tabs.Screen name="Communities" component={CommunitiesScreen} options={{headerShown: false}}/>
        <Tabs.Screen name="Calls" component={CallsScreen} options={{headerShown: false}} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


