/** @format */

import { render } from "@testing-library/react-native";
import React from "react";
import Details from "../src/screens/Details";

const props = {
	params: {
		id: "1234",
	},
};

describe("Details", () => {
	jest.useFakeTimers();
	it("renders without crash", () => {
		render(<Details route={props} />);
	});

	it("matches snapshot", () => {
		const tree = render(<Details route={props} />);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it("has component with req testID", () => {
		const tree = render(<Details route={props} />);
		expect(tree.getByTestId("details")).toBeTruthy();
	});

	it("has 1 child", () => {
		const tree = render(<Details route={props} />);
		//@ts-ignore
		expect(tree.toJSON().children.length).toBe(1);
	});
});
