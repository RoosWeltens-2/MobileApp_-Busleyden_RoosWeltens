import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function RichtingenDetail({route}) {
    const {richting} = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{richting.title}</Text>
            </View>

            {richting.image !== "" && (
                <Image source={{ uri: richting.image }} style={styles.image} />
            )}

            <View style={styles.section}>
                <Text style={styles.label}> Beschrijving</Text>
                <Text style={styles.text}>
                    {richting.description || "Geen beschrijving"}
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