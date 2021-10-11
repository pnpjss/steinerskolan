import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/frontpage-textmedia-block", {
	title: __("Frontpage-textmedia-block"),
	icon: "shield",
	category: "widgets",
	attributes: {
		title: {
			type: "array",
			source: "children",
			selector: "h3",
		},
		image: {
			type: "object",
			selector: ".block-img",
		},
		content: {
			type: "array",
			source: "children",
			selector: "p",
		},
	},

	edit: Edit,

	save: Save,
});
