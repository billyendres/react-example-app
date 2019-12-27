import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Banner: React.FC = () => {
	const history = useHistory();

	return (
		<Wrap>
			<h1 onClick={() => history.push("/")}>Developer Portfolio</h1>
			<Links>
				<h2 onClick={() => history.push("/home")}>Home</h2>
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
	height: 5rem;
	background: red;
	padding: 0 2rem 0 2rem;
	> h1 {
		padding: 0 2rem 0 2rem;
		cursor: pointer;
	}
`;

const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	> h2 {
		padding: 0 2rem 0 2rem;
		cursor: pointer;
	}
`;
