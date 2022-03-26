/** @format */

import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import {
	ActivityIndicator,
	Alert,
	SafeAreaView,
	Text,
	View,
} from "react-native";

const Details: FC = (props: any) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.nasa.gov/neo/rest/v1/neo/${props.route.params.id}?api_key=WaBk2sqO5hRFhZAegMGFcdSHsiHk7gFaLczNk3B9`
			)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => {
				Alert.alert("Error", "Something Went wrong", [
					{
						text: "ok",
					},
				]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<SafeAreaView testID="details">
			{loading ? (
				<ActivityIndicator color={"red"} size={20} />
			) : (
				<View>
					<Text>Name: {data.name}</Text>
					<Text>Nasa JPl URL: {data.nasa_jpl_url}</Text>
					<Text>
						Is potentially hazardous:{" "}
						{data.is_potentially_hazardous_asteroid ? "yes" : "no"}
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Details;
