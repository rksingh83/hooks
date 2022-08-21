import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { Context } from "../context/Context2";
const MainHeader = (props) => {
	const ctx = useContext(Context);
	return (
		<header className={classes["main-header"]}>
			<h1>A Typical Page</h1>
			<Navigation onLogout={ctx.onLogout} isLoggedIn={ctx.isLoggedIn} />
		</header>
	);
};

export default MainHeader;
