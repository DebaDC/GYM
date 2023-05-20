import React from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().name('Invalid name').required('Name is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
const MyForm = () => {
  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            placeholder="Name"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          {errors.name && <Text style={{color:'red'}}>{errors.name}</Text>}
          <TextInput
            placeholder="Phone Number"
            keyboardType='number-pad'
            maxLength={10}
            onChangeText={handleChange('phoneNumber')}
            value={values.phoneNumber}
          />
          {errors.phoneNumber && <Text style={{color:'red'}}>{errors.phoneNumber}</Text>}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default MyForm;