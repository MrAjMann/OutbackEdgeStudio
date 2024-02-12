export const menuSlide = {
	initial: {
		x: "80%",
		y: "0%",
		height: "0vh",
	},

	enter: {
		x: "0%",
		y: "0%",
		height: "100%",
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		delay: 1,
		x: "0%",
		y: "0%",
		height: "0vh",
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
	},
};

export const slide = {
	initial: {
		x: "-10px",
	},
	enter: {
		x: "0px",
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: "550%",
		transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
	},
};
