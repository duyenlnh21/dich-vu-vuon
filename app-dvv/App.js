import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import styles from "./styles";

export default function App({ reactSource, relaySource, senSource }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={reactSource} />
      <Image style={styles.image} source={relaySource} />
      <Image style={styles.image} source={senSource} />
    </View>
  );
}




const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  PropTypes.number
]).isRequired;

App.propTypes = {
  reactSource: sourceProp,
  relaySource: sourceProp,
  senSource: sourceProp

};

App.defaultProps = {
  reactSource: {
    uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
  },
  relaySource: require("./images/relay.png"),
  senSource: require("./images/sen.png")

};