import React, { useState, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
//import Context from "./components/context/Context";
import { Context } from "./components/context/Context2";
function App() {
	const context = useContext(Context);
	console.log(context);

	return (
		<React.Fragment>
			<MainHeader />
			<main>
				{!context.isLoggedIn && (
					<Login onLogin={context.loginHandler} />
				)}
				{context.isLoggedIn && (
					<Home onLogout={context.logoutHandler} />
				)}
			</main>
		</React.Fragment>
	);
}

export default App;
