/** @format */

import axios from "axios";
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { DetailsProp } from "../types/screens";

const Details: React.FC<DetailsProp> = (props) => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);
	const [data, setData] = React.useState<Record<string, any>>({});

	React.useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.nasa.gov/neo/rest/v1/neo/${props.route.params.id}?api_key=KxdSpbV7eHx1UufmwduVl9KoslktrXGw1D4usxwh`
			)
			.then((res) => setData(res.data))
			.catch((err) => setError(true))
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<View>
			{loading ? (
				<ActivityIndicator />
			) : error ? (
				<Text>Error!</Text>
			) : (
				<View>
					<Text>Name : {data.name}</Text>
					<Text>Nasa Jpl URL : {data.nasa_jpl_url}</Text>
					<Text>
						Is Potentially Hazardous :{" "}
						{data.is_potentially_hazardous_asteroid ? "yes" : "no"}
					</Text>
				</View>
			)}
		</View>
	);
};

export default Details;
