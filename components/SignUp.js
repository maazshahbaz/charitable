import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';



export default function Login({navigation}) {
  
  return (
<View style={styles.container}>

    <Image
        style={{height:200,width:200}}
        source={require('../assets/donor.png')}
      />

    <TextInput 
    style={{backgroundColor:"#F2F2F2",height:40,width:300,borderRadius:5,marginBottom:10}}
    placeholder="     Name"
    />
    <TextInput 
    style={{backgroundColor:"#F2F2F2",height:40,width:300,borderRadius:5,marginBottom:10}}
    placeholder="     Email"
    />
    <TextInput 
    style={{backgroundColor:"#F2F2F2",height:40,width:300,borderRadius:5,marginBottom:10}}
    placeholder="     Password"
    />
    <TextInput 
    style={{backgroundColor:"#F2F2F2",height:40,width:300,borderRadius:5,marginBottom:20}}
    placeholder="     Confirm Password"
    />


    <TouchableOpacity style={{backgroundColor:"#25a9e2",height:40,width:300,borderRadius:5,justifyContent:"center"}}
    onPress={()=>{navigation.navigate("Login")}}
    
    
    >
        <Text style={{color:"white",textAlign:'center',alignSelf:"center"}}>Sign Up</Text>
    </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});
