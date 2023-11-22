import { View, Text, StyleSheet } from "react-native";

export default function Manubar() {
  return (
    <View style={styles.container}>
      <Text>Manu bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "red",
    padding: 50,
    width: "70%",
    transform: [{ translateX: -10 }],
  },
});
