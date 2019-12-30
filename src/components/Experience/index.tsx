import React from "react";
import styled from "styled-components";

const Experience: React.FC = () => {
	return (
		<Wrap>
			<h1>Employment History</h1>
			<div>
				I first began my journey as a software developer when I started researching
				Blockchain and realised the potential these technologies have to forward
				dated alternatives into the 21st century. Helping those in need, developing
				advanced solutions to current privacy issues and streamlining business are
				all real and relevant possibilities.
				<br />
				<br /> This interested has since branched off and I have found a passion for
				Javascript, particularly React development. Prior to 2018, all of my coding
				skills had been self taught, studying in my spare time, picking up skills in
				a variety of languages and frameworks. <br />
				<br />
				At this time I decided to pursue my goals professionally and completed a
				full time intensive coding bootcamp. This hands on, practical approach to
				learning helped me grow my coding skills exponentially and suited my style
				of learning over a more theoretical approach. <br />
				<br />
				Since completing this course I soon gained employment with meldCX in
				Melbourne, where I have been living and working fo the past year. My
				professional experience to date has been in a small team, Agile environment.
				With development processes including PR's, CI and unit tests for all
				production code which is uploaded to Github, while libraries are published
				to npm. <br />
				<br />I really enjoy this style of work and have learned a lot in the last
				couple of years. I am now looking to move into a remote first position out
				of the city and closer to friends and family. <br />
				<br />I always aim to write clean, concise and easily maintainable code.
				This is part of the reason why I enjoy using libraries like Typescript,
				React/Cosmos and Styled Components to help make code modular and reusable.
				Since the release of React 16.8, I have utilised hooks and context for state
				management. I believe React is the future of frontend technologies. With
				updates like this proving its position as one of the best component based
				libraries/frameworks. <br />
				<br />
				In combination with hooks, I really like to use Styled Components.
				Conveniently storing all CSS additions within your component eliminates a
				lot of the potential confusion associated with external styling files. I
				also have a passion for UI UX design and have been working with tools like
				Adobe XD in my spare time. These design skills are something I hope to
				improve on and bring to my professional portfolio.
				<br />
				<br /> This has been my experience to date, however I am always eager to
				learn more and would be happy to pick up extra skills or technologies that
				your company focuses work around. I am happy to complete any required code
				tests, or create an example app of my own. (Most of my recent work is stored
				on private company repos.) Thanks a lot for taking the time to read my
				application. Please feel free to contact me anytime, I would love to discuss
				the position further and learn more about your company, <br />
				<br />
				Billy
			</div>
		</Wrap>
	);
};

export default Experience;

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	> h1 {
		font-size: 5rem;
		text-transform: uppercase;
		margin-top: 4.5rem;
	}
	> div {
		font-size: 2rem;
		margin: 0 10rem 10rem 10rem;
	}
`;
