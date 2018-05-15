import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Completed extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 13,
    height: 13
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 30 30"
          preserveAspectRatio="none"
          style={styles.completed2}
        >
          <Path
            strokeWidth={2}
            fill="rgba(0,0,0,0)"
            stroke="rgba(80,210,194,1)"
            isClosed={true}
            d="M14.00 27.00 C21.18 27.00 27.00 21.18 27.00 14.00 C27.00 6.82 21.18 1.00 14.00 1.00 C6.82 1.00 1.00 6.82 1.00 14.00 C1.00 21.18 6.82 27.00 14.00 27.00 Z"
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
  completed2: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
