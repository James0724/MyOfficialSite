import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

function Layout({ children }) {
	return (
		<>
			<Router>
				<Header />
			</Router>
			{children}
			<footer className="footer" data-scroll-section>
				<p>Design and built by James Kahoro</p>
				<p>&copy; {new Date().getFullYear()}</p>
			</footer>
		</>
	);
}

export default Layout;
