import React from "react";
import {
  View,
  ImageBackground,
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

function RegistrationScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ImageBackground
        source={require("../assets/images/bcg.png")}
        style={styles.bcgImage}
      >
        <KeyboardAvoidingView behavior="height">
          <View style={styles.formContainer}>
            <Image style={styles.userPhoto}></Image>
            <Text style={styles.title}>Registration</Text>
            <View style>
              <TextInput
                style={styles.input}
                placeholder="Login"
                textContentType="nickname"
              />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                textContentType="emailAddress"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                textContentType="password"
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Already have an account? Log in</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bcgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 80,
    marginTop: "auto",
  },
  userPhoto: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 30,
    textAlign: "center",
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
    marginTop: 17,
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

export default RegistrationScreen;
