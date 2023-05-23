import { StyleSheet, View, ImageBackground, Text } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  return (
    <>
      <RegistrationScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
