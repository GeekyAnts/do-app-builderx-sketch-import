import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Line4 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 1,
    height: 21
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="0 0 4 44" preserveAspectRatio="none" style={styles.line8}>
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M1.50 0.50 L1.50 42.50 "
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
  line8: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
