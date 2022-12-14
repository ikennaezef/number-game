import { StyleSheet, Text, Platform } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Title = ({ children }) => {
	return <Text style={styles.titleText}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	titleText: {
		fontFamily: "open-sans-bold",
		fontSize: 24,
		color: "white",
		textAlign: "center",
		padding: 12,
		borderColor: "white",
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderWidth: Platform.select({ ios: 0, android: 2 }),
		marginTop: 20,
		maxWidth: "80%",
		width: 300,
	},
});
