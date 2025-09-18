
import {TouchableOpacity, Text, ImageBackground, KeyboardAvoidingView  } from 'react-native';
import React from "react";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilo"; 

export default function Home() {

   const navigation = useNavigation();

  const sair = ()=>{
    auth
    .signOut()
    .then (() => {
      navigation.replace('Login')
    })
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.key}>
    <ImageBackground  
     source={require("../assets/fundo1.png")} 
     resizeMode='stretch'
     style={styles.fundo}
     >
    
      <Text style={styles.aviso}>Bem Vindo  {auth.currentUser?.email} !</Text>
     
     
     <TouchableOpacity 
        style={styles.button}  
        onPress={sair}
     >
         <Text style={styles.buttonText} >Logout</Text>
      </TouchableOpacity>

    </ImageBackground >
    </KeyboardAvoidingView>
  );
}