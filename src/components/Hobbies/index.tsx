import React from "react";
import hiking from "./images/hiking.png";
import surf from "./images/surf.png";
import climbing from "./images/climbing.png";
import snow from "./images/snow.png";
import styled from "styled-components";

const Hobbies: React.FC = () => {
	const images = [
		{ hobby: "Surfing", src: surf },
		{ hobby: "Snowboarding", src: snow },
		{ hobby: "Hiking", src: hiking },
		{ hobby: " Rock Climbing", src: climbing }
	];

	return (
		<Wrap>
			<h1>Some of my hobbies!</h1>
			{images.map((image, key) => (
				<div>
					<Image src={image.src} alt={image.hobby} key={key} />
					<h2>{image.hobby}</h2>
				</div>
			))}
		</Wrap>
	);
};

export default Hobbies;

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	text-transform: uppercase;
	font-size: 2rem;
	@media (max-width: 1650px) {
		font-size: 1rem;
	}
	> h1 {
		font-size: 4rem;
		margin: 8rem 0 4rem 0;
		width: 100%;
		@media (max-width: 1650px) {
			font-size: 2rem;
			margin: 4rem 0 2rem 0;
		}
	}
`;

const Image = styled.img`
	width: 40rem;
	height: 30rem;
	border-radius: 3rem;
	margin: 2rem 2rem 0 2rem;
	border: 0.4rem solid;
	@media (max-width: 1650px) {
		width: 20rem;
		height: 15rem;
		border-radius: 2rem;
		margin: 1rem 1rem 0 1rem;
		border: 0.2rem solid;
	}
`;
