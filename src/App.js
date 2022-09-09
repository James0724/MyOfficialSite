import React, { useState, useRef, useEffect } from "react";

import Home from "./components/Home";

import "./styles/main.scss";
import Starter from "./components/Starter";

const App = () => {
	const [preloader, setPreloader] = useState(true);

	const [timer, setTimer] = useState(5);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	return <>{preloader ? <Starter /> : <Home />}</>;
};
export default App;
