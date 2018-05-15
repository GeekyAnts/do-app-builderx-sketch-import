import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Oval450 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 149.48,
    height: 160
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 308.9580169978951 330"
          preserveAspectRatio="none"
          style={styles.oval450}
        >
          <Path
            strokeWidth={5}
            fill="rgba(0,0,0,0)"
            stroke="rgba(80,210,194,1)"
            isClosed={false}
            d="M2.50 241.87 C30.07 290.04 81.98 322.50 141.46 322.50 C229.82 322.50 301.46 250.87 301.46 162.50 C301.46 74.13 229.82 2.50 141.46 2.50 "
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
  oval450: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
