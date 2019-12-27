import React from "react";
import styled from "styled-components";

const Banner: React.FC = () => {
	return (
		<Wrap>
			<h1>Developer Portfolio</h1>
			<h1>Developer Portfolio</h1>
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
	/* box-shadow: 5px 10px #888888; */
`;
