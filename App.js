import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import * as React from "react";
const { width, height } = Dimensions.get('window');
import ButtonGradient from './ButtonGradient';
export default function App() {

  function SvgTop(){
    return (
      <View style={{width: '100%', height: 300, backgroundColor: '#34434d', borderBottomLeftRadius: 100}}/>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSvg}>
        <SvgTop />
      </View> 
      <View style={styles.container}> 
        <Text style={styles.titulo}>Hello!</Text>
        <Text style={styles.subTitle}>Sing in to your account</Text>
        <TextInput style={styles.input} placeholder='test@hotmail.com' />
        <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonGradient />
        <Text style={styles.forgotPassword}>Don't have an account</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#F1F1F1',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width,
  },
  titulo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#34434d'
  },
  subTitle:{
    fontSize: 20,
    color: 'gray'
  },
  input:{
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  forgotPassword:{
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  }
});
