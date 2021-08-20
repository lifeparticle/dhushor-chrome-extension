import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [url, setUrl] = useState<string>("");
	useEffect(() => {
		const queryInfo = { active: true, lastFocusedWindow: true };

		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			console.log(tabs[0].url);
			setUrl(tabs[0].url ? tabs[0].url : "");
		});
	}, []);

	console.log("ooo");
	return <div className="App">{url}</div>;
}

export default App;
