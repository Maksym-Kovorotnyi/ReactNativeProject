import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TextInput,
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
        <View style={styles.formContainer}>
          <Image style={styles.userPhoto}></Image>
          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 30,
              marginBottom: 30,
              textAlign: "center",
            }}
          >
            Registration
          </Text>
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
    flex: 0.6,

    // alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  userPhoto: {
    position: "absolute",
    alignSelf: "center",
    top: "-10%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  input: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
  },
});

export default RegistrationScreen;
