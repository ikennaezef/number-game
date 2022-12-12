import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: "open-sans",
		color: colors.accent500,
		fontSize: 24,
	},
});
