import React, { useState } from 'react';
import {
  BACKGROUND,
  NAMEICON,
  NUMBERICON,
  PINKDOT,
  REFICON,
} from '../constants/imagepath';

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
import { BLACK, ORANGE, WHITE, YELLOW, PINK } from '../constants/color';
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({

  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Please enter valid Phone Number')
    .required('Phone number is required'),
  fullName: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required('Full Name is required'),
  referalCode: Yup.string()

});



export default Login = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const btnPress = () => {
    console.log(number);
  };
  return (
    <>
      <Formik
        initialValues={{ fullName: '', phoneNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}

      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={BACKGROUND}>
              <Pressable onPress={btnPress} style={styles.skip}>
                <Text style={{ color: WHITE, alignSelf: 'center', marginTop: 5 }}>
                  Skip
                </Text>
              </Pressable>


              <View style={styles.cards}>
                <Image
                  source={PINKDOT}
                  style={{
                    height: 48,
                    width: 45,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginLeft: 275,
                    marginTop: -20

                  }}

                />
                <Text
                  style={{
                    ...styles.headertxt,
                    marginTop: -15,
                    fontSize: 18,
                    marginBottom: 7


                  }}>
                  Create a Account
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 330,
                    marginTop: -20
                  }}>
                  <View
                    style={{
                      width: 50,
                      color: 'white',
                      alignSelf: 'center',
                      borderBottomLeftRadius: 7,
                      borderTopLeftRadius: 7,
                      height: 49,
                      width: 50,
                      marginTop: 50,
                      marginLeft: 22,
                      marginBottom: 20,
                      backgroundColor: WHITE,
                    }}>
                    <Image style={{ ...styles.countrycode }} source={NAMEICON}></Image>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <TextInput
                      onChangeText={handleChange('fullName')}
                      placeholder="Enter your Full Name"
                      placeholderTextColor={'gray'}
                      maxLength={50}
                      minLength={4}
                      value={values.fullName}

                      style={{
                        ...styles.txtinput,
                        backgroundColor: WHITE,
                        marginTop: 50,
                        marginLeft: 18,
                        marginRight: 40,
                        width: '93%',

                        color: BLACK,
                        borderBottomRightRadius: 7,
                        borderTopRightRadius: 7,
                      }}></TextInput>
                    <View style={{ height: 20, width: '90%' }}>
                      {errors.fullName && <Text style={{ color: 'red' }}>{errors.fullName}</Text>}
                    </View>
                  </View>
                </View>


                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 330,
                    marginTop: -40
                  }}>
                  <View
                    style={{

                      color: 'white',
                      alignSelf: 'center',
                      borderBottomLeftRadius: 7,
                      borderTopLeftRadius: 7,
                      height: 49,
                      width: 50,
                      marginTop: 40,
                      marginLeft: 22,
                      // marginRight:-10,
                      marginBottom: 20,

                      backgroundColor: WHITE,
                    }}>
                    <Image style={{ ...styles.countrycode }} source={NUMBERICON}></Image>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }} >
                    <TextInput
                      onChangeText={handleChange('phoneNumber')}
                      keyboardType="number-pad"
                      placeholder="Enter Mobile Number"
                      placeholderTextColor={'gray'}
                      maxLength={10}
                      value={values.phoneNumber}
                      style={{
                        ...styles.txtinput,
                        backgroundColor: 'white',
                        marginTop: 40,
                        marginRight: 40,
                        marginLeft: 18,
                        color: 'black',
                        width: '93%',
                        borderBottomRightRadius: 7,
                        borderTopRightRadius: 7,
                      }}></TextInput>
                    <View style={{ height: 20, width: '90%' }}>
                      {errors.fullName && <Text style={{ color: 'red' }}>{errors.fullName}</Text>}
                    </View>
                  </View>
                </View>


                {/* <Text style={{ paddingLeft: 22,marginTop:-18, fontSize: 12 }}>
                  Enter 10 digit mobile number to verify.
                </Text> */}

                <Text
                  style={{
                    paddingLeft: 22,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 20,
                    fontSize: 15,
                    marginBottom: 10
                  }}>
                  Have a referral code?
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 330,
                    marginTop: -10,
                  }}>
                  <View
                    style={{
                      // width: 30,
                      color: 'white',
                      alignSelf: 'center',
                      borderBottomLeftRadius: 7,
                      borderTopLeftRadius: 7,
                      height: 49,
                      width: 50,
                      marginLeft: 30,
                      // marginRight:-10,
                      backgroundColor: 'white',
                    }}>
                    <Image style={styles.countrycode} source={REFICON}></Image>
                  </View>
                  <TextInput
                    onChangeText={setNumber}
                    // keyboardType="number-pad"
                    placeholder="Enter Referal Code"
                    placeholderTextColor={'gray'}

                    style={{
                      ...styles.txtinput,
                      backgroundColor: 'white',
                      marginTop: 15,
                      color: 'black',
                      marginBottom: 15,
                      marginRight: 30,
                      borderBottomRightRadius: 7,
                      borderTopRightRadius: 7,

                    }}></TextInput>
                </View>

                <Pressable onPress={() => navigation.navigate('Signin')} style={styles.btn}>
                  <Text
                    style={{
                      ...styles.headertxt,
                      borderBottomWidth: 0,
                      marginTop: 7,
                      alignSelf: 'auto',
                      fontSize: 14,
                    }}>
                    SIGNUP
                  </Text>
                </Pressable>
                <Text style={{ alignSelf: 'center', marginTop: 7 }}>
                  Already Registered?
                </Text>
                <Pressable onPress={() => navigation.navigate('Signin')} style={{ alignItems: 'center' }}>

                  <Text
                    style={{
                      color: "#FF00C7",
                      borderBottomWidth: 0.2,
                      borderBottomColor: "#FF00C7",
                    }}>
                    Sign in
                  </Text>
                </Pressable>
              </View>
            </ImageBackground>

          </View>
        )}
      </Formik>

      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

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
    height: 550,
    width: '87%',
    backgroundColor: 'black',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    marginTop: 60,

  },
  txtinput: {
    width: '70%',
    height: 49,
    alignSelf: 'center',
    // backgroundColor:"red",
    //borderBottomWidth: 1,
    borderColor: 'red',
    color: 'white',
  },
  countrycode: {

    alignSelf: 'center',
    borderBottomWidth: 0,
    height: '50%',
    width: '50%',
    marginTop: 13,
    // marginBottom:10,
    // marginLeft:60,

    backgroundColor: 'white',
  },
  btn: {
    height: 45,
    width: '90%',
    backgroundColor: ORANGE,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 5,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    alignItems: 'flex-end',
    marginLeft: 240,
    marginTop: 2,
    // marginBottom:200,
    width: 65,
    height: 32,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1,
    // backgroundColor:'yellow',
  },
});