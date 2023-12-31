import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { BannerSlider } from ".";
import { type BannerProps } from "../Banner";

describe("<BannerSlider />", () => {
	const items: BannerProps[] = [
		{
			img: "/img/banner-img.png",
			title: "Defy death 1",
			subtitle: "<p>Play the new <strong>Crashlands</strong> season",
			buttonLink: "/games/defy-death",
			buttonLabel: "Buy now",
			ribbon: "Bestselling",
		},
		{
			img: "/img/banner-img.png",
			title: "Defy death 2",
			subtitle: "<p>Play the new <strong>Crashlands</strong> season",
			buttonLink: "/games/defy-death",
			buttonLabel: "Buy now",
		},
	];

	it("should render vertical slider", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
	});

	it("should render with 1 active item", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelectorAll(".slick-slide")).toHaveLength(2);
		expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);

		expect(
			screen.getByRole("heading", { name: /Defy death 1/i, hidden: false }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Defy death 2/i, hidden: true }),
		).toBeInTheDocument();
	});

	it("should render with the dots", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-dots")).toBeInTheDocument();
	});
});
