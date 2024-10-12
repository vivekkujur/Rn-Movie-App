
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./homeScreen"
import MovieScreen from "./movieScreen"
import PersonScreen from "./personScreen"

const Stack = createNativeStackNavigator()

export default function AppNavigationComponent(){

    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home"  component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Movie"  component={MovieScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Person"  component={PersonScreen} options={{headerShown:false}}/>

          </Stack.Navigator>
        </NavigationContainer>
      )
}