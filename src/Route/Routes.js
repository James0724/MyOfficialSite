import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Works from "../pages/Works";
import App from "../App";

function Routes() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="container">
					<div className="wrapper">
						<div className="home">
							<Switch>
								<Route exact path="/" component={App} />
								<Route exact path="/about" component={About} />
								<Route exact path="/contact" component={Contact} />
								<Route exact path="/Works" component={Works} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default Routes;
