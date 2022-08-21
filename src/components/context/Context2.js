import React, { useState, useEffect } from "react";

const defaultState = {
	isLoggedIn: false,
	logout: () => {},
	logIn: (email, password) => {},
};
export const Context = React.createContext(defaultState);

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	return (
		<Context.Provider
			value={{
				isLoggedIn: isLoggedIn,
				logoutHandler: logoutHandler,
				loginHandler: loginHandler,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
