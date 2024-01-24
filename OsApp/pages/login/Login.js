import React, { useContext } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from "../../hooks/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import GlobalButton from "../../components/Button/GlobalButton";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";

const loginValidationSchema = yup.object().shape({
  empresa: yup.string().required('Campo obrigatório'),
  username: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setLoggedIn } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: { empresa: '', username: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      if (values.username === "admin" && values.password === "admin" && values.empresa === "1234") {
        setLoggedIn(true);
        navigation.navigate("Home");
      } else {
        alert("Nome de usuário ou senha incorretos!");
      }
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código da empresa"
        value={formik.values.empresa}
        onChangeText={formik.handleChange('empresa')}
        onBlur={formik.handleBlur('empresa')}
        style={[
          GlobalStyles.inputGlobal,
          formik.touched.empresa && formik.errors.empresa ? styles.errorInput : null,
        ]}
        autoCapitalize="none"
      />
      {formik.touched.empresa && formik.errors.empresa &&
        <Text style={styles.errorText}>{formik.errors.empresa}</Text>}

      <View style={styles.spacing} /> 

      <TextInput
        placeholder="Nome de usuário"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        style={[
          GlobalStyles.inputGlobal,
          formik.touched.username && formik.errors.username ? styles.errorInput : null,
        ]}
        autoCapitalize="none"
      />
      {formik.touched.username && formik.errors.username &&
        <Text style={styles.errorText}>{formik.errors.username}</Text>}

      <View style={styles.spacing} /> 

      <TextInput
        placeholder="Senha"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        style={[
          GlobalStyles.inputGlobal,
          formik.touched.password && formik.errors.password ? styles.errorInput : null,
        ]}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password &&
        <Text style={styles.errorText}>{formik.errors.password}</Text>}

      <View style={styles.spacing} /> 

      <GlobalButton
        title="Entrar"
        onPress={formik.handleSubmit}
        buttonWidth="100%"
        buttonColor="#007bff"
        style={{ alignSelf: 'center' }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 60, 
    paddingBottom: 60, 
    backgroundColor: "#fff",
  },
  spacing: {
    height: 20, 
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
  },
});

export default LoginScreen;
