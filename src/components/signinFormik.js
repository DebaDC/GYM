import React from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
const App = () => {
  return (
    
    <Formik
      initialValues={{  phoneNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          
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

export default App;
