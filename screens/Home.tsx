
import {TouchableOpacity, Text, ImageBackground, KeyboardAvoidingView,Image  } from 'react-native';
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
     source={require("../assets/fundo.jpg")} 
     resizeMode='stretch'
     style={styles.fundo}
     >
 
      <Text style={styles.aviso}>Bem Vindo  {auth.currentUser?.email} !</Text>
     
     
     <TouchableOpacity 
        style={styles.buttonHome}  
        onPress={sair}
     >
         <Text style={styles.buttonText} >Sair</Text>
      </TouchableOpacity>

    </ImageBackground >
    </KeyboardAvoidingView>
  );
}