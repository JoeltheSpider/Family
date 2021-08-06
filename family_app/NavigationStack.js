import 'react-native-gesture-handler';
import React from 'react';
import Login from './utils/Login';
import Home from './utils/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const screens = {
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
    }
}

const Stack = createStackNavigator();

const NavigationStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;