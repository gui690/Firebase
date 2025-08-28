
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const[email,setEmail] =  useState('');
    const[senha,setSenha] =  useState('');

    const navigation = useNavigation();

    const logar = () => {
        auth
        .signInWithEmailAndPassword(email,senha)
        .then(userCredentials => {
            console.log('Logado como: ', userCredentials.user.email);
            navigation.replace("Home");
        })
        .catch(erro => alert(erro.message))
    }

  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
     
    <TextInput placeholder='Email'
               onChangeText={email => setEmail(email)}    
    />
    <TextInput placeholder='Senha'
            onChangeText={senha => setSenha(senha)}  
    />

    <Button title='Logar' onPress={logar}/>

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
});
