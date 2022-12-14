import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, guesses, onRestart }) => {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;
	if (width < 380) {
		imageSize = 150;
	}

	if (height < 400) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.container}>
				<Title>Game Over</Title>
				<View style={[styles.imageContainer, imageStyle]}>
					<Image
						source={require("../assets/images/success.png")}
						style={styles.image}
					/>
				</View>
				<Text style={styles.summaryText}>
					Your phone needed <Text style={styles.highlight}>{guesses}</Text>{" "}
					rounds to guess the number{" "}
					<Text style={styles.highlight}>{userNumber}</Text>
				</Text>
				<PrimaryButton onPress={onRestart}>New Game</PrimaryButton>
			</View>
		</ScrollView>
	);
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: deviceWidth < 380 ? 150 : 300,
		height: deviceWidth < 380 ? 150 : 300,
		borderRadius: deviceWidth < 380 ? 75 : 150,
		overflow: "hidden",
		borderWidth: 3,
		borderColor: colors.primary800,
		margin: 25,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 20,
		textAlign: "center",
		marginVertical: 24,
		paddingHorizontal: 10,
	},
	highlight: {
		fontFamily: "open-sans-bold",
		color: colors.primary500,
	},
});
