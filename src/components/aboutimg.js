import React from "react";
import Dev from "../images/dev.png";

// const backgroundImagePic = {
// 	backgroundImage: `url(${Dev})`,
// 	backgroundSize: "cover",
// 	backgroundRepeat: "no-repeat",
// 	backgroundPosition: "50% 50%",
// };
// const backgroundImage = {
// 	backgroundImage: `url(${Dev})`,
// 	backgroundSize: "cover",
// 	backgroundRepeat: "no-repeat",
// 	backgroundPosition: "50% 50%",
// };

function Aboutimg() {
	return (
		<>
			{/* <div className="imgstyle-one">
				<div className="glitch">
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
				</div>
			</div> */}
			<div className="imgstyle-two">
				<div className="image-wrapper">
					<img className="image-1" src={Dev} alt="" />
					<img className="image-2" src={Dev} alt="" />
					<img className="image-3" src={Dev} alt="" />
					<img className="image-4" src={Dev} alt="" />
				</div>
			</div>
		</>
	);
}

export default Aboutimg;
