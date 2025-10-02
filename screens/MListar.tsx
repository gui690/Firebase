
import { Text, View, TextInput,FlatList, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { useState } from 'react';
import React from "react";
import { TouchableOpacity } from "react-native";
import { auth ,firestore} from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilo"; 
import { Usuario } from '../model/Usuario';
import { Picker } from '@react-native-picker/picker';



export default function ListarLocalizacao() {

    const [uses,setUses] = useState<Usuario[]>([]); 

     const refUse = firestore.collection("Usuario")

          .doc(auth.currentUser?.uid)
          .collection("Use")

        const listar= () => {
            const subscriber = refUse
            .onSnaoshot( (query) => {
                const uses = [];
                query.forEach((documento) => {
                    uses.push({
                        ...documento.data(),
                        key: documento.id
                    });

                });
                setUses(uses);

            })
            return () => subscriber();
        }

    return(
        <View style={styles.container}>
            <FlatList
                data={uses}
                renderItem={({item}) => (
                    <View>
                        <Text> Nome: {item.nome}</Text>
                    </View>
                )}
            ></FlatList>
        </View>

    )

}