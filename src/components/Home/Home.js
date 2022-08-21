import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
	console.log(props);
	const handler = () => {
		console.log(" **called ***");
	};
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>

			<button onClick={props.onLogout}>Log out</button>
		</Card>
	);
};

export default Home;
