import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/hero", {
	title: __("My hero block"),
	icon: "index-card",
	category: "layout",
	attributes: {
		title: {
			type: "array",
			source: "children",
			selector: "h1",
		},
		image: {
			type: "object",
			selector: "hero-img",
		},
		content: {
			type: "array",
			source: "children",
			selector: "p",
		},
		firstLink: {
			type: "array",
			selector: "a",
		},
		secondLink: {
			type: "array",
			selector: "a",
		},
		firstUrl: {
			type: "array",
		},
		secondUrl: {
			type: "array",
		},
	},

	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
});
