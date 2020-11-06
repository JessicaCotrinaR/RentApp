import React from "react";
import { Image, StyleSheet, View, Text, Button, Alert } from "react-native";
import colors from "../config/colors";

function Rent(props) {
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
            color: "#FFFFFF",
          }}
        >
          What do you want to rent?{" "}
        </Text>
      </View>

      <View style={styles.containerDescription}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/bicycle.jpg")}
        />
        <Button
          style={styles.loginScreenButton}
          title="Bicyle"
          onPress={() =>
            Alert.alert(
              "Bicyle",
              "This bicyle is new and the cost for the rent is $10"
            )
          }
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/game.jpg")}
        />
        <Button
          title="Video Games"
          onPress={() =>
            Alert.alert(
              "Video Games",
              "This vide games are new and the cost for the rent is $20"
            )
          }
        />
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/game.jpg")}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/game.jpg")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //put in alphabetical order
  image: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    flexWrap: "wrap",
  },
  headRent: {
    width: "100%",
    height: 70,
    backgroundColor: "#b7b7a4",
    flexDirection: "row",
  },
  containerDescription: {
    width: "80%",
    height: "70%",
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
export default Rent;
