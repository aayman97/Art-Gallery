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

const { width, height } = Dimensions.get("screen");

const collectionsList = [
  {
    name: "Paintings",
    route: "Basma's Artworks",
  },
  {
    name: "Architecture ",
  },
  {
    name: "Oil Painting",
  },
  {
    name: "Food",
  },
  {
    name: "Music",
  },
];

const Collections = ({ navigation }) => {
  console.log("........................................................");
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          height: height * 0.05,
          fontWeight: "bold",
          marginTop: height * 0.12 + 20,
          color: "white",
        }}
      >
        Choose any of <Text style={{ color: "#EE82EE" }}>my collections</Text>{" "}
        to view
      </Text>
      <FlatList
        data={collectionsList}
        keyExtractor={(_, i) => i}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              style={{
                width: width / 2.2,
                height: height * 0.25,
                marginHorizontal: width * 0.02,
                marginVertical: width * 0.06,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={() => {
                if (item.item.route) {
                  navigation.navigate(item.item.route);
                }
              }}
            >
              <View style={{ width: "95%", height: "85%" }}>
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    flexDirection: "row",
                  }}
                >
                  {data
                    .slice(0, 4)
                    .filter((_, i) => i % 2 !== 0)
                    .map((item, index) => {
                      return (
                        <View
                          style={{
                            width: "45%",
                            height: "100%",
                            marginHorizontal: 2.5,
                            marginVertical: 5,

                            overflow: "hidden",
                          }}
                        >
                          <Image
                            source={item.painting}
                            style={{
                              width: "100%",
                              height: undefined,
                              aspectRatio: 0.9,
                              borderRadius: 10,
                            }}
                          />
                        </View>
                      );
                    })}
                </View>

                <View
                  style={{
                    width: "100%",
                    height: "50%",

                    flexDirection: "row",
                  }}
                >
                  {data
                    .slice(0, 4)
                    .filter((_, i) => i % 2 === 0)
                    .map((item, index) => {
                      return (
                        <View
                          style={{
                            width: "45%",
                            height: "100%",
                            marginHorizontal: 2.5,
                            marginVertical: 5,
                            borderRadius: 10,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            source={item.painting}
                            style={{
                              width: "100%",
                              height: undefined,
                              aspectRatio: 0.9,
                              borderRadius: 10,
                            }}
                          />
                        </View>
                      );
                    })}
                </View>
              </View>

              <Text
                style={{
                  marginTop: 10,

                  alignSelf: "flex-start",
                  marginLeft: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
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

export default Collections;
