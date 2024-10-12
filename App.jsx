import AppNavigationComponent from "./src/appNavigation"
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigationComponent />
   
    </GestureHandlerRootView>
  )

  
}
export default App
