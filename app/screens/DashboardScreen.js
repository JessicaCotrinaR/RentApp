import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headDashboard}>
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
            How have I been feeling ?{" "}
          </Text>
        </View>
        {/* <Text>My Line Chart</Text> */}
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#166088",
            backgroundGradientFrom: "#166088",
            backgroundGradientTo: "#4a6fa5",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}
export default DashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  headDashboard: {
    width: "100%",
    height: 70,
    backgroundColor: "#ebf5ee",
    flexDirection: "row",
  },
});
