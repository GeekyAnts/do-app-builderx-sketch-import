import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Active extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 125,
    height: 1
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 256 8"
          preserveAspectRatio="none"
          style={styles.active}
        >
          <Path
            strokeWidth={3}
            fill="rgba(0,0,0,0)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M1.50 2.50 L251.50 2.50 "
            fillOpacity={0.5}
            strokeOpacity={0.5}
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
  active: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
