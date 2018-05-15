import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Line8 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 20,
    height: 1
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="0 0 42 4" preserveAspectRatio="none" style={styles.line4}>
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M0.50 1.50 L40.50 1.50 "
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
  line4: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
