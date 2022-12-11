import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={styles.buttonInnerContainer}
				onPress={onPress}
				android_ripple={{ color: colors.primary600 }}>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 30,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
});
