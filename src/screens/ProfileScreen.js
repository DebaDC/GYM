import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View 
    style={{
      height:'100%',
      backgroundColor:'#ff4f56',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:4}}>ProfileScreen</Text>
      
    </View>
  );
};

export default ProfileScreen;