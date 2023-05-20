import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "../loginpages/Signup";
import Signin from "../loginpages/Signin";
import OTPPage from "../loginpages/OTPPage";


export default Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin">
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
                <Stack.Screen options={{ headerShown: false }} name="OTPPage" component={OTPPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};