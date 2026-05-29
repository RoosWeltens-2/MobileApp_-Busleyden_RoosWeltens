import { StyleSheet, Text, Pressable, Image } from "react-native";

export default function RichtingCard({ title, description, image, onPress}) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            {image !== "" && <Image source={{uri: image}} style={styles.image} />}


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
    image: {
        width: "100%",
        height: 140,
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: "#E5E7EB",
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