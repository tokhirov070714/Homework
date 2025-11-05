import React from "react";
import { Link } from "react-router";


const About: React.FC = () => {
	return (
		<div>
			<h1>Hello this is the about page</h1>
			<Link to="/">Home</Link>
		</div>
	);
};

export default About;
