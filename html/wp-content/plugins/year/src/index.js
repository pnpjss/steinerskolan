import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import { __ } from "@wordpress/i18n";

registerBlockType("create-block/year", {
	title: __("My year block"),
	icon: "shield",
	category: "widgets",
	attributes: {
		image: {
			type: "object",
			selector: ".year-img",
		},
		topBorderImage: {
			type: "object",
			selector: ".year-top-border img",
		},
		title: {
			type: "array",
			source: "children",
			selector: "h2",
		},
		content: {
			type: "array",
			source: "children",
			selector: "p",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
});
