import React from 'react';
import { Text, View, StyleSheet, TextInput, } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
export default function Header({tmp, setTmp, setSearch}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Busca Tu pokemon</Text>
            <Text style={styles.description}>
                Busca tu pokemon favorito con el nombre exacto y sin mayusculas.
                Si encontrastes tu Pokemon pero quieres buscar uno nuevo: 😏</Text>
                <Text style={styles.description}>
                1. Borra el que buscastes. ❌
                </Text>
                <Text style={styles.description}>
                2. Recuerda que el nombre debe ir en minusculas. 🧐
                </Text>
                <Text style={styles.description}>
                3. dale ok o ✔ en tu teclado y Listo!
                </Text>
         
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
            placeholder='Nombre del pokemon...'
            style={styles.search}
            value={tmp}
            onChangeText={text => setTmp(text)}
            onEndEditing={() => setSearch(tmp)}
            />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginLeft:"-5%",
      marginTop: 5,
      paddingTop:35,
      backgroundColor: '#f4dc26',
       
    },
    search:{
            backgroundColor:'#C0C0C0',
            color:'#000',
            marginTop:10,
            marginBottom:10,
            
       
    
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    description:{
        marginTop:2,
        marginBottom:15,
        fontSize:15,
        color: '#A9A9A9',
        textAlign: 'center',
    },
    searchSection:{
      
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,    
    },
    searchIcon:{
        padding: 10,
    }
  })