import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "../screens/authStack/RegistrationScreen"; 
import { LoginScreen } from "../screens/authStack/LoginScreen";
import { HomeBottomStack } from "./HomeBottomStack";


const MainStack = createStackNavigator();

export const AuthStack = () => {
    return (<MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
        <MainStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <MainStack.Screen options={{ headerShown: false }} name='Home' component={HomeBottomStack} />
    </MainStack.Navigator>)
};
