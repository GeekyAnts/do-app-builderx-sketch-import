import React, { Component } from "react";
import Line6 from "../symbols/Line6";
import Line7 from "../symbols/Line7";
import Oval449 from "../symbols/Oval449";
import Oval448 from "../symbols/Oval448";
import Oval450 from "../symbols/Oval450";
import Overdue from "../symbols/Overdue";
import Snoozed from "../symbols/Snoozed";
import Completed from "../symbols/Completed";
import Shape from "../symbols/Shape";
import Line8 from "../symbols/Line8";
import Line9 from "../symbols/Line9";
import Line10 from "../symbols/Line10";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bg}>
          <View style={styles.bg1}>
            <Image
              source={require("../assets/16ffaa97082d61f337d601e7ced605c2c83783d3.png")}
              style={styles.img}
            />
            <View style={styles.overlay} />
          </View>
        </View>
        <View style={styles.monthPicker}>
          <View style={styles.right}>
            <View style={styles.group}>
              <Line6 style={styles.line1} />
            </View>
            <View style={styles.bounds} />
          </View>
          <View style={styles.left}>
            <View style={styles.group1}>
              <Line7 style={styles.line3} />
            </View>
            <View style={styles.bounds1} />
          </View>
          <Text style={styles.february}>FEBRUARY</Text>
        </View>
        <View style={styles.headerBg} />
        <View style={styles.pieChart}>
          <View style={styles.chart}>
            <Oval449 style={styles.oval4491} />
            <Oval448 style={styles.oval4481} />
            <Oval450 style={styles.oval4501} />
          </View>
          <Text style={styles.total}>TOTAL </Text>
          <Text style={styles.style}>265</Text>
        </View>
        <Text style={styles.goodJobYouveCom}>
          Good job, you’ve completed 6% more tasks this month.
        </Text>
        <Text style={styles.brandonHarris}>Brandon Harris</Text>
        <View style={styles.avatar}>
          <View style={styles.mask}>
            <Image
              source={require("../assets/67179646e0aeb928022eec070e02c4b474b90fcc.png")}
              style={styles.img1}
            />
          </View>
        </View>
        <View style={styles.overdue}>
          <Overdue style={styles.overdue2} />
          <Text style={styles.style1}>21</Text>
          <Text style={styles.overdue3}>OVERDUE</Text>
        </View>
        <View style={styles.snoozed}>
          <Snoozed style={styles.snoozed2} />
          <Text style={styles.style2}>64</Text>
          <Text style={styles.snoozed3}>SNOOZED</Text>
        </View>
        <View style={styles.completed}>
          <Text style={styles.style3}>180</Text>
          <Text style={styles.completed1}>COMPLETED</Text>
          <Completed style={styles.completed3} />
        </View>
        <View style={styles.navbar}>
          <View style={styles.bounds2} />
          <View style={styles.edit}>
            <View style={styles.group2}>
              <Shape style={styles.shape1} />
            </View>
            <View style={styles.bounds3} />
          </View>
          <Text style={styles.profile}>Profile</Text>
          <View style={styles.menu}>
            <View style={styles.group3}>
              <Line8 style={styles.line5} />
              <Line9 style={styles.line7} />
              <Line10 style={styles.line9} />
            </View>
            <View style={styles.bounds4} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
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
    top: "-0.67%",
    left: "-2.00%",
    height: "100.67%",
    width: "102.00%",
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
  monthPicker: {
    position: "absolute",
    top: "92.80%",
    left: "3.07%",
    height: "3.75%",
    width: "93.87%"
  },
  right: {
    position: "absolute",
    top: "0.00%",
    left: "92.90%",
    height: "100.00%",
    width: "7.10%",
    opacity: 0.6
  },
  group: {
    position: "absolute",
    top: "18.00%",
    left: "32.00%",
    height: "64.00%",
    width: "36.00%"
  },
  line1: {
    position: "absolute",
    top: "3.13%",
    left: "5.56%",
    height: "96.88%",
    width: "88.89%",
    backgroundColor: "transparent"
  },
  bounds: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  left: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "7.10%",
    opacity: 0.6
  },
  group1: {
    position: "absolute",
    top: "20.00%",
    left: "34.00%",
    height: "62.00%",
    width: "32.00%"
  },
  line3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
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
  february: {
    position: "absolute",
    top: "12.00%",
    left: "39.06%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "Avenir-Book",
    lineHeight: 17,
    textAlign: "center"
  },
  headerBg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "44.98%",
    width: "100.00%",
    backgroundColor: "rgba(186,119,255,1)"
  },
  pieChart: {
    position: "absolute",
    top: "63.42%",
    left: "28.67%",
    height: "23.99%",
    width: "42.80%"
  },
  chart: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  oval4491: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "99.69%",
    backgroundColor: "transparent"
  },
  oval4481: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "99.69%",
    backgroundColor: "transparent"
  },
  oval4501: {
    position: "absolute",
    top: "0.00%",
    left: "6.56%",
    height: "100.00%",
    width: "93.13%",
    backgroundColor: "transparent"
  },
  total: {
    position: "absolute",
    top: "60.67%",
    left: "38.16%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  style: {
    position: "absolute",
    top: "32.50%",
    left: "32.71%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    fontFamily: "Avenir-Light",
    lineHeight: 46,
    textAlign: "center"
  },
  goodJobYouveCom: {
    position: "absolute",
    top: "35.08%",
    left: "18.67%",
    height: "6.00%",
    width: "62.80%",
    opacity: 0.8,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "Avenir-Book",
    lineHeight: 26,
    textAlign: "center"
  },
  brandonHarris: {
    position: "absolute",
    top: "29.09%",
    left: "27.33%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "Avenir-Light",
    lineHeight: 33,
    textAlign: "center"
  },
  avatar: {
    position: "absolute",
    top: "12.59%",
    left: "38.00%",
    height: "13.49%",
    width: "24.00%"
  },
  mask: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 90,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  img1: {
    position: "absolute",
    top: "0.00%",
    left: "-3.33%",
    height: "106.11%",
    width: "108.89%",
    backgroundColor: "transparent"
  },
  overdue: {
    position: "absolute",
    top: "48.73%",
    left: "75.87%",
    height: "9.22%",
    width: "15.33%"
  },
  overdue2: {
    position: "absolute",
    top: "0.00%",
    left: "38.26%",
    height: "21.14%",
    width: "22.61%",
    backgroundColor: "transparent"
  },
  style1: {
    position: "absolute",
    top: "67.48%",
    left: "30.43%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Avenir-Book",
    lineHeight: 26
  },
  overdue3: {
    position: "absolute",
    top: "37.40%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  snoozed: {
    position: "absolute",
    top: "48.73%",
    left: "42.00%",
    height: "9.22%",
    width: "16.00%"
  },
  snoozed2: {
    position: "absolute",
    top: "0.00%",
    left: "39.17%",
    height: "21.14%",
    width: "21.67%",
    backgroundColor: "transparent"
  },
  style2: {
    position: "absolute",
    top: "67.48%",
    left: "31.67%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Avenir-Book",
    lineHeight: 26,
    textAlign: "center"
  },
  snoozed3: {
    position: "absolute",
    top: "37.40%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  completed: {
    position: "absolute",
    top: "48.73%",
    left: "7.33%",
    height: "9.22%",
    width: "19.87%"
  },
  style3: {
    position: "absolute",
    top: "67.48%",
    left: "27.52%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Avenir-Book",
    lineHeight: 26,
    textAlign: "center"
  },
  completed1: {
    position: "absolute",
    top: "37.40%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    fontFamily: "Avenir-Book",
    lineHeight: 14,
    textAlign: "center"
  },
  completed3: {
    position: "absolute",
    top: "0.00%",
    left: "41.61%",
    height: "21.14%",
    width: "17.45%",
    backgroundColor: "transparent"
  },
  navbar: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "9.60%",
    width: "100.00%"
  },
  bounds2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  edit: {
    position: "absolute",
    top: "45.31%",
    left: "90.00%",
    height: "39.06%",
    width: "6.67%"
  },
  group2: {
    position: "absolute",
    top: "8.00%",
    left: "10.00%",
    height: "82.00%",
    width: "80.00%"
  },
  shape1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
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
  },
  profile: {
    position: "absolute",
    top: "46.88%",
    left: "43.33%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontFamily: "Avenir-Light",
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
  group3: {
    position: "absolute",
    top: "16.00%",
    left: "10.00%",
    height: "68.00%",
    width: "80.00%"
  },
  line5: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  line7: {
    position: "absolute",
    top: "47.06%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  line9: {
    position: "absolute",
    top: "94.12%",
    left: "0.00%",
    height: "5.88%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  bounds4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  }
});
