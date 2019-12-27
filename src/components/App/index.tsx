import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Banner from "../Banner";
import Home from "../Home";
import Experience from "../Experience";
import Projects from "../Projects";
import Hobbies from "../Hobbies";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Banner />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/hobbies" component={Hobbies} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
