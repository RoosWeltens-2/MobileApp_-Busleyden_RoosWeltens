import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function NieuwsDetail({route}) {
    const {nieuws} = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{nieuws.title}</Text>
            </View>

            <View style={styles.sections}>
                <Text style={styles.label}> Beschrijving</Text>
                <Text style={styles.text}>
                    {nieuws.description || "Geen beschrijving"}
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
});