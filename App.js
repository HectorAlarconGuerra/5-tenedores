import React from "react";
import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";
//import {decode, encode} from "base-64";
//import { LogBox } from "react-native";

//YellowBox.ignoreWarnings(["Setting a timer"]);
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}
