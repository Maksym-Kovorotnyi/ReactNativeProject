import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

function LoginScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        textContentType="mail"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
      ></TextInput>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Don't have an account?? Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 50,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 19,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});
export default LoginScreen;
