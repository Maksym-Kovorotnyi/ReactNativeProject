import { StyleSheet, View, ImageBackground, Text } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <>
      <ImageBackground
        source={require("./assets/images/bcg.png")}
        style={styles.bcgImage}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bcgImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
});
