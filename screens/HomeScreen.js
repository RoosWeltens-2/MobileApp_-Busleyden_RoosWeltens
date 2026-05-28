import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busleyden Atheneum</Text>
      <Text style={styles.subtitle}>Eén school, acht campussen.</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductDetail")}
      >
        <Text style={styles.buttonText}>Ga naar product detail</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B2D5C",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#F5A623",
    fontSize: 18,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#F5A623",
    padding: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  buttonText: {
    color: "#0B2D5C",
    fontWeight: "bold",
  },
});