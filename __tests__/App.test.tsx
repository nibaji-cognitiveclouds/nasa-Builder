/** @format */
import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Home from "../src/screens/home";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
	const actualNav = jest.requireActual("@react-navigation/native");
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: mockedNavigate,
		}),
	};
});

describe("<Home />", () => {
	it("has 2 children", () => {
		const tree = renderer.create(<Home />).toJSON();
		console.log(tree);
		expect(tree.children.length).toBe(2);
	});

	it("matches snapshot", () => {
		const tree = renderer.create(<Home />).toJSON();
		console.log(tree);
		expect(tree).toMatchSnapshot();
	});
});
