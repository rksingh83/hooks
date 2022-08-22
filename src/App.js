import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Demo/DemoOutput";
import Displaying from "./components/UI/Demo/Displaying";

const App = () => {
	console.log("component updated");
	const [isShowParagraph, setShowParagraph] = useState(false);
	const toggleDivHandler = useCallback(() => {
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	}, []);
	return (
		<div>
			<h1>Welcome</h1>
			<DemoOutput show={false} />
			<Displaying />
			<Button onClick={toggleDivHandler}>Toggle Div</Button>
		</div>
	);
};

export default App;
