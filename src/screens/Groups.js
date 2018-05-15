import React, { Component } from "react";
import Active from "../symbols/Active";
import Oval from "../symbols/Oval";
import Line from "../symbols/Line";
import Line1 from "../symbols/Line1";
import Line2 from "../symbols/Line2";
import Line3 from "../symbols/Line3";
import Bg from "../symbols/Bg";
import Line4 from "../symbols/Line4";
import Line5 from "../symbols/Line5";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Groups extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.auto}>
          <View style={styles.bg}>
            <View style={styles.bg1}>
              <Image
                source={require("../assets/830949511457596e60e35f7acc32378d2d20ba71.png")}
                style={styles.img}
              />
              <View style={styles.bg2} />
            </View>
          </View>
          <View style={styles.count}>
            <View style={styles.bg3} />
            <Text style={styles.style}>7</Text>
          </View>
          <Text style={styles.auto1}>Auto</Text>
        </View>
        <View style={styles.food}>
          <View style={styles.bg4}>
            <View style={styles.bg5}>
              <Image
                source={require("../assets/bf20c48d25babd9ff5196943b0c0e65c7c0917b1.png")}
                style={styles.img1}
              />
              <View style={styles.overlay} />
            </View>
          </View>
          <View style={styles.count1}>
            <View style={styles.bg6} />
            <Text style={styles.style1}>14</Text>
          </View>
          <Text style={styles.food1}>Food</Text>
        </View>
        <View style={styles.work}>
          <View style={styles.bg7}>
            <View style={styles.bg8}>
              <Image
                source={require("../assets/76a0de7ae2a7d47ba929577f73984a292e8260c0.png")}
                style={styles.img2}
              />
              <View style={styles.overlay1} />
            </View>
          </View>
          <View style={styles.count2}>
            <View style={styles.bg9} />
            <Text style={styles.style2}>28</Text>
          </View>
          <Text style={styles.work1}>Work</Text>
        </View>
        <View style={styles.navBg} />
        <View style={styles.tabs}>
          <Text style={styles.popular}>POPULAR</Text>
          <Text style={styles.latest}>LATEST</Text>
          <Text style={styles.archived}>ARCHIVED</Text>
          <Active style={styles.active1} />
        </View>
        <View style={styles.navbar}>
          <View style={styles.bounds} />
          <View style={styles.search}>
            <View style={styles.group}>
              <Oval style={styles.oval1} />
              <Line style={styles.line1} />
            </View>
            <View style={styles.bounds1} />
          </View>
          <Text style={styles.groups}>Groups</Text>
          <View style={styles.menu}>
            <View style={styles.group1}>
              <Line1 style={styles.line3} />
              <Line2 style={styles.line5} />
              <Line3 style={styles.line7} />
            </View>
            <View style={styles.bounds2} />
          </View>
        </View>
        <View style={styles.add}>
          <Bg style={styles.bg11} />
          <View style={styles.group2}>
            <View style={styles.group3}>
              <Line4 style={styles.line9} />
              <Line5 style={styles.line11} />
            </View>
            <View style={styles.bounds3} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  auto: {
    position: "absolute",
    top: "73.16%",
    left: "0.00%",
    height: "26.84%",
    width: "100.00%"
  },
  bg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  bg1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    overflow: "hidden",
    backgroundColor: "rgba(29,29,38,1)"
  },
  img: {
    position: "absolute",
    top: "-4.47%",
    left: "-2.40%",
    height: "108.38%",
    width: "103.47%",
    opacity: 0.2,
    backgroundColor: "transparent"
  },
  bg2: {
    position: "absolute",
    top: "0.00%",
    left: "0.13%",
    height: "100.00%",
    width: "100.00%",
    opacity: 0.1,
    overflow: "hidden",
    backgroundColor: "rgba(181,116,245,1)"
  },
  count: {
    position: "absolute",
    top: "66.31%",
    left: "83.40%",
    height: "22.35%",
    width: "10.67%"
  },
  bg3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.1000000014901161)"
  },
  style: {
    position: "absolute",
    top: "29.34%",
    left: "25.58%",
    height: "32.50%",
    width: "50.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "Avenir-Book",
    lineHeight: 17,
    textAlign: "center"
  },
  auto1: {
    position: "absolute",
    top: "66.48%",
    left: "4.13%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "Avenir-Book",
    lineHeight: 33
  },
  food: {
    position: "absolute",
    top: "46.33%",
    left: "0.00%",
    height: "26.84%",
    width: "100.00%"
  },
  bg4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  bg5: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    overflow: "hidden",
    backgroundColor: "rgba(29,29,38,1)"
  },
  img1: {
    position: "absolute",
    top: "-3.46%",
    left: "-1.34%",
    height: "106.98%",
    width: "103.47%",
    opacity: 0.2,
    backgroundColor: "transparent"
  },
  overlay: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    opacity: 0.1,
    overflow: "hidden",
    backgroundColor: "rgba(181,116,245,1)"
  },
  count1: {
    position: "absolute",
    top: "66.31%",
    left: "83.40%",
    height: "22.35%",
    width: "10.67%"
  },
  bg6: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.1000000014901161)"
  },
  style1: {
    position: "absolute",
    top: "29.34%",
    left: "25.58%",
    height: "32.50%",
    width: "50.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "Avenir-Book",
    lineHeight: 17,
    textAlign: "center"
  },
  food1: {
    position: "absolute",
    top: "66.48%",
    left: "4.13%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "Avenir-Book",
    lineHeight: 33
  },
  work: {
    position: "absolute",
    top: "19.49%",
    left: "0.00%",
    height: "26.84%",
    width: "100.00%"
  },
  bg7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  bg8: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    overflow: "hidden",
    backgroundColor: "rgba(29,29,38,1)"
  },
  img2: {
    position: "absolute",
    top: "-3.91%",
    left: "-1.33%",
    height: "107.54%",
    width: "103.73%",
    opacity: 0.2,
    backgroundColor: "transparent"
  },
  overlay1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    opacity: 0.1,
    overflow: "hidden",
    backgroundColor: "rgba(181,116,245,1)"
  },
  count2: {
    position: "absolute",
    top: "66.20%",
    left: "83.47%",
    height: "22.35%",
    width: "10.67%"
  },
  bg9: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.1000000014901161)"
  },
  style2: {
    position: "absolute",
    top: "29.34%",
    left: "25.58%",
    height: "32.50%",
    width: "50.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "Avenir-Book",
    lineHeight: 17,
    textAlign: "center"
  },
  work1: {
    position: "absolute",
    top: "66.48%",
    left: "5.33%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "Avenir-Book",
    lineHeight: 33
  },
  navBg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "19.49%",
    width: "100.00%",
    backgroundColor: "rgba(186,119,255,1)"
  },
  tabs: {
    position: "absolute",
    top: "14.92%",
    left: "0.00%",
    height: "4.42%",
    width: "91.73%"
  },
  popular: {
    position: "absolute",
    top: "0.00%",
    left: "10.39%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  latest: {
    position: "absolute",
    top: "0.00%",
    left: "48.11%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  archived: {
    position: "absolute",
    top: "0.00%",
    left: "81.83%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  active1: {
    position: "absolute",
    top: "96.61%",
    left: "0.00%",
    height: "3.39%",
    width: "36.34%",
    backgroundColor: "transparent"
  },
  navbar: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "9.60%",
    width: "100.00%"
  },
  bounds: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  search: {
    position: "absolute",
    top: "45.31%",
    left: "89.73%",
    height: "39.06%",
    width: "6.67%"
  },
  group: {
    position: "absolute",
    top: "8.00%",
    left: "6.00%",
    height: "86.00%",
    width: "88.00%",
    transform: [
      {
        scaleX: -1
      }
    ]
  },
  oval1: {
    position: "absolute",
    top: "0.00%",
    left: "11.10%",
    height: "90.91%",
    width: "88.77%",
    backgroundColor: "transparent"
  },
  line1: {
    position: "absolute",
    top: "77.27%",
    left: "0.00%",
    height: "22.73%",
    width: "24.41%",
    backgroundColor: "transparent"
  },
  bounds1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  groups: {
    position: "absolute",
    top: "46.88%",
    left: "42.33%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontFamily: "Avenir-Book",
    lineHeight: 22,
    textAlign: "center"
  },
  menu: {
    position: "absolute",
    top: "45.31%",
    left: "3.33%",
    height: "39.06%",
    width: "6.67%"
  },
  group1: {
    position: "absolute",
    top: "16.00%",
    left: "10.00%",
    height: "68.00%",
    width: "80.00%"
  },
  line3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  line5: {
    position: "absolute",
    top: "47.06%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  line7: {
    position: "absolute",
    top: "94.12%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  bounds2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  add: {
    position: "absolute",
    top: "89.51%",
    left: "42.67%",
    height: "8.25%",
    width: "14.80%"
  },
  bg11: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "99.10%",
    backgroundColor: "transparent"
  },
  group2: {
    position: "absolute",
    top: "27.27%",
    left: "27.03%",
    height: "45.45%",
    width: "45.05%"
  },
  group3: {
    position: "absolute",
    top: "8.00%",
    left: "8.00%",
    height: "84.00%",
    width: "84.00%"
  },
  line9: {
    position: "absolute",
    top: "0.00%",
    left: "47.62%",
    height: "100.00%",
    width: "4.76%",
    backgroundColor: "transparent"
  },
  line11: {
    position: "absolute",
    top: "47.62%",
    left: "0.00%",
    height: "4.76%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  bounds3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  }
});
