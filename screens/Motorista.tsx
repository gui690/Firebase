
import { Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { useState } from 'react';
import React from "react";
import { TouchableOpacity } from "react-native";
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilo"; 
import { Usuario } from '../model/Usuario';

export default function Motorista() {

    const [formMot, setFormMot] = useState<Partial<Usuario>>({})
  
     const navigation = useNavigation();

     const Salvar = () => {

         const refLoc = firestore.collection("Usuario")

          .doc(auth.currentUser?.uid)
          .collection("Mot")

         const novoMot = new Motorista(formMot);

         const idMot  = refMot.doc();
            novoMot.id = idMot.id;
            idMot.set(novaMot.toFirestore())


          alert('Motorista adicionada com sucesso!!')
          setFormMot({});
    }
    //-------------------------------------------------------------------------
 /*
     const refLoc = firestore.collection("Usuario")
 
           .doc(auth.currentUser?.uid)
           .collection("Loc")
 
          const novaLoc = new Localizacao(formLoc);
 
          const idLoc  = refLoc.doc();
             novaLoc.id = idLoc.id;
             idLoc.set(novaLoc.toFirestore())
 
 
           alert('Localização adicionada com sucesso!!')
           setFormLoc({}); */
    


  return (
     <KeyboardAvoidingView behavior='padding' style={styles.key}>
        <ImageBackground  
         source={require("../assets/fundo.jpg")} 
         resizeMode='stretch'
         style={styles.fundo}
         >

      <Text style={styles.titulo}>Tela do Motorista</Text>
     
     <TextInput style={styles.input} placeholder='Nome'
                         onChangeText={nome => setFormMot({
                            ...formMot,
                            nome : nome
                         })}      
              />
    <TextInput style={styles.input} placeholder='Email'
                         onChangeText={email => setFormMot({
                            ...formMot,
                            email : email
                         })}      
              />
    <TextInput style={styles.input} placeholder='Senha'
                         onChangeText={senha => setFormMot({
                            ...formMot,
                            senha : senha
                         })}      
              />
      <TextInput style={styles.input} placeholder='Motorista'
                         onChangeText={motorista => setFormMot({
                            ...formMot,
                            motorista : motorista
                         })}      
              />

    <TouchableOpacity style={styles.button} onPress={Salvar}>
      <Text style={styles.buttonText}>Salvar</Text>
    </TouchableOpacity>
                         
     <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Menu')}>
                    <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>

    </ImageBackground>
    </KeyboardAvoidingView>
  );
}


