import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../App";

interface Props {
	onClick: () => void;
}

const Banner: React.FC<Props> = ({ onClick }) => {
	const { theme } = useContext(ThemeContext);
	const history = useHistory();

	return (
		<Wrap style={theme ? DarkTheme : LightTheme}>
			<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
				<Header onClick={() => history.push("/")}>Billy Endres</Header>
				{theme ? (
					<DarkButton onClick={onClick}>Light Theme</DarkButton>
				) : (
					<LightButton onClick={onClick}>Dark Theme</LightButton>
				)}
			</div>
			<Links>
				<h2 onClick={() => history.push("/experience")}>Experience</h2>
				<h2 onClick={() => history.push("/hobbies")}>About Me</h2>
				<h2 onClick={() => history.push("/projects")}>Projects</h2>
			</Links>
		</Wrap>
	);
};

export default Banner;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: auto;
	height: 8rem;
	padding: 0 2rem 0 2rem;
`;

const Header = styled.div`
	font-size: 3rem;
	padding: 0 2rem 0 2rem;
	cursor: pointer;
	text-transform: uppercase;
`;

const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	> h2 {
		font-size: 2rem;
		padding: 0 2rem 0 2rem;
		cursor: pointer;
		text-transform: uppercase;
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
