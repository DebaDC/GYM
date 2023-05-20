import React, { useState } from "react";
import { ARROW, BACKGROUND, PINKDOT } from './src/constants/imagepath';
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
import { ORANGE } from "./src/constants/color";
import { PINK } from "./src/constants/color";
export default Login = () => {
    const [number, setNumber] = useState("");
    const btnPress = () => {
        console.log(number);
    };
    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={{ flex: 1 }} source={BACKGROUND}>
                    <Pressable  >
                        <Image source={ARROW} style={{ height: 15, width: 10, margin: 20 }} />
                    </Pressable>

                    <View style={styles.cards}>
                        <Image source={PINKDOT} style={{ height: 57, width: 54, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 30, marginLeft: 310, marginBottom: 20, }} />
                        <Text
                            style={{
                                ...styles.headertxt,
                                borderBottomWidth: 0,
                                marginTop: 0,
                                marginBottom: 12,

                            }}
                        >
                            Enter OTP
                        </Text>

                        <Text style={{ ...styles.headertxt, fontSize: 12, fontWeight: 100, marginTop: 0 }}>
                            To verify your mobile number enter the OTP sent </Text>
                        <Text style={{ ...styles.headertxt, fontSize: 12, fontWeight: 100, marginTop: 0, }}>
                            to your number.</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 60, width: 50, marginRight: 10, borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 60, width: 50, marginRight: 10, borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 60, width: 50, marginRight: 10, borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={setNumber}
                                    keyboardType="number-pad"
                                    placeholder=""
                                    maxLength={1}
                                    style={{ ...styles.txtinput, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ ...styles.cards, backgroundColor: 'white', height: 60, width: 50, marginRight: 10, borderRadius: 5 }}>
                                <TextInput
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
                                    justifyContent: 'center'
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
                                <Text style={{ ...styles.headertxt, color: PINK, fontSize: 15, borderBottomWidth: 1, borderColor: PINK, marginTop: 0 }}>
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
        fontSize: 30,
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