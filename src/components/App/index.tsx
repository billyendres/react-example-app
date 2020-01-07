import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "../Banner";
import Home from "../Home";
import Experience from "../Experience";
import Projects from "../Projects";
import Hobbies from "../Hobbies";
import Particles from "react-particles-js";
import { createGlobalStyle } from "styled-components";
export const ThemeContext = createContext(undefined);

const App: React.FC = () => {
	const [theme, setTheme] = useState(true);

	return (
		<ThemeContext.Provider value={{ theme }}>
			{!!theme ? <DarkTheme /> : <LightTheme />}
			<Router>
				<Banner onClick={() => setTheme(!theme)} />
				<Particles
					style={{ position: "fixed", width: "100%" }}
					params={{
						particles: { number: { value: 80 }, size: { value: 4 } },
						interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
					}}
				/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/hobbies" component={Hobbies} />
				</Switch>
			</Router>
		</ThemeContext.Provider>
	);
};

export default App;

const DarkTheme = createGlobalStyle`
  body {
		margin: 0;
    padding: 0;
    height: 100%;
		background: linear-gradient(to right, #3a7bd5, #3a6073); 
		color: white;
		font-family: 'Montserrat', sans-serif;  
	}`;

const LightTheme = createGlobalStyle`
  body {
		margin: 0;
    padding: 0;
    height: 100%;
    background:  linear-gradient(to right, #ff5e62, #ff9966);  
		color: black;
		font-family: 'Boogaloo', sans-serif;  
  }`;
