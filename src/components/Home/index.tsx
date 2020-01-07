import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiGithubBox } from "@mdi/js";
import { mdiLinkedinBox } from "@mdi/js";
import { ThemeContext } from "../App";

const Home: React.FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Background>
			<Wrap style={theme ? DarkBackground : LightBackground}>
				<h1>Billy Endres</h1>
				<h2>Software Developer</h2>
				<h3>endres63@hotmail.com</h3>
				<IconWrap>
					<a
						href="https://www.linkedin.com/in/billy-endres-687743137/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icons>
							<Icon path={mdiLinkedinBox} color={theme ? "white" : "black"} />
						</Icons>
					</a>
					<a
						href="https://github.com/billyendres"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icons>
							<Icon path={mdiGithubBox} color={theme ? "white" : "black"} />
						</Icons>
					</a>
				</IconWrap>
			</Wrap>
		</Background>
	);
};

export default Home;

const Background = styled.div`
	height: 85vh;
	width: 100vw;
	display: flex;
	position: fixed;
	justify-content: center;
	align-items: center;
`;

const Wrap = styled.div`
	height: 65%;
	width: 60%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	border: 0.4rem solid;
	align-items: center;
	border-radius: 3rem;
	box-shadow: 1.5rem 1.5rem 4rem 0.125rem;
	@media (max-width: 1650px) {
		height: 40%;
		width: 45%;
		border: 0.3rem solid;
	}
	@media (max-width: 950px) {
		height: 25%;
		width: 60%;
		border: 0.2rem solid;
	}
	@media (max-width: 750px) {
		height: 30%;
		width: 65%;
		border: 0.2rem solid;
	}
	> h1 {
		width: 70%;
		font-size: 5rem;
		margin-bottom: 0;
		text-transform: uppercase;
		border-bottom: 0.5rem dotted;
		@media (max-width: 1650px) {
			font-size: 3rem;
			border-bottom: 0.3rem dotted;
		}
		@media (max-width: 950px) {
			font-size: 2rem;
			border-bottom: 0.2rem dotted;
		}
	}
	> h2 {
		font-size: 4rem;
		margin-bottom: 0;
		margin-top: 1rem;
		text-transform: uppercase;
		width: 65%;
		border-bottom: 0.4rem dotted;
		@media (max-width: 1650px) {
			font-size: 2.5rem;
			border-bottom: 0.25rem dotted;
			width: 70%;
			margin-top: 0.5rem;
		}
		@media (max-width: 950px) {
			font-size: 1.5rem;
			border-bottom: 0.175rem dotted;
		}
	}
	> h3 {
		width: 60%;
		font-size: 3rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-bottom: 0.3rem dotted;
		text-align: center;
		@media (max-width: 1650px) {
			font-size: 1.75rem;
			border-bottom: 0.2rem dotted;
			text-align: center;
			width: 80%;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
		}
		@media (max-width: 950px) {
			font-size: 1rem;
			border-bottom: 0.1rem dotted;
		}
	}
`;

const IconWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

const LightBackground = {
	background: "rgba(255,255,255,0.7)"
};

const DarkBackground = {
	background: "rgb(0, 0, 0)"
};

const Icons = styled.div`
	width: 8rem;
	@media (max-width: 1650px) {
		width: 4rem;
	}
	@media (max-width: 950px) {
		width: 3rem;
	}
`;
