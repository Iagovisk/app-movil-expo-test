import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(){
   return (
      <TouchableOpacity style={styles.container}>
        <LinearGradient
            colors={['#FFB677', '#ff3cbd']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.button}
        >
            <Text style={styles.text}>SIGN IN</Text>
        </LinearGradient>
      </TouchableOpacity>
   ) 
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: 200,
        marginTop: 60,
    },
    text:{
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold'
    },
    button:{
        width: '80%',
        height: 50,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  