import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Groups from "./src/screens/Groups";
import Profile from "./src/screens/Profile";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Groups: {
    screen: Groups
  },
  Profile: {
    screen: Profile
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Groups: {
      screen: Groups
    },
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Book": require("./src/assets/fonts/Avenir-Book.ttf"),
      "Avenir-Light": require("./src/assets/fonts/Avenir-Light.ttf"),
      "Avenir-Light": require("./src/assets/fonts/Avenir-Light.ttf"),
      "Avenir-Light": require("./src/assets/fonts/Avenir-Light.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
