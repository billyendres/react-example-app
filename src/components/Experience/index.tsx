import React from "react";
import styled from "styled-components";

const Experience: React.FC = () => {
	return (
		<Wrap>
			<h1>Experience</h1>
			<p>
				<p>
					My professional experience to date has been in a small team, Agile
					environment. With development processes including PR's, CI and unit tests
					for all production code which is uploaded to Github, while libraries are
					published to npm. I really enjoy this style of work and have learned a lot
					in the last couple of years.
				</p>
				Some of the recent projects that I've been involved with include production
				built apps for household name companies such as Marriot Group, Google,
				Japara and Crowd DJ. Although the codebase for these projects are stored in
				private company repos, I've included a projects tab in this application with
				some screenshots and code snippets.
				<p>
					I always aim to write clean, concise and easily maintainable code. This is
					part of the reason why I enjoy using libraries like Typescript, React,
					Cosmos and Styled Components to help make code modular and reusable.
				</p>
				Since the release of React 16.8, I have utilised hooks and context for state
				management. I believe React is the future of frontend technologies. With
				updates like this proving its position as one of the best component based
				libraries/frameworks. In combination with hooks, I enjoy using Styled
				Components and CSS in JS. Conveniently storing all CSS additions within your
				components eliminates a lot of the potential confusion associated with
				external styling files.
				<p>
					I also have a passion for UI UX design and have been working with tools
					like Adobe XD in my spare time. These design skills are something I hope to
					improve on and bring to my professional portfolio.
				</p>
				This has been my experience to date, however I am always eager to learn more
				and would be happy to pick up extra skills or technologies that your company
				focuses work around, and to complete any required code tests.
				<p>
					Thanks a lot for taking the time to read my application. Please feel free
					to contact me anytime, I would love to discuss any availble position and
					learn more about your company,
				</p>
				<p>Billy</p>
			</p>
		</Wrap>
	);
};

export default Experience;

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	> h1 {
		border-bottom: 0.25rem solid;
		font-size: 5rem;
		text-transform: uppercase;
		margin-top: 5rem;
		@media (max-width: 1650px) {
			font-size: 2.5rem;
			margin-top: 3rem;
		}
		@media (max-width: 800px) {
			font-size: 1.25rem;
			margin-top: 1.25rem;
		}
	}
	> p {
		font-size: 2rem;
		margin: 0 14rem 14rem 14rem;
		@media (max-width: 1650px) {
			font-size: 1rem;
			margin: 0 7rem 7rem 7rem;
		}
		@media (max-width: 800px) {
			font-size: 0.75rem;
			margin: 0 4rem 4rem 4rem;
		}
	}
`;
