import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { useQuery } from "@tanstack/react-query";

export default function Card({pokemon}){

    const colors = {
        grass: '#78C850',
        electric: '#F8D030',
        fire: '#F05030',
        water: '#3899F8',
        rock: '#B8A058',
        ghost: '#6060B0',
        shadow: '#6060B0',
        dragon: '#7860E0',
        dark: '	#7A5848',
        steel: '#A8A8C0',
        fairy: '#E79FE7',
        bug: '#A8B820',
        physhic: '#F870A0',
        flying: '#98A8F0',
        ground: '#E9D6A4',
        poison: '#B058A0',
        fighting: '#A05038',
        ice: '#58C8E0',
        normal: '#A8A090',
        unknown: '#aaa',
    };

    const getPokemon = async ({queryKey}) =>{
        const res = await fetch(queryKey[1]);
        return res.json();
    };

const {data, isLoading, error} = useQuery(['getPokemon', pokemon?.url], getPokemon,);

    return(
        <View style={[styles.container, {backgroundColor: colors[data?.types[0]?.type?.name]}]}>
            <Image style={styles.image} source={{uri: data?.sprites?.other['official-artwork']?.front_default, }}/>
            <Text style={styles.name}>{data?.name}</Text>
            <Text style={styles.Number}>{data &&(data?.id).toString().padStart(3, '0')}</Text>
            <Text style={styles.info}>Peso: {data?.height} kg</Text>
            <Text style={styles.info}>Tipo: {data?.types[0]?.type?.name}</Text>
        </View>
    )
    
} 

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
      borderRadius: 15,
      borderWidth: 3,
      borderColor: '#fff',
      shadowColor: '#000000',
      shadowOffset: {
        width: 14,
        height: 14,
    },
    shadowOpacity: 50,
    shadowRadius: 20,
    elevation: 10,
        width:"45%",
        height: height * 0.3,
        backgroundColor:"#000",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight:"5%",
        marginTop:15,
    },
    image: {
        height:150,
        width:150,
        marginBottom:5,
    },
    name: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5 ,
    },
    Number:{
        color: '#000',
        fontSize: 15,
    },
    info:{
        fontSize: 15,
        color:'#000'
    }
});