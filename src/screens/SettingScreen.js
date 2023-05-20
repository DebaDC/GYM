import React from 'react';
import { View, Text, Button } from 'react-native';


const SettingScreen = ({ }) => {
  return (
    <View 
    style={{
      height:'100%',
      backgroundColor:'#ff99cc',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:5}}>SettingScreen</Text>
      
    </View>
  );
};

export default SettingScreen;