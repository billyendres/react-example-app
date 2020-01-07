import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../App";

interface Props {
	onClick: () => void;
}

const Banner: React.FC<Props> = ({ onClick }) => {
	const [menu, setMenu] = useState(false);
	const { theme } = useContext(ThemeContext);
	const history = useHistory();

	return (
		<>
			<Wrap style={theme ? DarkTheme : LightTheme}>
				{theme ? (
					<DarkButton onClick={onClick}>Light Theme</DarkButton>
				) : (
					<LightButton onClick={onClick}>Dark Theme</LightButton>
				)}
				<Header onClick={() => history.push("/")}>Billy Endres</Header>

				{theme ? (
					<DarkButton onClick={() => setMenu(!menu)}>
						{menu ? "Close Menu" : "Open Menu"}
					</DarkButton>
				) : (
					<LightButton onClick={() => setMenu(!menu)}>
						{menu ? "Close Menu" : "Open Menu"}
					</LightButton>
				)}
			</Wrap>
			{menu && (
				<Links>
					<h2 onClick={() => history.push("/experience")}>Experience</h2>
					<h2 onClick={() => history.push("/hobbies")}>About Me</h2>
					<h2 onClick={() => history.push("/projects")}>Projects</h2>
				</Links>
			)}
		</>
	);
};

export default Banner;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	width: auto;
	height: 8rem;
	padding: 0 2rem 0 2rem;
	@media (max-width: 1650px) {
		padding: 0 1rem 0 1rem;
		height: 5rem;
	}
`;

const Header = styled.div`
	font-size: 3rem;
	padding: 0 2rem 0 2rem;
	cursor: pointer;
	text-transform: uppercase;
	@media (max-width: 1650px) {
		font-size: 1.5rem;
	}
`;

const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	justify-content: center;
	width: 16rem;
	right: 2rem;
	@media (max-width: 1650px) {
		right: 1rem;
		width: 8rem;
	}
	> h2 {
		z-index: 2;
		font-size: 2rem;
		padding: 0 2rem 0 2rem;
		cursor: pointer;
		text-transform: uppercase;
		@media (max-width: 1650px) {
			font-size: 1rem;
			padding: 0 1rem 0 1rem;
		}
		@media (max-width: 950px) {
			font-size: 0.75rem;
			padding: 0 0.75rem 0 0.75rem;
		}
	}
`;

const DarkButton = styled.button`
	width: 18rem;
	height: 4rem;
	font-size: 1.75rem;
	border: 0.25rem solid;
	border-radius: 1rem;
	color: white;
	padding: 0;
	outline: none;
	text-transform: uppercase;
	background: rgb(0, 0, 0);
	cursor: pointer;
	font-family: "Montserrat";
	:hover {
		color: #3a7bd5;
	}
	@media (max-width: 1650px) {
		font-size: 1rem;
		border: 0.125rem solid;
		width: 10rem;
		height: 2.5rem;
		border-radius: 0.5rem;
	}
`;

const LightButton = styled.button`
	width: 14rem;
	height: 4rem;
	font-size: 2rem;
	border: 0.25rem solid;
	border-radius: 1rem;
	color: black;
	padding: 0;
	outline: none;
	text-transform: uppercase;
	background: rgb(255, 255, 255);
	cursor: pointer;
	font-family: "Boogaloo";
	:hover {
		color: #ff5e62;
	}
	@media (max-width: 1650px) {
		font-size: 1rem;
		border: 0.125rem solid;
		width: 8rem;
		height: 2rem;
		border-radius: 0.5rem;
	}
`;

const DarkTheme = {
	background: "rgb(0, 0, 0)",
	color: "white",
	boxShadow: "1.5rem 1.5rem 4rem 0.125rem white"
};

const LightTheme = {
	background: "rgba(255,255,255,0.7)",
	color: "black",
	boxShadow: "1.5rem 1.5rem 4rem 0.125rem"
};
