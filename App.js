import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
LinearGradient;
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	};

	return (
		<LinearGradient
			colors={[colors.primary700, colors.accent500]}
			style={styles.rootScreen}>
			<StatusBar style="light" />
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.bgImage}>
				<SafeAreaView style={styles.rootScreen}>
					{userNumber ? (
						<GameScreen userNumber={userNumber} />
					) : (
						<StartGameScreen onConfirmNumber={pickedNumberHandler} />
					)}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	bgImage: {
		opacity: 0.3,
	},
});
