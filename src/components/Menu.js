import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { HashLink as Link } from "react-router-hash-link";

import { staggerReveal, staggerRevealClose } from "./Animations";

const Menu = ({ state }) => {
	// Create varibles of our dom nodes
	let menuLayer = useRef(null);
	let reveal1 = useRef(null);
	let reveal2 = useRef(null);

	useEffect(() => {
		// If the menu is open and we click the menu button to close it.
		if (state.clicked === false) {
			// If menu is closed and we want to open it.

			staggerRevealClose(reveal2, reveal1);
			// Set menu to display none
			gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
		} else if (
			state.clicked === true ||
			(state.clicked === true && state.initial === null)
		) {
			// Set menu to display block
			gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
			//Allow menu to have height of 100%
			gsap.to([reveal1, reveal2], {
				duration: 0,
				opacity: 1,
				height: "100%",
			});
			staggerReveal(reveal1, reveal2);
		}
	}, [state]);

	return (
		<div ref={(el) => (menuLayer = el)} className="hamburger-menu">
			<div
				ref={(el) => (reveal1 = el)}
				className="menu-secondary-background-color"
			></div>
			<div ref={(el) => (reveal2 = el)} className="menu-layer">
				<div className="container">
					<div className="wrapper">
						<div className="menu-links">
							<nav>
								<ul>
									<li>
										<Link to="#home" className="animated-arrow">
											<span className="the-arrow -left">
												<span className="shaft"></span>
											</span>
											<span className="main-link">
												<span className="text">Home</span>
												<span className="the-arrow -right">
													<span className="shaft"></span>
												</span>
											</span>
										</Link>
									</li>
									<li>
										<Link to="#about" className="animated-arrow">
											<span className="the-arrow -left">
												<span className="shaft"></span>
											</span>
											<span className="main-link">
												<span className="text">About</span>
												<span className="the-arrow -right">
													<span className="shaft"></span>
												</span>
											</span>
										</Link>
									</li>
									<li>
										<Link to="#project" className="animated-arrow">
											<span className="the-arrow -left">
												<span className="shaft"></span>
											</span>
											<span className="main-link">
												<span className="text">Works</span>
												<span className="the-arrow -right">
													<span className="shaft"></span>
												</span>
											</span>
										</Link>
									</li>
									<li>
										<Link to="#contact" className="animated-arrow">
											<span className="the-arrow -left">
												<span className="shaft"></span>
											</span>
											<span className="main-link">
												<span className="text">Contact</span>
												<span className="the-arrow -right">
													<span className="shaft"></span>
												</span>
											</span>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
