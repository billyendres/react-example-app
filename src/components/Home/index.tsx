import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiGithubBox } from "@mdi/js";
import { mdiLinkedinBox } from "@mdi/js";

const Home: React.FC = () => {
	return (
		<Background>
			<Wrap>
				<h1>Billy Endres</h1>
				<h2>Software Developer</h2>
				<h3>endres63@hotmail.com</h3>
				<IconWrap>
					<Icon path={mdiGithubBox} color="white" size={5} />
					<Icon path={mdiLinkedinBox} color="white" size={5} />
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
	height: 60%;
	width: 60%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border: 5px solid white;
	border-radius: 3rem;
	box-shadow: 1.5rem 1.5rem 4rem 0.125rem;
	background: rgb(0, 0, 0);
	> h1 {
		font-size: 5rem;
		color: white;
		margin-bottom: 0;
		text-transform: uppercase;
		border-bottom: 0.5rem dotted white;
	}
	> h2 {
		font-size: 4rem;
		color: white;
		margin-bottom: 0;
		margin-top: 1rem;
		text-transform: uppercase;
		border-bottom: 0.4rem dotted white;
	}
	> h3 {
		font-size: 3rem;
		color: white;
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-bottom: 0.3rem dotted white;
	}
`;

const IconWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;
