import { StatusBar } from 'expo-status-bar';

import { StyleSheet, SafeAreaView,ScrollView, View, Text} from 'react-native';

import BottomTab from './components/navegation/BottomTab'


export default function App() {  
  return (
    
   <>

         <StatusBar animated={false} backgroundColor="#f4dc26"  />
        <BottomTab/>
     
 </>
  );
}

const styles = StyleSheet.create({
  container: {

    marginTop:500,
  },
  
    
  
});
