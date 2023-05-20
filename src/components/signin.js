import React, { useState } from "react";
import { BACKGROUND } from './src/constants/imagepath';
import { SINNUMBER } from './src/constants/imagepath';
import { PINKDOT } from './src/constants/imagepath';
import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({

  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
export default Login = () => {
  const [number, setNumber] = useState("");
  const btnPress = () => {
    console.log(number);
  };
  return (
    <>

      <View style={styles.container}>
        <ImageBackground style={{ flex: 1 }} source={BACKGROUND}>

          <Pressable onPress={btnPress} style={styles.skip}>
            <Text style={{
              color: 'white', alignSelf: 'center', marginTop: 5,

            }}
            >Skip</Text>
          </Pressable>
          <View style={styles.cards}>
            <Image source={PINKDOT} style={{ height: 46, width: 45, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -20, marginLeft: 300, marginBottom: 20, }} />
            <Text
              style={{
                ...styles.headertxt,
                borderBottomWidth: 0,
                marginTop: -30
              }}
            >
              Sign In to Continue
            </Text>
            <Formik
              initialValues={{ phoneNumber: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors }) => (
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <View style={{
                    ...styles.countrycode, marginTop: 40, borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                  }} >
                    <Image style={{ ...styles.countrycode, height: "40%", width: "58%", marginTop: 15, marginRight: 15, marginLeft: 20, }} source={SINNUMBER}></Image>
                  </View>
                  <View style={{flex:1,flexDirection:'column'}}>
                  <TextInput
                    onChangeText={handleChange('phoneNumber')}
                    keyboardType="number-pad"
                    placeholder="Enter your Mobile Number"
                    placeholderTextColor={"gray"}
                    maxLength={10}
                    value={values.phoneNumber}
                    
                    style={{
                      ...styles.txtinput, backgroundColor: "white", marginTop: 40, borderBottomRightRadius: 7,
                      borderTopRightRadius: 7, paddingLeft: 10
                    }}
                  ></TextInput>
                  <View style={{height:20}}>
                  {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>}
                  </View>
                  </View>
                </View>
              )}
            </Formik>
            <Pressable onPress={btnPress} style={styles.btn}>
              <Text
                style={{
                  ...styles.headertxt,
                  borderBottomWidth: 0,
                  marginTop: 6,
                  alignSelf: "auto",
                  fontSize: 14
                }}
              >
                SEND
              </Text>
            </Pressable>

            <Pressable>
              <View>
                <Text style={{ ...styles.headertxt, fontSize: 15, marginTop: 25 }}>
                  Not Yet Registered?
                </Text>
                <Text style={{ ...styles.headertxt, color: "#FF00C7", fontSize: 15, borderBottomWidth: 0.5, borderColor: "#FF00C7", marginTop: 0 }}>
                  Sign Up
                </Text>
              </View>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headertxt: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    marginTop: 100,
    borderBottomWidth: 3,
    paddingBottom: 5
  },
  cards: {
    height: 330,
    width: "80%",
    backgroundColor: "black",
    alignSelf: "center",
    elevation: 5,
    marginTop: 56,
    borderRadius: 12
  },
  txtinput: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    // backgroundColor:"red",
    //borderBottomWidth: 1,
    borderColor: "red",
    color: "black",
    marginBottom:20,

  },
  countrycode: {

    width: 30,
    color: "white",
    alignSelf: "center",
    //borderBottomWidth: 1,
    height: 50,
    width: "10%",
    //paddingVertical: 14.5,
    marginRight: 0,
    marginLeft:10,
    backgroundColor: "white",
    marginBottom:20
  },
  btn: {
    height: 46,
    width: "90%",
    backgroundColor: "#FF5C00",
    alignSelf: "center",
    marginTop: 50,
    elevation: 5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  }, skip: {
    alignItems: 'flex-end',
    marginLeft: 300,
    width: 65,
    height: 32,
    alignSelf: 'center',
    //justifyContent:"center",
    marginTop: 50,
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1
    // backgroundColor:'yellow',
  },
});