/** @format */

import { render } from "@testing-library/react-native";
import React from "react";
import Home from "../src/screens/Home";

jest.mock("@react-navigation/native", () => {
	return {
		useNavigation: jest.fn(),
	};
});

describe("Home", () => {
	it("renders without crash", () => {
		render(<Home />);
	});

	it("matches snapshot", () => {
		const tree = render(<Home />);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it("has component with req testID", () => {
		const tree = render(<Home />);
		expect(tree.getByTestId("home")).toBeTruthy();
	});

	it("has button with req title", () => {
		const tree = render(<Home />);
		expect(tree.getByText("Random Asteroid")).toBeTruthy();
	});

	it("has textinput with req placeholder", () => {
		const tree = render(<Home />);
		expect(tree.getByPlaceholderText("Enter Asteroid ID")).toBeTruthy();
	});
});
