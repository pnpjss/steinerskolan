import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/calendar", {
	title: __("My calendar block"),
	icon: "shield",
	category: "widgets",
	attributes: {
		title: {
			type: "array",
			source: "children",
			selector: "h2",
		},
		calendarItems: {
			type: "array",
			source: "children",
			selector: ".calendar-items",
		},
	},
	edit: Edit,

	save: Save,
});
