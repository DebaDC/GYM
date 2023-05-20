import React, { useState, useRef } from "react";
import { ARROW, BACKGROUND, PINKDOT } from '../constants/imagepath';
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
import { ORANGE } from "../constants/color";
import { PINK } from "../constants/color";
export default Login = ({ navigation }) => {
    const [number, setNumber] = useState("");

    const [pin1, setpin1] = useState('');
    const [pin2, setpin2] = useState('');
    const [pin3, setpin3] = useState('');
    const [pin4, setpin4] = useState('');

    const pin1ref = useRef(null);
    const pin2ref = useRef(null);
    const pin3ref = useRef(null);
    const pin4ref = useRef(null);



    const btnPress = () => {
        console.log(number);
    };
    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={{ flex: 1 }} source={BACKGROUND}>
                    <Pressable onPress={() => navigation.navigate('Signin')}>
                        <Image source={ARROW} style={{ height: 15, width: 10, margin: 30 }} />
                    </Pressable>


                    <View style={styles.cards}>
                        <Image source={PINKDOT} style={{ height: 48, width: 45, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -80, marginLeft: 280, }} />
                        <Text
                            style={{
                                marginTop: -20,
                                alignSelf: 'center',
                                marginBottom: 10,
                                 fontWeight:'bold',
                                fontSize: 20,
                                color:'white'

                            }}
                        >
                            Enter OTP
                        </Text>

                        <Text style={{ ...styles.headertxt, fontSize: 14, fontWeight: 'bold', marginTop: 0 }}>
                            To verify your mobile number enter the OTP sent </Text>
                        <Text style={{ ...styles.headertxt, fontSize: 14, fontWeight: 'bold', marginTop: 0,marginBottom:30 }}>
                            to your number.</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -70 }}>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 50, width: 40, marginRight: 10, borderRadius: 5,marginTop:120 }}>
                                <TextInput
                                    ref={pin1ref}

                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    onChange={(pin1) => {
                                        setpin1(pin1)
                                        if (pin1 != "") {
                                            pin2ref.current.focus();
                                        }

                                    }}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 50, width: 40, marginRight: 10, borderRadius: 5,marginTop:120 }}>
                                <TextInput
                                    ref={pin2ref}
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    onChange={(pin2) => {
                                        setpin2(pin2)
                                        if (pin2 != "") {
                                            pin3ref.current.focus();
                                        }

                                    }}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 50, width: 40, marginRight: 10, borderRadius: 5,marginTop:120}}>
                                <TextInput
                                    ref={pin3ref}
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    onChange={(pin3) => {
                                        setpin3(pin3)
                                        if (pin3 != "") {
                                            pin4ref.current.focus();
                                        }

                                    }}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 50, width: 40, marginRight: 0, borderRadius: 5 ,marginTop:120}}>
                                <TextInput
                                    ref={pin4ref}
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}

                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                        </View>

                        <Pressable onPress={btnPress} style={styles.btn}>
                            <Text
                                style={{
                                    ...styles.headertxt,
                                    borderBottomWidth: 0,
                                    marginTop: 0,
                                    alignSelf: "center",
                                    justifyContent: 'center',
                                    fontWeight: 5,
                                    fontSize: 15

                                }}
                            >
                                VERIFY
                            </Text>
                        </Pressable>

                        <Pressable>
                            <View>
                                <Text style={{ ...styles.headertxt, fontSize: 15, marginTop: 25 }}>
                                    Didn't receive the OTP?
                                </Text>
                                <Text style={{ ...styles.headertxt, color: "#FF00C7", fontSize: 15, borderBottomWidth: 0.2, borderColor: "#FF00C7", marginTop: 0, padding: 0, }}>
                                    Resend OTP
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
        fontWeight: "bold",
        fontSize: 24,
        alignSelf: "center",
        marginTop: 100,
        // borderBottomWidth: 3,
        // paddingBottom: 5
    },
    cards: {
        height: 400,
        width: "90%",
        backgroundColor: "black",
        alignSelf: "center",
        justifyContent: 'center',
        elevation: 5,
        marginTop: "30%",
        borderRadius: 10
    },
    txtinput: {
        width: "80%",
        alignSelf: "center",
        color: "black",
        fontSize: 25,
        textAlign: 'center'
    },

    btn: {
        height: 50,
        width: "90%",
        backgroundColor: ORANGE,
        alignSelf: "center",
        marginTop: 50,
        elevation: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});