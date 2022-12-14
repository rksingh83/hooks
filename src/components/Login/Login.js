import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { Input } from "../UI/input/input";

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		setFormIsValid(
			enteredPassword.length > 6 && enteredEmail.includes("@")
		);
	}, [enteredEmail, enteredPassword]);
	/* if we return anything else function or undefined or nothing then
	it will throw destroy is not a function
	*/
	useEffect(() => {
		console.log("calling api without debouncing");
		let timerId = setTimeout(() => {
			console.log(".......calling api now.....");
		}, 2000);
		return () => clearTimeout(timerId);
	}, [enteredEmail]);

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes("@"));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(enteredEmail, enteredPassword);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					isValid={emailIsValid}
					type="email"
					label="Email"
					id="email"
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					isValid={passwordIsValid}
					type="password"
					label="Password"
					id="password"
					value={enteredPassword}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
