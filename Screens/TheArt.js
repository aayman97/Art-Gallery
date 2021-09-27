import { StatusBar } from "expo-status-bar";
import React from "react";
import { data } from "../data";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { backgroundImage } from "../background";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const TheArt = ({ route }) => {
  console.log("........................................................");

  const { item } = route.params;
  const navigation = useNavigation();

  React.useEffect(() => {
    () => navigation.setOptions({ title: item.name });
  }, []);
  return (
    <ImageBackground
      source={item.painting}
      blurRadius={40}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            shadowOpacity: 1,
          }}
        >
          {item.name}
        </Text>
        <Image
          source={item.painting}
          style={{
            width: "95%",
            height: "70%",
            resizeMode: "contain",
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TheArt;
