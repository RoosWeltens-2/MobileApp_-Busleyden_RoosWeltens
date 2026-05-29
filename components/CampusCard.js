import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function CampusCard({
  title,
  description,
  price,
  image,
  onPress,
  isDarkMode,
}) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>

            {description !== "" && (
                <Text style={styles.description} numberOfLines={3}>
                    {description}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#75BF00",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1F2937",
    },
    description: {
        color: "#6B7280",
        marginTop: 6,
    },
});