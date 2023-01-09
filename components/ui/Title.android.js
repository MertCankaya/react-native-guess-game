import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 0 : 0,
    // borderWidth: Platform.select({ android: 1, ios: 1 }),
    borderWidth: 1,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
    fontWeight: "bold",
  },
});
