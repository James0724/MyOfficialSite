import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { animateFrom, hide } from "./Animations";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ setProject }) {
	const { title, projectDescription, techlist, links, projectImage } =
		setProject;

	useEffect(() => {
		gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
			hide(elem);

			ScrollTrigger.create({
				trigger: elem,
				onEnter: function () {
					animateFrom(elem);
				},
				// onEnterBack: function () {
				// 	animateFrom(elem);
				// },
				// onLeave: function () {
				// 	hide(elem);
				// },
			});
		});
	}, []);

	return (
		<>
			<div className="project__item__img gs_reveal gs_reveal_fromLeft">
				<img
					src={projectImage.url}
					alt={projectImage.title}
					className="img-project"
					data-scroll
				/>
			</div>
			<div className="project__item__content gs_reveal gs_reveal_fromRight">
				<div className="title-wrapper">
					<div className="project-number"></div>
					<div className="numbered-title"></div>
				</div>
				<div className="project-title">
					<h2>{title}</h2>
				</div>
				<div className="project-description">
					<p>{projectDescription}</p>
				</div>

				<ul className="project-techlist">
					{techlist.map((tech, i) => (
						<li key={i} className="project-tech">
							{tech}
						</li>
					))}
				</ul>
				<div className="project-view">
					<div className="link">
						<h1>
							<a
								href={links}
								aria-label="External Link"
								rel="noopener noreferrer"
								target="_blank"
							>
								Demo
							</a>
							<div className="link__highlight"></div>
						</h1>
						<div className="link__underline"></div>
					</div>

					<div className="link">
						<h1>
							<a
								href={links}
								aria-label="External Link"
								rel="noopener noreferrer"
								target="_blank"
							>
								Code Repo
							</a>
							<div className="link__highlight"></div>
						</h1>
						<div className="link__underline"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
