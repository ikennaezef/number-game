import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.text}>#{roundNumber}</Text>
			<Text style={styles.text}>Opponent's Guess: {guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		marginVertical: 8,
		padding: 8,
		borderColor: colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		backgroundColor: colors.accent500,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		fontFamily: "open-sans",
	},
});
