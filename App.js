import { StyleSheet, View, StatusBar } from 'react-native';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { useFonts, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function App() {
      const [fontsLoaded] = useFonts({
        Roboto_700Bold, Roboto_500Medium
    })

    if (!fontsLoaded) {
        return null; 
    }
  return (
    <>
      <View style={styles.container}>
        <RegistrationScreen />
        <StatusBar theme="auto" />
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
