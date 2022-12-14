import React from "react";

//import { useIntersection } from "react-use";

import Aboutimg from "./aboutimg";

function AboutWrapper() {
	return (
		<section id="about" className="panel">
			<div className="about gs_reveal">
				<div className="about__img">
					<Aboutimg />
				</div>
				<div className="about__info">
					<div className="heading-wrapper">
						<div className="heading">
							<span>I was born to do exactly what I’m doing today</span>
							<h2>About me</h2>
						</div>
					</div>

					<div className="profile-wrapper">
						<div className="profile">
							<p>
								Hello, I am a self-taught programmer. My interest in programming
								started in 2018 after completing my undergraduate course in
								environmental studies resources conservation. I learned the
								foundations of programming and all the concepts needed to work
								as a full-stack web developer. I further enhanced my coding
								experience with Udacity full-stack web development Nanodegree
								program and got certified as a full-stack web developer. Over
								the years, I have developed and accomplished different projects
								involving user interface and experience, identity access
								management, data storage and modeling, API development and
								documentation, server deployment and containerization. My goal
								has always been not to build just a website but to help you
								develop your online business empire.
							</p>
							<p>
								In addition to my software development career, I am a
								professional in environmental matters such as environmental
								impact assessments, ecological research studies and consultancy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutWrapper;
