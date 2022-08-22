import React from "react";
import Paragraph from "./Paragraph";

const DemoOutput = (props) => {
	console.log("child component recalculated");
	return (
		<div>
			<Paragraph>{props.show ? "outputting data ****" : ""}</Paragraph>
		</div>
	);
};

export default React.memo(DemoOutput);
