import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen ,  { SocialButton } from "react-native-login-screen";


export default function Login({navigation}) {
  
  return (
<LoginScreen
  logoImageSource={require("../assets/donor.png")}
  onLoginPress={() => {navigation.navigate("Home")}}
  onSignupPress={() => {navigation.navigate("Sign Up")}}
  onEmailChange={(email) => {}}
  onPasswordChange={(password) => {}}
>

  <SocialButton
    text="Continue with Facebook"
    onPress={() => {}}
  />
</LoginScreen>
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
