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
			<h1 style={Header} onClick={() => history.push("/")}>
				Developer Portfolio
			</h1>
			<button onClick={onClick}>Change Theme</button>
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

const Header = {
	fontSize: "3rem",
	padding: "0 2rem 0 2rem",
	cursor: "pointer"
};

const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	> h2 {
		font-size: 2rem;
		padding: 0 2rem 0 2rem;
		cursor: pointer;
	}
`;
