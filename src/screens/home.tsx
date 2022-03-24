/** @format */

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { Button, TextInput, View } from "react-native";

const Home: React.FC = () => {
	const [text, setText] = React.useState<string>("");
	const [randomLoading, setRandomLoading] = React.useState<boolean>(false);
	const navigation = useNavigation();

	function getRandomId() {
		axios
			.get(
				"https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=KxdSpbV7eHx1UufmwduVl9KoslktrXGw1D4usxwh"
			)
			.then((res) => {
				const randomNum = Math.floor(
					Math.random() * res.data.near_earth_objects.length
				);
				navigation.navigate("Details", {
					id: res.data.near_earth_objects[randomNum].id,
				});
			});
	}

	return (
		<View>
			<TextInput
				placeholder="Enter Asteroid ID"
				placeholderTextColor={"black"}
				onChangeText={(text) => {
					setText(text);
				}}
			/>

			<View style={{ flexDirection: "row" }}>
				<Button
					title="Submit"
					onPress={() => {
						navigation.navigate("Details", {
							id: text,
						});
					}}
					disabled={text.length > 0 ? false : true}
				/>
				<Button
					title="Random Asteroid"
					onPress={() => {
						setRandomLoading(true);
						getRandomId();
					}}
					disabled={randomLoading}
				/>
			</View>
		</View>
	);
};

export default Home;
