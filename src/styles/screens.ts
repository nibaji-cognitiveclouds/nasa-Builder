/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "80%",
		padding: 10,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 10,
	},
	buttonsRow: { flexDirection: "row", justifyContent: "space-between" },
	asteroid: {
		margin: 20,
		justifyContent: `center`,
		alignItems: `flex-start`,
	},
});
