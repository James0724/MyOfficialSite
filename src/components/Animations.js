import gsap from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
	gsap.from([node1, node2], {
		duration: 0.8,
		height: 0,
		transformOrigin: "right top",
		skewY: 2,
		ease: "power3.inOut",
		stagger: {
			amount: 0.1,
		},
	});
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
	gsap.to([node1, node2], {
		duration: 0.8,
		height: 0,
		ease: "power3.inOut",
		stagger: {
			amount: 0.07,
		},
	});
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
	gsap.from([node1, node2, node3], {
		duration: 0.8,
		y: 100,
		delay: 0.1,
		ease: "power3.inOut",
		stagger: {
			amount: 0.3,
		},
	});
};

// Animation fro entire web
export const animateFrom = (elem, direction) => {
	direction = direction || 1;
	var x = 0,
		y = direction * 100;
	if (elem.classList.contains("gs_reveal_fromLeft")) {
		x = -100;
		y = 0;
	} else if (elem.classList.contains("gs_reveal_fromRight")) {
		x = 100;
		y = 0;
	}
	elem.style.transform = "translate(" + x + "px, " + y + "px)";
	elem.style.opacity = "0";

	gsap.fromTo(
		elem,
		{ x: x, y: y, autoAlpha: 0 },
		{
			duration: 3,

			x: 0,
			y: 0,
			autoAlpha: 1,
			ease: "expo",
			overwrite: "auto",
		}
	);
};

export const hide = (elem) => {
	gsap.set(elem, { autoAlpha: 0 });
};

// export const textReverse = (text1, text2) => {
// 	gsap.set(text1, { xPercent: -100 });
// 	gsap.set(text2, { xPercent: 100 });

// 	gsap.to(text1, {
// 		xPercent: 100,
// 		scrollTrigger: {
// 			trigger: text1,
// 			scrub: true,
// 			start: "top bottom",
// 			end: "bottom top",
// 			markers: true,
// 		},
// 	});

// 	gsap.to(text2, {
// 		xPercent: -100,
// 		scrollTrigger: {
// 			trigger: text2,
// 			scrub: true,
// 			start: "top bottom",
// 			end: "bottom top",
// 			markers: true,
// 		},
// 	});
// };
