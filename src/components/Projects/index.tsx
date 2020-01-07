import React from "react";
import styled from "styled-components";
import japaraHome from "./images/japaraHome.png";
import slackAuth from "./images/slackAuth.png";
import cosmos from "./images/cosmos.png";
import jestExample from "./images/jestExample.png";
import codeSnippet from "./images/codeSnippet.png";
import deviceTest from "./images/deviceTest.png";

const Projects: React.FC = () => {
	const images = [
		{ project: "Japara App Switcher Landing Page", src: japaraHome },
		{ project: "Cloud Console With Slack OAuth Flow", src: slackAuth },
		{ project: "React Cosmos Reusable Component Example", src: cosmos },
		{ project: "Jest Unit Test Example", src: jestExample },
		{ project: "Code Snippet from Recent Marriot Hotel App", src: codeSnippet },
		{
			project: "Device Testing Suite",
			src: deviceTest
		}
	];

	return (
		<Wrap>
			<h1>Recent Projects</h1>
			<p>
				I have been fortunate enough to be involved in a lot of exciting projects
				for big name companies including;
				<br /> A Google demo app that uses accessibility modules such as fingerprint
				scanners, QR barcode readers and voice control.
				<br />
				Marriott Hotel Valet Parking and Room Service App. Allowing users to request
				a driver, order food, or contact reception all from the comfort of their
				room via the use of a touchscreen device.
				<br />
				Japara App Switcher with virtualised tabs. Allows staff to access residents
				medical requirements, book appointment and browse the web through a device.
				<p>
					These are a few examples of the many production quality projects I've been
					working on throughout the past year. As a matter of company privacy I am
					unable to link code references for the projects, or display images for
					unreleased product. I have added a few simple code snippets and screenshots
					for display purposes.
				</p>
				<p>
					Please feel free to ask me about any of the projects I have been working on
					and I would be happy to explain my role in the development process.
				</p>
			</p>
			{images.map((image, key) => (
				<div>
					<Image src={image.src} alt={image.project} key={key} />
					<p>{image.project}</p>
				</div>
			))}
		</Wrap>
	);
};

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	font-size: 2rem;
	@media (max-width: 1650px) {
		font-size: 1rem;
	}
	> h1 {
		text-transform: uppercase;
		font-size: 4rem;
		margin: 8rem 0 4rem 0;
		width: 100%;
		@media (max-width: 1650px) {
			font-size: 2rem;
			margin: 4rem 0 2rem 0;
		}
	}
	> p {
		text-align: left;
		margin: 0 8rem 2rem 8rem;
	}
`;

const Image = styled.img`
	width: 50rem;
	height: 40rem;
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

export default Projects;
