import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function SearchInput() {
  const [value, setValue] = useState("");

  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View>
      <View style={styles.filteringContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.input, { fontFamily: "Nunito_700Bold" }]}
            placeholder="Search"
            value={value}
            onChangeText={setValue}
            placeholderTextColor={"#C67cc"}
          />
          <TouchableOpacity
            style={styles.searchIconContainer}
            onPress={() => router.push("/(tabs)/search")}
          >
            <AntDesign name="search1" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  filteringContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  searchIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: "#2467EC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "black",
    paddingVertical: 10,
    paddingLeft: 8,
    width: 271,
    height: 48,
  },
});
