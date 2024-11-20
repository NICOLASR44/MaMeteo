import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Colors, FontSizes } from "../constants/styles";

// Définir un type pour les props (si nécessaire)
interface SearchProps {
  defaultCity?: string; // Propriété optionnelle
}

// Définir un type pour l'état
interface SearchState {
  city: string;
}

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      city: props.defaultCity || "Nantes", // Valeur par défaut
    };
  }

  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        value={this.state.city}
        onChangeText={(text) => this.setState({ city: text })}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Colors.nav,
    color: Colors.text,
    borderWidth: 2,
    paddingHorizontal: 5,
  },
});
