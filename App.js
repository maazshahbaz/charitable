import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home';
import List from './components/List';
import Case from './components/Case';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >

<Stack.Screen name="Login" component={Login}></Stack.Screen>
<Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
<Stack.Screen name="Home" component={Home}></Stack.Screen>
<Stack.Screen name="List" component={List}></Stack.Screen>
<Stack.Screen name="Case" component={Case}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
