import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";

export default function List({ navigation }) {
    let sec = [
      {
        src: "require('../assets/donor.png')",
        title: "Help us to grow the community",
        per: "20%",
        raised: "10,000 Rs",
        createdBy: "ABC company",
      },
    ]}