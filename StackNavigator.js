import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LogInScreen from './screens/LogInScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user = false;
  return (
    <Stack.Navigator>
        {user ? (
<>           
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            </> 
        ) :(

           
            <Stack.Screen name="LogIn" component={LogInScreen} />
        )} 
    </Stack.Navigator>
  )
}

export default StackNavigator