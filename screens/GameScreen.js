import {
	Alert,
	FlatList,
	StyleSheet,
	useWindowDimensions,
	View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver, onGuess }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	const { width } = useWindowDimensions();

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie", "You know that's wrong...", [
				{ text: "Sorry", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else if (direction === "higher") {
			minBoundary = currentGuess + 1;
		}
		console.log(minBoundary, maxBoundary);

		const newNum = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newNum);
		onGuess();
		setGuessRounds((prevGuessRounds) => [newNum, ...prevGuessRounds]);
	};

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	let guessRoundsLength = guessRounds.length;

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							<Ionicons name="md-remove" size={24} />
						</PrimaryButton>
					</View>
					<View style={styles.button}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
							<Ionicons name="md-add" size={24} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</>
	);

	if (width > 500) {
		content = (
			<>
				<View style={styles.buttonsContainerWide}>
					<View style={styles.button}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							<Ionicons name="md-remove" size={24} />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.button}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
							<Ionicons name="md-add" size={24} />
						</PrimaryButton>
					</View>
				</View>
			</>
		);
	}

	return (
		<View style={styles.screenContainer}>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					keyExtractor={(item) => item}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsLength - itemData.index}
							guess={itemData.item}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screenContainer: {
		alignItems: "center",
		flex: 1,
		padding: 20,
	},
	instructionText: {
		marginBottom: 10,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonsContainerWide: {
		flexDirection: "row",
		alignItems: "center",
	},
	button: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
