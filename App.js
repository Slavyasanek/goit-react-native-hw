import 'react-native-gesture-handler';
import { StyleSheet, View, StatusBar } from 'react-native';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { useFonts, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { LoginScreen } from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from './src/screens/Home';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold, Roboto_500Medium
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen options={{headerShown: false}} name='Registration' component={RegistrationScreen}/>
        <MainStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
        <MainStack.Screen options={{headerShown: false}} name='Home' component={Home}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
