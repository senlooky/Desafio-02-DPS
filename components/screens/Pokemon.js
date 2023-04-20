import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, ScrollView, FlatList, RefreshControl, } from 'react-native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Card from '../component/Card';
import Header from '../component/Header';

export default function Pokemon(){

  const [tmp, setTmp] = useState('');
  const [search, setSearch] = useState(null);

  const GET_ALL_URL = 'https://pokeapi.co/api/v2/pokemon';
  
//llamar a todos los pokemons
  const getAllPokemon = async({pageParam = 1}) => {
  const res= await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`)
  return res.json();
  };

  //tomar el resultado solo de un pokemon en el buscador
  const getPokemon = async ({queryKey}) =>{
    const res = await fetch(`${GET_ALL_URL}/${queryKey[1]}`);
    return res.json();
};

const {data: searchResult, isLoading: searchLoading, error: searchError, isFetching: searchFetching} = useQuery(['getPokemon', search], getPokemon,{
  enabled: !!search,
  onError: (error) => {
    console.log('Error fetching data:', error)
  }
});

//que nos renderize la siguiente pagina de api
  const {data, isLoading, hasNextPage, fetchNextPage, isFetching, refetch, error} = useInfiniteQuery(['getAllPokemon'], getAllPokemon,{
    getNextPageParam: lastPage => {
      if(lastPage.next !== null){
        return lastPage.next;
      }
      return lastPage;
    },
    onError: (error) => {
      console.log('Error fetching data:', error);
    }
  });

  //que siga cargando las demas si aun existen mas
  const loadMore = () => {
    if(hasNextPage){
      fetchNextPage();
    }
  }
  return(
    <View style={styles.container}>
      <Header tmp={tmp} setTmp={setTmp} setSearch={setSearch} />
      {!search &&(
      <FlatList
      data={data?.pages.map(page => page.results).flat()}
      renderItem={({item}) => <Card pokemon={item}/>}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      refreshControl={<RefreshControl  refreshing={isLoading || isFetching } size="large"/> }
      refreshing={isLoading || isFetching }
      onRefresh={refetch}
      />
      )}
      {searchResult && (<Card pokemon={{url: `${GET_ALL_URL}/${searchResult.id}`}} />)}
      {searchLoading || searchFetching || isLoading || isFetching && <Text>Buscando pokemon... </Text>}
      {searchError && <Text>Pokemon no encontrado, vuelvelo a escribir... </Text>}
      {error && <Text>Ha ocurrido un error</Text>}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{

    marginTop: 25,
    paddingLeft: '5%',
     backgroundColor:'#f4dc26'
  },
})