import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
const MainTab = createBottomTabNavigator();

export const Home = () => {
    return (
        <MainTab.Navigator
            screenOptions={() => ({
                // headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
                tabBarStyle: {
                    height: 60,
                    paddingHorizontal: 81,
                    justifyContent: 'center'
                },
            })}>
            <MainTab.Screen name="Posts" component={PostsScreen}
                options={() => ({
                    tabBarIcon: ({ focused, size, color }) => (
                        <TouchableOpacity style={[styles.iconTab, focused && styles.activeIcon]}>
                            <Ionicons name="grid-outline" size={size} color={color} />
                        </TouchableOpacity>
                    )
                })} />
            <MainTab.Screen name="CreatePosts" component={CreatePostsScreen}
                options={() => ({
                    tabBarIcon: ({ focused, size, color }) => (
                        <TouchableOpacity style={[styles.iconTab, focused && styles.activeIcon]}>
                            <Ionicons name="add-outline" size={size} color={color} />
                        </TouchableOpacity>
                    )
                })} />
            <MainTab.Screen name="Profile" component={ProfileScreen}
                            options={() => ({
                                tabBarIcon: ({ focused, size, color }) => (
                                    <TouchableOpacity style={[styles.iconTab, focused && styles.activeIcon]}>
                                        <Feather name="user" size={size} color={color} />
                                    </TouchableOpacity>
                                )
                            })} />
        </MainTab.Navigator>
    )
};

const styles = StyleSheet.create({
    iconTab: {
        height: 40, 
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIcon: {
        backgroundColor: '#FF6C00'
    }
})