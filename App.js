import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-rn"
import { AuthProvider } from './hooks/useAuth';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC- Higher Order Component - wraps a child component */}
      <AuthProvider>
        {/* passes down autho stuff to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
      
  );
}


