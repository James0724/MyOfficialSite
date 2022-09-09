import React from "react";

function HomeWrapper() {
	return (
		<section className="panel first" id="home">
			<div className="home gs_reveal">
				<div className="home__info">
					<h3 className="home__info__intro">Hi, my name is</h3>
					<h1 className="home__info__name">JAMES KAHORO</h1>
					<h3 className="home__info__profession">Full stack web developer</h3>
				</div>

				<div className="scroll-down">
					<span className="arrow-down"></span>
					<span id="scroll-title">About</span>
				</div>
			</div>
		</section>
	);
}

export default HomeWrapper;
