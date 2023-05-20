import React, {useState} from 'react';
import {
  BACKGROUND,
  NAMEICON,
  NUMBERICON,
  PINKDOT,
  REFICON,
} from '../constants/Imageath';
import {SIGNIN} from '../constants/Imageath';
import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {black, white, yellow} from '../constants/Colors';

export default Login = () => {
  const [number, setNumber] = useState('');
  const btnPress = () => {
    console.log(number);
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={{flex: 1}} source={BACKGROUND}>
          <Pressable onPress={btnPress} style={styles.skip}>
            <Text style={{color: 'white', alignSelf: 'center', marginTop: 10}}>
              Skip
            </Text>
          </Pressable>
          

          <View style={styles.cards}>
            <Image
              source={PINKDOT}
              style={{
                height: 80,
                width: 75,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginLeft: 320,
                // backgroundColor: yellow,
              }}
              
            />
            <Text
              style={{
                ...styles.headertxt,
                marginTop:0,
            
                // backgroundColor:yellow
              }}>
              Create a Account
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                width: 330,
              }}>
              <View
                style={{
                  width: 50,
                  color: 'white',
                  alignSelf: 'center',
                  borderBottomLeftRadius: 7,
                  borderTopLeftRadius: 7,
                  height: 48,
                  width: 50,
                  marginTop: 50,
                  backgroundColor: white,
                }}>
                <Image style={styles.countrycode} source={NAMEICON}></Image>
              </View>
              <TextInput
                onChangeText={setNumber}
                placeholder="Enter your Full Name"
                placeholderTextColor={'gray'}
                style={{
                  ...styles.txtinput,
                  backgroundColor: 'white',
                  marginTop: 50,
                  color:black,
                  borderBottomRightRadius: 7,
                  borderTopRightRadius: 7,
                }}></TextInput>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                width: 330,
              }}>
              <View
                style={{
                  width: 50,
                  color: 'white',
                  alignSelf: 'center',
                  borderBottomLeftRadius: 7,
                  borderTopLeftRadius: 7,
                  height: 48,
                  width: 50,
                  marginTop: 30,
                  backgroundColor: white,
                }}>
                <Image style={styles.countrycode} source={NUMBERICON}></Image>
              </View>
              <TextInput
                onChangeText={setNumber}
                keyboardType="number-pad"
                placeholder="Enter Mobile Number"
                placeholderTextColor={'gray'}
                style={{
                  ...styles.txtinput,
                  backgroundColor: 'white',
                  marginTop: 30,
                  color:black,
                  borderBottomRightRadius: 7,
                  borderTopRightRadius: 7,
                }}></TextInput>
            </View>

            <Text style={{paddingLeft: 25, marginTop: 10, fontSize: 12}}>
              Enter 10 digit mobile number to verify.
            </Text>

            <Text
              style={{
                paddingLeft: 25,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 20,
                fontSize: 15,
              }}>
              Have a referral code?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                width: 330,
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 50,
                  color: 'white',
                  alignSelf: 'center',
                  borderBottomLeftRadius: 7,
                  borderTopLeftRadius: 7,
                  height: 48,
                  width: 50,
                  backgroundColor: white,
                }}>
                <Image style={styles.countrycode} source={REFICON}></Image>
              </View>
              <TextInput
                onChangeText={setNumber}
                keyboardType="number-pad"
                placeholder="Enter Referal Code"
                placeholderTextColor={'gray'}
                
                style={{
                  ...styles.txtinput,
                  backgroundColor: 'white',
                  marginTop: 15,
                  color:black,
                  marginBottom: 15,
                  borderBottomRightRadius: 7,
                  borderTopRightRadius: 7,
                }}></TextInput>
            </View>

            <Pressable onPress={btnPress} style={styles.btn}>
              <Text
                style={{
                  ...styles.headertxt,
                  borderBottomWidth: 0,
                  marginTop: 7,
                  alignSelf: 'auto',
                  fontSize: 17,
                }}>
                SIGNUP
              </Text>
            </Pressable>
            <Text style={{alignSelf: 'center', marginTop: 50}}>
              Already Registered?
            </Text>
            <Pressable onPress={btnPress} style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'violet',
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'violet',
                }}>
                Sign in
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    // marginTop:10,
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
  cards: {
    height: 700,
    width: '80%',
    backgroundColor: black,
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    marginTop: 50,
    
  },
  txtinput: {
    width: '80%',
    alignSelf: 'center',
    // backgroundColor:"red",
    //borderBottomWidth: 1,
    borderColor: 'red',
    color: 'white',
  },
  countrycode: {
    width: 30,
    alignSelf: 'center',
    borderBottomWidth: 0,
    height: '65%',
    width: '70%',
    marginTop: 8,
    
    backgroundColor: 'white',
  },
  btn: {
    height: 60,
    width: '75%',
    backgroundColor: '#FF5C00',
    alignSelf: 'center',
    marginTop: 50,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    alignItems: 'flex-end',
    marginLeft: 300,
    // marginBottom:200,
    width: 90,
    height: 45,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    // backgroundColor:'yellow',
  },
});