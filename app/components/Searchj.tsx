import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Search extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text style={style.title}> Je suis dans Search</Text>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas autem ipsam velit, corporis cum nam
          incidunt ea nulla natus, perspiciatis nemo rem vel atque magnam! Laborum ad enim quibusdam voluptatibus.
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
  },
});
