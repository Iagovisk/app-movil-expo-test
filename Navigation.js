import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import EditScreen from "./screens/EditScreen";


const HomeStack = createNativeStackNavigator();

function MyStacks(){
    return(
        <HomeStack.Navigator
            inicialRouteName = "LoginScreen"
        >
            <HomeStack.Screen 
                name="LoginScreen" 
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />

            <HomeStack.Screen 
                name="MyTabs" 
                component={MyTabs}
                options={{
                    headerShown: false,
                }}
            />

            <HomeStack.Screen 
                name="EditScreen" 
                component={EditScreen}
            />

        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor :'purple',
            }}
        >

            <Tab.Screen 
                name="Home"
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>   
    );
}

export default function Navigation(){

    return(
        <NavigationContainer>
            <MyStacks />
        </NavigationContainer>
    );
}