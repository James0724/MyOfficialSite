import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { debounce } from "../utilities/helper";
import Menu from "./Menu";

const Header = ({ history }) => {
	// State of our Menu
	const [state, setState] = useState({
		initial: false,
		clicked: null,
		menuName: "Menu",
	});
	// State of our button
	const [disabled, setDisabled] = useState(false);

	//State for setting menu vissible or not
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 30) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	//Use Effect
	useEffect(() => {
		//Listening for page changes.
		history.listen(() => {
			document.body.style.overflow = "visible";
			setState({ clicked: false, menuName: "Menu" });
		});
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [history, prevScrollPos, visible, handleScroll]);

	// Toggle menu
	const handleMenu = () => {
		disableMenu();
		if (state.initial === false) {
			document.body.style.overflow = "hidden";
			setState({
				initial: null,
				clicked: true,
				menuName: "Close",
			});
		} else if (state.clicked === true) {
			document.body.style.overflow = "visible";
			setState({
				clicked: !state.clicked,
				menuName: "Menu",
			});
		} else if (state.clicked === false) {
			document.body.style.overflow = "hidden";
			setState({
				clicked: !state.clicked,
				menuName: "Close",
			});
		}
	};

	//Determine if out menu button should be disabled
	const disableMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	return (
		<header className="header">
			<div
				className="outer-header fixed"
				style={{ top: visible ? "0" : "-80px" }}
			>
				<div className="container">
					<div className="wrapper">
						<div className="inner-header">
							<div className="logo">
								<Link to="/">Kahoro.dev</Link>
							</div>
							<div className="menu">
								<button disabled={disabled} onClick={handleMenu}>
									{state.menuName}
								</button>
							</div>
						</div>
					</div>
				</div>
				<Menu state={state} />
			</div>
		</header>
	);
};

export default withRouter(Header);
