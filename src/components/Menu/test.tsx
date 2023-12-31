import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Menu } from ".";

describe("<Menu />", () => {
	it("should render the menu", () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
		expect(screen.getByRole("img", { name: /Won Games/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument();
	});
});