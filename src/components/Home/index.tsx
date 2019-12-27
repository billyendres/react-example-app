import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
	const history = useHistory();
	const [name, setName] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		history.push("hobbies");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={e => setName(e.target.value)} />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Home;
