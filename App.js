import 'react-native-gesture-handler';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/navigation/AuthStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold, Roboto_500Medium, Roboto_400Regular
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}