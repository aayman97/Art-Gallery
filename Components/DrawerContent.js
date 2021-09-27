import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

const { width, height } = Dimensions.get("screen");
const DrawerContent = (props) => {
  return (
    <ImageBackground
      source={require("../assets/backgroundfordrawer2.jpg")}
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: "22%",
          // backgroundColor: "blue",
        }}
        resizeMode="stretch"
      >
        <View
          style={{
            width: "100%",
            height: "90%",
            // backgroundColor: "black",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            paddingTop: 40,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginBottom: 10,
              textAlign: "left",
            }}
          >
            <Text style={{ lineHeight: 40 }}> Hi,</Text>
            {"\n"}
            <Text style={{ fontSize: 25 }}>I am Basma </Text>
          </Text>

          <Image
            source={require("../assets/basma.jpg")}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "white",
              aspectRatio: 1,
              resizeMode: "contain",
            }}
          />
        </View>

        <View
          style={{
            width: "100%",
            height: "20%",
            justifyContent: "center",
            paddingLeft: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "600",
              marginBottom: 20,

              letterSpacing: 1,
            }}
          >
            Enjoy your trip inside my head{" "}
            <MaterialCommunityIcons name="brain" size={19} color="white" />
          </Text>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props} bounces={false}>
        <DrawerItem
          icon={(props) => {
            return <MaterialIcons name="collections" size={24} color="white" />;
          }}
          label={"Collections"}
          labelStyle={{ color: "white", fontSize: 20 }}
          style={{ marginTop: -20 }}
          onPress={() => {
            props.navigation.navigate("Collections");
          }}
        />
        <DrawerItem
          icon={(props) => {
            return (
              <MaterialCommunityIcons
                name="information-outline"
                size={24}
                color="white"
              />
            );
          }}
          label={"About Me"}
          labelStyle={{ color: "white", fontSize: 20 }}
          onPress={() => {
            props.navigation.navigate("About Me");
          }}
        />
        <DrawerItem
          icon={(props) => {
            return <AntDesign name="contacts" size={24} color="white" />;
          }}
          label={"Contact Me"}
          labelStyle={{ color: "white", fontSize: 20 }}
          onPress={() => {
            props.navigation.navigate("Contact Me");
          }}
        />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default DrawerContent;
