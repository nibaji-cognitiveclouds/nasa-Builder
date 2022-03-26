/** @format */

import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { styles } from "../styles/screens";
import { nasaItem } from "../types/response";
import { detailsProp } from "../types/screens";

const Details: FC<detailsProp> = (props) => {
	const [data, setData] = useState<nasaItem>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

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
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<SafeAreaView testID="details" style={styles.container}>
			{loading ? (
				<ActivityIndicator color={"red"} size={20} />
			) : error ? (
				<Text>Something Went wrong!</Text>
			) : (
				<View>
					<Text>Name: {data?.name}</Text>
					<Text>Nasa JPl URL: {data?.nasa_jpl_url}</Text>
					<Text>
						Is potentially hazardous:{" "}
						{data?.is_potentially_hazardous_asteroid ? "yes" : "no"}
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Details;
