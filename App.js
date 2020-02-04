import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import ProductScreen from './screens/productsScreen';
import HomeStack from './routes/homeStack';
export default function App() {
  return (
    
   // <ProductScreen/>
    <HomeStack/>
    
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
