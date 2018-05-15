import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Oval448 extends Component {
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
          style={styles.oval448}
        >
          <Path
            strokeWidth={5}
            fill="rgba(0,0,0,0)"
            stroke="rgba(238,143,110,1)"
            isClosed={false}
            d="M85.67 22.12 C36.11 49.30 2.50 101.98 2.50 162.50 C2.50 187.95 8.44 212.01 19.01 233.37 C45.14 286.18 99.58 322.50 162.50 322.50 C250.87 322.50 322.50 250.87 322.50 162.50 C322.50 74.13 250.87 2.50 162.50 2.50 "
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
  oval448: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
