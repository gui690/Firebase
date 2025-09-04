
import { Text, View , TextInput} from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../estilo"; 

export default function Registro() {

      const[email,setEmail]       = useState('');
      const[senha,setSenha]       = useState('');
      const[nome,setNome]         = useState('');
      const[telefone,setTelefone] = useState('')
  
      const navigation = useNavigation();

     const registrar = () => {
        auth
        .createUserWithEmailAndPassword(email,senha)
        .then(userCredentials => {
            console.log('Logado como: ', userCredentials.user.email);
            navigation.replace("Home");
        })
        .catch(erro => alert(erro.message))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Cadastro de Usuário</Text>
      
          <TextInput style={styles.input} placeholder='Nome'
                     onChangeText={nome => setNome(nome)}    
          />
          <TextInput style={styles.input} placeholder='Email'
                     onChangeText={email => setEmail(email)}    
          />
          <TextInput style={styles.input} placeholder='Senha'
                  onChangeText={senha => setSenha(senha)}  
          />
            <TextInput style={styles.input} placeholder='Telefone'
                     onChangeText={telefone => setTelefone(telefone)}    
          />
      
          <TouchableOpacity style={styles.button} onPress={registrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
         
    </View>
  );
}


