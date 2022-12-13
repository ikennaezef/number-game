import {
	Alert,
	StyleSheet,
	TextInput,
	View,
	Dimensions,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onConfirmNumber }) => {
	const [input, setInput] = useState("");

	const { height } = useWindowDimensions();

	const inputHandler = (inputText) => {
		setInput(inputText);
	};

	const resetInputHandler = () => {
		setInput("");
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(input);

		if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
			Alert.alert("Invalid number", "Please enter a number between 1 and 99", [
				{ text: "Okay", style: "default", onPress: resetInputHandler },
			]);
			return;
		}

		onConfirmNumber(chosenNumber);
	};

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View
					style={[styles.screenContainer, { marginTop: marginTopDistance }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCorrect={false}
							value={input}
							onChangeText={inputHandler}
						/>
						<View style={styles.buttonGroup}>
							<View style={styles.button}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.button}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	screenContainer: {
		flex: 1,
		padding: 16,
		marginTop: deviceHeight < 380 ? 30 : 100,
		alignItems: "center",
	},

	numberInput: {
		width: 50,
		borderBottomColor: colors.accent500,
		color: colors.accent500,
		borderBottomWidth: 2,
		fontSize: 32,
		fontWeight: "bold",
		height: 50,
		marginVertical: 8,
		textAlign: "center",
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "stretch",
	},
	button: {
		flex: 1,
	},
});
