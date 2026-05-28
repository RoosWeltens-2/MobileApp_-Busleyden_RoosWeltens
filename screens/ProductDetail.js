import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product detail</Text>
      <Text>Hier komt later de productinformatie.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});