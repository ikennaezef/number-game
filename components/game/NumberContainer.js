import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colors.accent500,
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 36,
		color: colors.accent500,
		fontFamily: "open-sans-bold",
	},
});
