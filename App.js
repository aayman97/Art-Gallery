import { StatusBar } from "expo-status-bar";
import React from "react";
import { data } from "./data";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Artwork from "./Screens/Artwork";
import Collections from "./Screens/Collections";
import TheArt from "./Screens/TheArt";
import About from "./Screens/About";
import ContactMe from "./Screens/ContactMe";
import DrawerContent from "./Components/DrawerContent";
import Animated from "react-native-reanimated";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get("screen");

const DrawerScreens = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        setTimeout(() => {
          setProgress(props.progress);
        }, 0);
        return <DrawerContent {...props} />;
      }}
      scen
    >
      <Drawer.Screen
        name="Collections"
        options={{
          header: (props) => {
            return (
              <View
                style={{
                  height: height * 0.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "absolute",
                  backgroundColor: "transparent",
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  right: 0,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: height * 0.05,
                  }}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                >
                  <Ionicons name="menu" size={35} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: height * 0.05,
                    color: "white",
                  }}
                >
                  {props.route.name}
                </Text>
                <View
                  style={{
                    marginTop: height * 0.05,
                    width: "10%",
                  }}
                ></View>
              </View>
            );
          },
        }}
        component={Collections}
      />
      <Drawer.Screen
        name="About Me"
        options={{
          header: (props) => {
            return (
              <View
                style={{
                  height: height * 0.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "absolute",
                  backgroundColor: "transparent",
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  right: 0,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: height * 0.05,
                  }}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                >
                  <Ionicons name="menu" size={35} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: height * 0.05,
                    color: "white",
                  }}
                >
                  {props.route.name}
                </Text>
                <View
                  style={{
                    marginTop: height * 0.05,
                    width: "10%",
                  }}
                ></View>
              </View>
            );
          },
        }}
        component={About}
      />
      <Drawer.Screen
        name="Contact Me"
        options={{
          header: (props) => {
            return (
              <View
                style={{
                  height: height * 0.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "absolute",
                  backgroundColor: "transparent",
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  right: 0,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: height * 0.05,
                  }}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                >
                  <Ionicons name="menu" size={35} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: height * 0.05,
                    color: "white",
                  }}
                >
                  {props.route.name}
                </Text>
                <View
                  style={{
                    marginTop: height * 0.05,
                    width: "10%",
                  }}
                ></View>
              </View>
            );
          },
        }}
        component={ContactMe}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerScreens}
          options={{
            headerStyle: { backgroundColor: "transparent" },
            header: (props) => {
              return (
                <View
                  style={{
                    height: height * 0.12,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    backgroundColor: "transparent",
                    zIndex: 100,
                    top: 0,
                    left: height,
                    right: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: height * 0.05,
                      color: "white",
                    }}
                  >
                    {props.route.name}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="Basma's Artworks"
          component={Artwork}
          options={{
            header: (props) => {
              return (
                <View
                  {...props}
                  style={{
                    height: height * 0.12,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    backgroundColor: "transparent",
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: height * 0.05,
                      color: "white",
                    }}
                  >
                    {props.route.name}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="The Art"
          component={TheArt}
          options={{
            header: (props) => {
              return (
                <View
                  {...props}
                  style={{
                    height: height * 0.12,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    backgroundColor: "transparent",
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: height * 0.05,
                      color: "white",
                    }}
                  ></Text>
                </View>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
