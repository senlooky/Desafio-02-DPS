import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//importacion de pantallas
import PokeSongs from '../screens/PokeSongs'
import Pokemon from '../screens/Pokemon'

//import de navigation bottom tab
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import de icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function BottomTab(){
    
    const queryClient = new QueryClient();
    const TabBar= createBottomTabNavigator();

    return(
        <QueryClientProvider client={queryClient}>
        <NavigationContainer >
           
            <TabBar.Navigator styles={styles.tabBar} screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    
                    let iconName;

                    switch (route.name) {
                        case 'Poke Canciones':
                            iconName = focused ? 'play-circle' : 'play-circle-outline';
                            
                            break;
                    
                        case 'Pokemons':
                            iconName = focused ? 'poker-chip' : 'pokeball'
                    }
                    size= focused ? 30:20;
                    return<Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#e92929',
                tabBarInactiveTintColor: '#000',
                headerShown:false,
                tabBarShowLabel:false,   
                tabBarActiveBackgroundColor: '#f4dc26',
                tabBarInactiveBackgroundColor: '#ffe62d',

            })}>
                <TabBar.Screen name= 'Poke Canciones' component={PokeSongs}  />
                <TabBar.Screen name= 'Pokemons' component={Pokemon} />
            </TabBar.Navigator>
            
        </NavigationContainer>
        </QueryClientProvider>
    )


}

const styles = StyleSheet.create({
    tabBar:{
        height: 50, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderRadius: 15,
    },
    
    
  });