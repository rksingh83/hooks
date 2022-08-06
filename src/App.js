import React, { useState, useEffect } from "react";

const App = () => {
	const [data, setData] = useState([
		{ id: 1, text: "Vidya" },
		{ id: 1, text: "Vidya" },
	]);
	useEffect(() => {
		console.log("logging");
	}, [data]);

	const addDiv = () => {
		setData([...data, { id: 333, text: "rakesh" }]);
	};
	const changeInput = (text, position) => {
		console.log(text, position);
		let temp = [...data];
		temp[position].text = text;
		setData(temp);
	};
	return (
		<div>
			<button onClick={addDiv}>Addd</button>
			{data.map((item, index) => (
				<div>
					<input
						onChange={(e) => changeInput(e.target.value, index)}
						value={item.text}
					></input>
				</div>
			))}
		</div>
	);
};

export default App;
