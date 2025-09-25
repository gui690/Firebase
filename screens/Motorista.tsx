
import { Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { useState } from 'react';
import React from "react";
import { TouchableOpacity } from "react-native";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilo"; 

export default function Motorista() {

    const[email,setEmail] =  useState('');
    const[senha,setSenha] =  useState('');
    const[motorista,setMotorista] =  useState('');

    const navigation = useNavigation();

    const logar = () => {
        auth
        .signInWithEmailAndPassword(email,senha)
        .then(userCredentials => {
            console.log('Logado como: ', userCredentials.user.email);
            navigation.replace("Localizacao");
        })
        .catch(erro => alert(erro.message))
    }

  return (
     <KeyboardAvoidingView behavior='padding' style={styles.key}>
        <ImageBackground  
         source={require("../assets/fundo.jpg")} 
         resizeMode='stretch'
         style={styles.fundo}
         >

      <Text style={styles.titulo}>Tela do Motorista</Text>
     
    <TextInput style={styles.input} placeholder='Email'
               onChangeText={email => setEmail(email)}    
    />
    <TextInput style={styles.input} placeholder='Senha'
            onChangeText={senha => setSenha(senha)}  
    />
     <TextInput style={styles.input} placeholder='Motorista'
            onChangeText={motorista => setMotorista(motorista)}  
    />

    <TouchableOpacity style={styles.button} onPress={logar}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Registrar')}>
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>

    </ImageBackground>
    </KeyboardAvoidingView>
  );
}


