/** @format */

import axios from "axios";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Details: React.FC = (prop: any) => {
	const [loading, setLoading] = React.useState(false);
	const [asteroid, setAsteroid] = React.useState({});
	const [noData, setNoData] = React.useState(false);

	function getData() {
		axios
			.get(
				`https://api.nasa.gov/neo/rest/v1/neo/${prop.route.params.id}?api_key=cgFoDzaE9hdKE9UousiEPaX0V0B8GaO0ICUOMexs`
			)
			.then((res) => {
				setAsteroid(res.data);
			})
			.catch(() => {
				setNoData(true);
			})
			.finally(() => setLoading(false));
	}

	React.useEffect(() => {
		setLoading(true);
		getData();
	}, []);

	return (
		<View
			style={{
				margin: 20,
				justifyContent: "center",
				flex: 1,
			}}
		>
			{loading ? (
				<ActivityIndicator />
			) : (
				<View
					style={{
						backgroundColor: "rgba(0,0,0,.2)",
						padding: 10,
						borderRadius: 10,
					}}
				>
					{noData ? (
						<Text>No asteroid found with that ID</Text>
					) : (
						<View>
							<Text>Name: {asteroid.name}</Text>
							<Text>NASA JPL URL: {asteroid.nasa_jpl_url}</Text>
							<Text>
								Is Potentially Hazardous:
								{asteroid.is_potentially_hazardous_asteroid ? " Yes" : " No"}
							</Text>
						</View>
					)}
				</View>
			)}
		</View>
	);
};

export default Details;
