import React, { Component } from "react";
//import ProjectCard from "./ProjectCard";
//import Wave from "./Wave";

// const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
// const spaceId = process.env.REACT_APP_SPACE_ID;

// const query = `
// {
//   projectCollection {
//     items {
//       title
//       projectImage {
//         url,
// 		title
//       }
//       projectDescription
//       techlist
//       links
//     }
//   }
// }

// `;

class NonFeaturedWorks extends Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		projects: [],
	// 		loading: true,
	// 	};
	// }

	// componentDidMount() {
	// 	fetch(
	// 		`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"content-type": "application/json",
	// 				authorization: `Bearer ${accessToken}`,
	// 			},
	// 			body: JSON.stringify({
	// 				query,
	// 			}),
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((response) => {
	// 			const { data } = response;
	// 			this.setState({
	// 				loading: false,
	// 				projects: data ? data.projectCollection.items : [],
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			this.setState({
	// 				loading: false,
	// 			});
	// 			console.log(error);
	// 		});
	// }

	render() {
		// if (this.state.loading) {
		// 	return (
		// 		<section id="project" className="panel">
		// 			<div className="project">
		// 				<div className="heading-wrapper gs_reveal">
		// 					<div className="heading">
		// 						<span>Some works I have done</span>
		// 						<h2>Featured Projects</h2>
		// 					</div>
		// 				</div>
		// 				<Wave />
		// 			</div>
		// 		</section>
		// 	);
		// }

		// if (!this.state.projects.length) {
		// 	return (
		// 		<section id="project" className="panel">
		// 			<div className="project">
		// 				<div className="heading-wrapper gs_reveal">
		// 					<div className="heading">
		// 						<span>Some works I have done</span>
		// 						<h2>Featured Projects</h2>
		// 					</div>
		// 				</div>
		// 				<h3>
		// 					An error occured please check your network connection and try
		// 					again
		// 				</h3>
		// 			</div>
		// 		</section>
		// 	);
		// }
		// const { projects } = this.state;

		return (
			<section id="unfeatured_works" className="panel">
				<div className="project ">
					<div className="heading-wrapper gs_reveal">
						<div className="heading">
							<span>Other notable works that I have worked on</span>
							<h2>Projects</h2>
						</div>
					</div>
					{/* {projects.map((project, i) => (
						<div key={i} className="unfeatured_item">
							<ProjectCard setProject={project} />
						</div>
					))} */}
				</div>
			</section>
		);
	}
}
export default NonFeaturedWorks;
