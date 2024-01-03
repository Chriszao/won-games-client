"use-client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
	$backgroundImage: string;
	$alignment: "right" | "left";
};

const wrapperModifiers = {
	left: () => css`
		grid-template-areas: "content floatImage";
		grid-template-columns: 2fr 1.3fr;

		${Content} {
			text-align: left;
		}

		${FloatImage} {
			justify-self: end;
		}
	`,

	right: () => css`
		grid-template-areas: "floatImage content";
		grid-template-columns: 1.3fr 2fr;

		${Content} {
			text-align: right;
		}
	`,
};

export const Wrapper = styled.section<WrapperProps>`
	${({ $backgroundImage, $alignment }) => css`
		position: relative;
		height: 23rem;
		display: grid;
		background-image: url(${$backgroundImage});
		background-position: center center;
		background-size: cover;

		&::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.6);
		}

		${media.greaterThan("medium")`
			height: 32rem;
		`}

		${wrapperModifiers[$alignment]()};
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		grid-area: content;
		z-index: ${theme.layers.base};
		padding: ${theme.spacings.xsmall};

		${media.greaterThan("medium")`
			align-self: end;
			padding: ${theme.spacings.large};
		`}
	`}
`;

export const Title = styled.h2`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.bold};

		${media.greaterThan("medium")`
			font-size: ${theme.font.sizes.xxlarge};
		`}
	`}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.light};
		margin-bottom: ${theme.spacings.medium};

		${media.greaterThan("medium")`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`;

export const FloatImage = styled.img`
	${({ theme }) => css`
		grid-area: floatImage;
		z-index: ${theme.layers.base};
		max-height: 23rem;
		max-width: 100%;
		align-self: end;

		${media.greaterThan("medium")`
			max-height: 32rem;
		`}
	`}
`;