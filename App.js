import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

const App = () => {
  return (
    <ScrollView>
      <Text>Hello from the blue cat</Text>
      <View>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "blue",
          borderWidth: 1,
        }}
        defaultValue="Type here"
      />
    </ScrollView>
  );
};

export default App;
