/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF868E",
				"primary-soft": "#FBE0DC",
				"primary-dark": "#543C3D",
				success: "#97EAB9",
				warning: "#FFD280",
				purple: "#B4B7FF",
				gray: "#E5E5E5",
				"gray-dark": "#8C8C8C",
				black: "#1D1D1D",
				"black-soft": "#292929",
				"black-light": "#343434",
			},
			screens: {
				"2xl": { max: "1535px" },
				xl: { max: "1279px" },
				lg: { max: "1023px" },
				md: { max: "767px" },
				sm: { max: "639px" },
			},
		},
	},
	darkMode: "class",
	plugins: [require("tailwindcss-global-dark")],
};
