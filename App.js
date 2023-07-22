import 'react-native-gesture-handler';
import { useFonts, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/navigation/AuthStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold, Roboto_500Medium
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}