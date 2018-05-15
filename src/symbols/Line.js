import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Line extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 5.37,
    height: 4.89
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 12.74123391034177 11.77272727272727"
          preserveAspectRatio="none"
          style={styles.line}
        >
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M10.75 0.94 L1.16 9.67 "
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
  line: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
