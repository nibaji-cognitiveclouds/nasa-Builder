/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";
import { shallow } from "enzyme";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Home from "../src/screen/Home";
import Details from "../src/screen/Details";

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

it("renders <App/> correctly", () => {
	renderer.create(<App />);
});

it("renders <Details/> correctly", () => {
	shallow(<Details />);
});
