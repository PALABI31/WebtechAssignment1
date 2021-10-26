import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style= {styles.container}>
      <Image 
       style = {styles.imageStyle}
        source = {require( `./assets/jenko.jpg`)}/>


      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.powerText}>Powerbike Shop</Text>
       <View style = {styles.buttonView}>
      <TouchableOpacity style ={styles.googleButton}>
        <Text style ={styles.buttonText}>
          Login with Gmail
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.appleButton}>
        <Text style ={styles.appleText}>
          Login with Apple 
        </Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Not a member?</Text>
      
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

imageStyle: {
  width : 250,
  height :250,
  borderRadius: 30,
  transform : [{rotate: "-45deg"}],
marginBottom: 90,
},
welcomeText:{
  fontSize: 30,
  textAlign: "center",
  
},
powerText:{
fontSize: 30,
textAlign: "center",
fontWeight : "bold",

},

buttonText:{
fontSize: 20,
textAlign: "center",
fontWeight: "bold",


},
googleButton: {
backgroundColor: "#D3D3D3",
padding: 10,
paddingVertical:15,
borderRadius: 10,
marginTop:20,

},
buttonView: {
width: "100%",
paddingHorizontal:20,

},
appleButton: {
  backgroundColor: "black",
  padding: 10,
  paddingVertical:15,
  borderRadius: 10,
  marginTop:20,
},
appleText: {
  fontSize: 20,
textAlign: "center",
fontWeight: "bold",
color: "white",

},
bottomText: {
  fontSize: 18,
marginTop:20,
color: "#888888",
},







  
});
