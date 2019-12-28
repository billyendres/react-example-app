import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Login: React.FC = () => {
	const history = useHistory();
	const [name, setName] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		if (name.length <= 2) {
			null;
		} else {
			e.preventDefault();
			history.push("hobbies");
		}
	};

	return (
		<>
			<Wrap>
				<Form onSubmit={handleSubmit}>
					<label>Welcome</label>
					<input type="text" value={name} onChange={e => setName(e.target.value)} />
					<input type="submit" value="Click To Enter" />
				</Form>
			</Wrap>
		</>
	);
};

export default Login;

const Wrap = styled.div`
	display: flex;
	height: 20rem;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	width: 5rem;
	justify-content: center;
`;
