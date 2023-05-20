import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View
    style={{
      height:'100%',
      backgroundColor:'#33e6fa',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:5}}>HomeScreen</Text>
      
    </View>
  );
};

export default HomeScreen;