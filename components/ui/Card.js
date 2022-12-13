import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.primary800,
		padding: 16,
		borderRadius: 8,
		elevation: 16,
		alignItems: "center",
		marginTop: deviceWidth < 380 ? 18 : 36,
	},
});
