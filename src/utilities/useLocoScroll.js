import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocalScroll() {
	useEffect(() => {
		const scrollEl = document.querySelector("#main-container");
		const locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
		});
	}, []);
}
