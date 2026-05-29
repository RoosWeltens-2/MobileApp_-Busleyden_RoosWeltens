import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import CampusDetail from "./screens/CampusDetail";
import NieuwsDetail from "./screens/NieuwsDetail"; 
import RichtingDetail from "./screens/RichtingDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Busleyden Atheneum" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product detail" }}
        />
        <Stack.Screen
          name="CampusDetail"
          component={CampusDetail}
          options={{title: "Campus detail"}}
        />
        <Stack.Screen
        name="NieuwsDetail"
        component={NieuwsDetail}
        options={{title: "Nieuws detail"}}
        />
        <Stack.Screen
        name="RichtingDetail"
        component={RichtingDetail}
        options={{title: "Richting detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}