import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Oval449 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 160,
    height: 160
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 330 330"
          preserveAspectRatio="none"
          style={styles.oval449}
        >
          <Path
            strokeWidth={5}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,51,102,1)"
            isClosed={true}
            d="M162.50 322.50 C250.87 322.50 322.50 250.87 322.50 162.50 C322.50 74.13 250.87 2.50 162.50 2.50 C74.13 2.50 2.50 74.13 2.50 162.50 C2.50 250.87 74.13 322.50 162.50 322.50 Z"
          />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  oval449: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
