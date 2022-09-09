import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Scroll from "./SmoothScroll";

import { animateFrom, hide } from "./Animations";
import HomeWrapper from "./HomeWrapper";
import AboutWrapper from "./AboutWrapper";
import FeaturedWorks from "./FeaturedWorks";
import ContactWrapper from "./ContactWrapper";
//import Layout from "./Layout";
import Header from "./Header";
import NonFeaturedWorks from "./NonFeaturedWorks";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useEffect(() => {
		// gsap.utils.toArray(".first").forEach((first, i) => {
		// 	ScrollTrigger.create({
		// 		trigger: first,
		// 		start: "top top",
		// 		pin: true,
		// 		pinSpacing: false,
		// 	});
		// });

		gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
			hide(elem);

			ScrollTrigger.create({
				trigger: elem,
				onEnter: function () {
					animateFrom(elem);
				},
				// onEnterBack: function () {
				// 	animateFrom(elem, -1);
				// },
				// onLeave: function () {
				// 	hide(elem);
				// },
			});
		});
	}, []);
	return (
		<>
			<Router>
				<Header />
			</Router>

			<div className="main">
				<title>James Kahoro</title>
				<Scroll />
				<HomeWrapper />
				<AboutWrapper />
				<FeaturedWorks />
				<NonFeaturedWorks />
				<ContactWrapper />
				<footer className="footer">
					<p>Design and built by James Kahoro</p>
					<p>&copy; {new Date().getFullYear()}</p>
				</footer>
			</div>
		</>
	);
};
export default Home;
