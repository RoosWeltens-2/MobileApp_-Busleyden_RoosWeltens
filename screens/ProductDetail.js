import { StyleSheet, Text, View, ScrollView, Image} from "react-native";

export default function ProductDetail({route}) {
    const {product} = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{product.title}</Text>
            </View>

            {product.image !== "" && (
                <Image source={{ uri: product.image }} style={styles.image} />
            )}

            <View style={styles.sections}>
                <Text style={styles.label}> Beschrijving</Text>
                <Text style={styles.text}>
                    {product.description || "Geen beschrijving"}
                </Text>
                <Text style={styles.price}>
                  €{product.price.toFixed(2)}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        backgroundColor: "#75BF00",
        padding: 24,
        paddingTop: 48,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    sections: {
        padding: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 8,
    },
    text: {
        color: "#6B7280",
        lineHeight: 22,
    },
    image: {
        width: "100%",
        height: 220,
        resizeMode: "cover",
      },
});