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

const ContactMe = ({ route }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
    ></ImageBackground>
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

export default ContactMe;
