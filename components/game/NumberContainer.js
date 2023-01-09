import { Dimensions, StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "black",
    padding: deviceWidth < 380 ? 30 : 36,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 30 : 36,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "black",
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
