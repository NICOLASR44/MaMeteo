import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class About extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.title}> A propos de moi</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas autem ipsam velit, corporis cum nam
          incidunt ea nulla natus, perspiciatis nemo rem vel atque magnam! Laborum ad enim quibusdam voluptatibus.
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
