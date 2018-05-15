import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Bg extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 55,
    height: 55
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 110 110"
          preserveAspectRatio="none"
          style={styles.bg10}
        >
          <Path
            strokeWidth={1}
            fill="rgba(186,119,255,1)"
            isClosed={true}
            d="M55.50 110.50 C85.88 110.50 110.50 85.88 110.50 55.50 C110.50 25.12 85.88 0.50 55.50 0.50 C25.12 0.50 0.50 25.12 0.50 55.50 C0.50 85.88 25.12 110.50 55.50 110.50 Z"
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
  bg10: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
