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
const Artwork = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: height * 0.12 + height * 0.025,
          marginBottom: height * 0.01,
          width: width * 0.94,
          height: height * 0.06,
          backgroundColor: "transparent",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderWidth: 2,
          borderColor: "white",
          shadowOpacity: 0.4,
        }}
      >
        <FontAwesome name="search" size={24} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          style={{
            paddingHorizontal: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
          }}
        />
      </View>
      {
        // masonry layout
      }

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: height * 0.02,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            {data
              .filter((_, i) => i % 2 !== 0)
              .map((item) => {
                let aspectRatio = 0;
                if (
                  Image.resolveAssetSource(item.painting).height /
                    Image.resolveAssetSource(item.painting).width <
                  1
                ) {
                  aspectRatio =
                    Image.resolveAssetSource(item.painting).height /
                    Image.resolveAssetSource(item.painting).width;
                } else {
                  aspectRatio =
                    Image.resolveAssetSource(item.painting).width /
                    Image.resolveAssetSource(item.painting).height;
                }
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#F5F5F5",
                      width: width / 2.3,
                      margin: 5,
                      height:
                        (width / 2) *
                        (Image.resolveAssetSource(item.painting).height /
                          Image.resolveAssetSource(item.painting).width),
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                    onPress={() =>
                      navigation.navigate("The Art", {
                        item,
                      })
                    }
                  >
                    <Image
                      source={item.painting}
                      style={{
                        width: "100%",
                        height: undefined,
                        aspectRatio:
                          Image.resolveAssetSource(item.painting).height /
                            Image.resolveAssetSource(item.painting).width <
                          1
                            ? 1
                            : 0.65,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>

          <View>
            {data
              .filter((_, i) => i % 2 === 0)
              .map((item) => {
                if (
                  Image.resolveAssetSource(item.painting).height /
                    Image.resolveAssetSource(item.painting).width <
                  1
                ) {
                  console.log(true);
                } else {
                  console.log(false);
                }
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#F5F5F5",
                      width: width / 2.3,
                      margin: 5,
                      height:
                        (width / 2) *
                        (Image.resolveAssetSource(item.painting).height /
                          Image.resolveAssetSource(item.painting).width),
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={item.painting}
                      style={{
                        width: "100%",
                        height: undefined,
                        aspectRatio:
                          Image.resolveAssetSource(item.painting).height /
                            Image.resolveAssetSource(item.painting).width <
                          1
                            ? 1
                            : 0.65,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
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

export default Artwork;
