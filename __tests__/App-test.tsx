/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Home from "../src/screen/Home";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
	const actualNav = jest.requireActual("@react-navigation/native");
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: jest.fn(),
			dispatch: mockedDispatch,
		}),
	};
});

it("renders <Home/> correctly", () => {
	renderer.create(<Home />);
});
