import React from "react";
import { Image, StyleSheet, View, Text, Button, Alert } from "react-native";
import colors from "../config/colors";

function Mood(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headRent}>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
            flexWrap: "wrap",
            fontSize: 18,
            marginTop: 35,
            width: 200,
            color: "#2e4756",
          }}
        >
          How are you feeling today?{" "}
        </Text>
      </View>

      <View style={styles.containerDescription}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/happy.png")}
        />
        {/* <Button
          style={styles.loginScreenButton}
          title="Happy"
          onPress={() =>
            Alert.alert(
              "Bicyle",
              "This bicyle is new and the cost for the rent is $10"
            )
          }
        /> */}
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/anxious.png")}
        />
        {/* <Button
          title="Video Games"
          onPress={() =>
            Alert.alert(
              "Video Games",
              "This vide games are new and the cost for the rent is $20"
            )
          }
        /> */}
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/scream.png")}
        />
        {/* <Button
          title="Video Games"
          onPress={() =>
            Alert.alert(
              "Video Games",
              "This vide games are new and the cost for the rent is $20"
            )
          }
        /> */}
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/angry.png")}
        />
        {/* <Button
          title="Video Games"
          onPress={() =>
            Alert.alert(
              "Video Games",
              "This vide games are new and the cost for the rent is $20"
            )
          }
        /> */}
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/inLove.png")}
        />

        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/nervous.png")}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/sad.png")}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/sick.png")}
        />

        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/moods/tired.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //put in alphabetical order
  image: {
    width: "20%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 15,
  },
  container: {
    backgroundColor: colors.white,
    flexWrap: "wrap",
  },
  headRent: {
    width: "100%",
    height: 70,
    backgroundColor: "#ebf5ee",
    flexDirection: "row",
  },
  containerDescription: {
    width: "100%",
    height: "88%",
    backgroundColor: colors.white,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default Mood;
