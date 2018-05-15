import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Line6 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 8,
    height: 15.5
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="0 0 18 33" preserveAspectRatio="none" style={styles.line}>
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M16.50 31.50 L0.50 16.00 L16.50 0.50 "
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
    width: "100%",
    transform: [
      {
        rotate: "-180deg"
      }
    ]
  }
});
