import React from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  
  otp: Yup.string().matches(/^\d{4}$/, 'Wrong OTP entered!').required('OTP is required'),
});
const MyForm = () => {
  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            placeholder="OTP"
            onChangeText={handleChange('otp')}
            value={values.otp}
            maxLength={4}
            keyboardType='number-pad'
          />
          {errors.otp && <Text style={{color:'red' ,fontSize:16}}>{errors.otp}</Text>}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default MyForm;
