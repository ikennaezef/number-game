import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guesses, setGuesses] = useState(0);
	const [gameIsOver, setGameIsOver] = useState(false);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	};

	const gameOverHandler = () => {
		setGameIsOver(true);
	};

	const onNumberGuess = () => {
		setGuesses((prevGuesses) => prevGuesses + 1);
	};

	const newGameHandler = () => {
		setGameIsOver(false);
		setGuesses(0);
		setUserNumber(null);
	};

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
				onGuess={onNumberGuess}
			/>
		);
	}

	if (gameIsOver) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				guesses={guesses}
				onRestart={newGameHandler}
			/>
		);
	}

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
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
