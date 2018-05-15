import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Oval extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 19.53,
    height: 19.55
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 41.0590324012428 41.09090909090908"
          preserveAspectRatio="none"
          style={styles.oval}
        >
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={true}
            d="M20.03 39.59 C30.82 39.59 39.56 30.84 39.56 20.05 C39.56 9.25 30.82 0.50 20.03 0.50 C9.24 0.50 0.50 9.25 0.50 20.05 C0.50 30.84 9.24 39.59 20.03 39.59 Z"
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
  oval: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
