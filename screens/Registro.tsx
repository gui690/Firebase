
import { Text, View , TextInput, KeyboardAvoidingView, ImageBackground,Image} from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../estilo"; 
import { Usuario } from '../model/Usuario';

export default function Registro() {

     const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({})
  
      const navigation = useNavigation();

     const registrar = () => {
        auth
        .createUserWithEmailAndPassword(formUsuario.email,formUsuario.senha)
        .then(userCredentials => {
            console.log('Logado como: '+ userCredentials.user.email);
         
            const refUsuario = firestore.collection("Usuario");
            const idUsuario  = refUsuario.doc(auth.currentUser.uid);
            idUsuario.set({
                  id    : auth.currentUser.uid,
                  nome  : formUsuario.nome,
                  email : formUsuario.email,
                  senha : formUsuario.senha,
                  fone  : formUsuario.fone
            })
               navigation.replace("Menu");



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

      <Text style={styles.titulo} >Cadastro de Usuário</Text>
      
          <TextInput style={styles.input} placeholder='Nome'
                     onChangeText={nome => setFormUsuario({
                        ...formUsuario,
                        nome : nome
                     })}    
          />
          <TextInput style={styles.input} placeholder='Email'
                     onChangeText={email => setFormUsuario({
                        ...formUsuario,
                        email : email
                     })}      
          />
          <TextInput style={styles.input} placeholder='Senha'
                  onChangeText={senha => setFormUsuario({
                        ...formUsuario,
                        senha : senha
                     })}    
          />
            <TextInput style={styles.input} placeholder='Telefone'
                     onChangeText={telefone => setFormUsuario({
                        ...formUsuario,
                        fone : telefone
                     })}       
          />
      
          <TouchableOpacity style={styles.button} onPress={registrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
                <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
         
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}


