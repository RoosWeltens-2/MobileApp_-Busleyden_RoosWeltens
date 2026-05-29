import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

const PRODUCTS_URL =
  "https://api.webflow.com/v2/sites/6a143c8a0e7440c6e5727010/products";

const RICHTINGENS_URL =
  "https://api.webflow.com/v2/collections/6a15e2e3bbbf11e8734a613c/items";

const CAMPUSSEN_URL = 
  "https://api.webflow.com/v2/collections/6a14663d3a4a89a96517d954/items";

const NIEUWS_URL =
  "https://api.webflow.com/v2/collections/6a1578580c156ddfb5379c91/items"

const RICHTINGENS_TOKEN = "64507fcc37900dcff9f09c262f0aeaaa29bfd316af68586b11a26205e0b111b8";
const CAMPUSSEN_TOKEN = "64507fcc37900dcff9f09c262f0aeaaa29bfd316af68586b11a26205e0b111b8";
const NIEUWS_TOKEN = "64507fcc37900dcff9f09c262f0aeaaa29bfd316af68586b11a26205e0b111b8";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(PRODUCTS_URL, {
      headers: {
        Authorization: `Bearer ${"64507fcc37900dcff9f09c262f0aeaaa29bfd316af68586b11a26205e0b111b8"}`,
      },
    })
    .then(async (res) => {
        console.log("STATUS:", res.status);
        console.log("OK:", res.ok);
      
        const text = await res.text();
        console.log("RESPONSE TEXT:", text);
      
        if (!res.ok) {
          throw new Error(`Producten konden niet geladen worden. Status: ${res.status}`);
        }
      
        return JSON.parse(text);
      })
      .then((data) => {
        const mappedProducts = (data.items || []).map((item) => {
          return {
            id: item.product?.id,
            title: item.product?.fieldData?.name || "Geen titel",
            description:
              item.product?.fieldData?.description || "Geen beschrijving",
            price: (item.skus?.[0]?.fieldData?.price?.value || 0) / 100,
            image: item.skus?.[0]?.fieldData?.["main-image"]?.url || "",
          };
        });

        setProducts(mappedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setErrorMessage("Er ging iets mis bij het laden van de producten.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //campussen
  const [campussen, setCampussen] = useState([]);

  useEffect(() => {
    fetch(CAMPUSSEN_URL, {
      headers: {
        Authorization: `Bearer ${CAMPUSSEN_TOKEN}`,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      const mappedCampussen = (data.items || []).map((item) => {
        const fieldData = item.fieldData || {};

        return {
          id: item.id,
          title: fieldData.name || "Geen titel",
          description: fieldData ["lange-beschrijving"]  || "",
        };
      });

      setCampussen(mappedCampussen);
    })
    .catch((error) => console.error ("Error fetching richtingen:", error));
  }, []);

  // richtingen
  const [richtingen, setRichtingen] = useState([]);

  useEffect(() => {
    fetch(RICHTINGENS_URL, {
      headers: {
        Authorization: `Bearer ${RICHTINGENS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mappedRichtingen = (data.items || []).map((item) => {
          const fieldData = item.fieldData || {};
  
          return {
            id: item.id,
            title: fieldData.name || "Geen titel",
            description: fieldData["lange-beschrijving"] || "",
          };
        });
  
        setRichtingen(mappedRichtingen);
      })
      .catch((error) => console.error("Error fetching richtingen:", error));
  }, []);

  //nieuws
  const [nieuws, setNieuws] = useState([]);

  useEffect(() => {
    fetch(NIEUWS_URL, {
      headers: {
        Authorization: `Bearer ${NIEUWS_TOKEN}`,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      const mappedNieuws = (data.items || []).map((item) => {
        const fieldData = item.fieldData || {};

        return {
          id: item.id,
          title: fieldData.name || "Geen titel",
          description: fieldData["lange-beschrijving"] || "",
        };
      });

      setNieuws(mappedNieuws);
    })
    .catch((error) => console.error("Error fetching nieuws:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  

  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Busleyden Atheneum</Text>
        <Text style={styles.subtitle}>Eén school, acht campussen.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Campussen</Text>
        <Text style={styles.sectionIntro}>
          Ontdek onze acht campussen verspreid over Mechelen.</Text>
          {campussen.map((campus) => (
            <View key={campus.id} style={styles.card}>
              <Text style ={styles.cardTitle}>{campus.title}</Text>
              {campus.description !== "" && (
                <Text style={styles.cardText} numberOfLines={3}>
                  {campus.description}
                </Text>)}
            </View>
          ))}

          {campussen.length === 0 && (
            <Text style={styles.mutedText}>Geen campussen gevonden.</Text>
          )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Richtingen</Text>
        <Text style={styles.sectionIntro}>
          Kies uit onze studierichtingen die we aanbieden.</Text>  

        {richtingen.map((richting) => (
          <View key ={richting.id} style={styles.card}>
            <Text style={styles.cardTitle}>{richting.title}</Text>

            {richting.description !== "" && (
              <Text style={styles.cardText} numberOfLines={3}>
                {richting.description}
              </Text>)}
          </View>
        ))}

        {richtingen.length === 0 && (
          <Text style={styles.mutedText}>Geen richtingen gevonden.</Text>
        )}
        </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nieuws</Text>
        <Text style={styles.sectionIntro}>
          Blijf op de hoogte van het laatste nieuws en evenementen.
        </Text>

        {nieuws.map((nieuw) => (
          <View key ={nieuw.id} style={styles.card}>
            <Text style={styles.cardTitle}>{nieuw.title}</Text>

            {nieuw.description !== "" && (
              <Text style={styles.cardText} numberOfLines={3}>
              {nieuw.description}
              </Text>)}
              </View>
        ))}

        {nieuws.length === 0 && (
          <Text style={styles.mutedText}>Geen Nieuws gevonden</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Webshop</Text>
        <Text style={styles.sectionIntro}>
          Ontdek producten uit de Busleyden webshop.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Zoek een product..."
          value={searchText}
          onChangeText={setSearchText}
        />

        {loading && (
          <View style={styles.centerBox}>
            <ActivityIndicator size="large" />
            <Text style={styles.mutedText}>Producten laden...</Text>
          </View>
        )}

        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        {!loading &&
          errorMessage === "" &&
          filteredProducts.map((product) => (
            <Pressable
              key={product.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("ProductDetail", { product: product })
              }
            >
              <Text style={styles.cardTitle}>{product.title}</Text>
              <Text style={styles.cardText} numberOfLines={2}>
                {product.description}
              </Text>
              <Text style={styles.price}>€ {product.price.toFixed(2)}</Text>
            </Pressable>
          ))}

        {!loading && filteredProducts.length === 0 && errorMessage === "" && (
          <Text style={styles.mutedText}>Geen producten gevonden.</Text>
        )}
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  hero: {
    backgroundColor: "#75BF00",
    padding: 24,
    paddingTop: 48,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
  },
  sectionIntro: {
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#75BF00",
  },
  centerBox: {
    alignItems: "center",
    marginTop: 20,
  },
  mutedText: {
    color: "#6B7280",
    marginTop: 10,
  },
  errorText: {
    color: "#B91C1C",
    backgroundColor: "#FEE2E2",
    padding: 12,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  cardText: {
    color: "#6B7280",
    marginTop: 6,
  },
  price: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#0B2D5C",
  },
});