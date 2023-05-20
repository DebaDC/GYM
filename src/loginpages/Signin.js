import React, { useState } from "react";
import { BACKGROUND } from '../constants/imagepath';
import { SINNUMBER } from '../constants/imagepath';
import { PINKDOT } from '../constants/imagepath';
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
export default Login = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const btnPress = () => {
    console.log(number);
  };
  return (
    <>
      <Formik
        initialValues={{ phoneNumber: '' }}
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
                <Text style={{
                  color: 'white', alignSelf: 'center', marginTop: 5,

                }}
                >Skip</Text>
              </Pressable>
              <View style={styles.cards}>
                <Image source={PINKDOT} style={{ height: 48, width: 45, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -20, marginLeft: 250, marginBottom: 20, }} />
                <Text
                  style={{
                    ...styles.headertxt,
                    borderBottomWidth: 0,
                    marginTop: -30
                  }}
                >
                  Sign In to Continue
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <View style={{
                    ...styles.countrycode,
                    height: 50,
                    width: 50,
                    marginTop: 45,
                    marginLeft: 15,
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                  }} >
                    <Image style={{ ...styles.countrycode, height: 20, width: 20, marginTop: 15 ,alignItems:'center'}} source={SINNUMBER}></Image>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <TextInput
                      onChangeText={handleChange('phoneNumber')}
                      keyboardType="number-pad"
                      placeholder="Enter your Mobile Number"
                      placeholderTextColor={"gray"}
                      maxLength={10}
                      value={values.phoneNumber}

                      style={{
                        ...styles.txtinput,
                        backgroundColor: "white",
                        marginTop: 45,
                        marginRight: 40,
                        marginLeft: 0,
                        width: '94%',

                        borderBottomRightRadius: 7,
                        borderTopRightRadius: 7,

                      }}
                    ></TextInput>



                  </View>
                </View>

                {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>}

                <Pressable onPress={() => navigation.navigate('OTPPage')} style={styles.btn}>
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

                <Pressable onPress={() => navigation.navigate('Signup')}>
                  <View>
                    <Text style={{ ...styles.headertxt, fontSize: 15, marginTop: 22 }}>
                      Not Yet Registered?
                    </Text>
                    <Text style={{ ...styles.headertxt, color: "#FF00C7", fontSize: 15, borderBottomWidth: 0.2, borderColor: "#FF00C7", marginTop: 0 }}>
                      Sign Up
                    </Text>
                  </View>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
        )}
      </Formik>

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
    marginTop: 100,
    borderRadius: 12
  },
  txtinput: {
    height: 50,
    width: "101%",
    // alignSelf: "center",
    // backgroundColor:"red",
    //borderBottomWidth: 1,
    borderColor: "red",
    color: "black",
    marginBottom: 0,


  },
  countrycode: {

    width: 70,
    color: "white",
    // alignSelf: "center",
    alignSelf: 'center',

    //borderBottomWidth: 1,
    height:10 ,
    width:10 ,
    //paddingVertical: 14.5,
    // marginRight: 0,
    // marginLeft:20,
    backgroundColor: "white",
    // marginBottom:20
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
  },
  skip: {
    alignItems: 'flex-end',
    marginLeft: 225,
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