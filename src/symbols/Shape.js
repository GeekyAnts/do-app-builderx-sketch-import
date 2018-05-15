import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Shape extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 20,
    height: 20.5
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 42 43"
          preserveAspectRatio="none"
          style={styles.shape}
        >
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M33.74 15.01 L26.31 7.63 M0.50 40.50 L0.50 32.56 L32.52 0.50 L40.50 8.44 L8.48 40.50 Z M39.98 40.50 L17.05 40.50 "
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
  shape: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
