/** @format */

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import React from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export type RootStackParamList = {
	Details: {};
};

const Home: React.FC = () => {
	const [id, setId] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	function getRandom() {
		axios
			.get(
				"https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=cgFoDzaE9hdKE9UousiEPaX0V0B8GaO0ICUOMexs"
			)
			.then((res) => {
				const random = Math.floor(
					Math.random() * res.data?.near_earth_objects?.length
				);
				navigation.navigate("Details", {
					id: res.data?.near_earth_objects?.[random]?.id,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			<TextInput
				placeholder="Enter asteroid id"
				placeholderTextColor={"grey"}
				onChangeText={(text) => setId(text)}
				style={{
					padding: 5,
					borderColor: "grey",
					borderWidth: 1,
					borderRadius: 5,
					margin: 5,
					width: "70%",
					marginBottom: 5,
				}}
			/>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<Button
					disabled={!id.length}
					title="Submit"
					onPress={() => navigation.navigate("Details", { id: id })}
				/>
				{loading ? (
					<ActivityIndicator />
				) : (
					<Button
						title="Random Asteroid"
						onPress={() => {
							setLoading(true);
							getRandom();
						}}
					/>
				)}
			</View>
		</View>
	);
};

export default Home;
