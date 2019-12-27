import React from "react";
import GlobalStyle from "./GlobalStyle";

const Wrap: React.FC = ({ children }) => (
	<>
		<GlobalStyle />
		{children}
	</>
);

export default Wrap;
