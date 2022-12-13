import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colors.accent500,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: deviceWidth < 380 ? 28 : 36,
		color: colors.accent500,
		fontFamily: "open-sans-bold",
	},
});
