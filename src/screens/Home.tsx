/** @format */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import React, { FC, useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Button,
	SafeAreaView,
	TextInput,
	View,
} from "react-native";
import { styles } from "../styles/screens";
import { routes } from "../types/navigation";

const Home: FC = () => {
	const [text, setText] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NativeStackNavigationProp<routes>>();

	const getRandomAsteroid = () => {
		setLoading(true);
		axios
			.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
			.then((res) => {
				const randomNumber = Math.floor(
					Math.random() * res.data.near_earth_objects.length
				);
				navigation.navigate("Details", {
					id: res.data.near_earth_objects[randomNumber].id,
				});
			})
			.catch(() => {
				Alert.alert("Error", "Something Went wrong", [
					{
						text: "ok",
					},
				]);
			})
			.finally(() => setLoading(false));
	};

	return (
		<SafeAreaView testID="home" style={styles.container}>
			<TextInput
				placeholder="Enter Asteroid ID"
				placeholderTextColor={"grey"}
				onChangeText={(text) => setText(text)}
				style={styles.input}
			/>
			<View style={styles.buttonsRow}>
				<Button
					disabled={text.length == 0}
					title="Submit"
					onPress={() => {
						navigation.navigate("Details", { id: text });
					}}
				/>
				{loading ? (
					<ActivityIndicator color={"red"} size={20} />
				) : (
					<Button
						disabled={loading}
						title="Random Asteroid"
						onPress={() => {
							getRandomAsteroid();
						}}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Home;
