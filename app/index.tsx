import React from "react";
import { View } from "react-native";
import Search from "./components/Search";
import About from "./components/About";

export default class index extends React.Component {
  render() {
    return (
      <View style={{ marginVertical: 40 }}>
        <Search />
      </View>
    );
  }
}
