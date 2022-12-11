import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Title = ({ children }) => {
	return <Text style={styles.titleText}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	titleText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		padding: 12,
		borderColor: "white",
		borderWidth: 2,
		marginTop: 20,
	},
});
