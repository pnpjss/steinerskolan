import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/cards", {
	title: __("My-card-block"),
	icon: "shield",
	category: "widgets",
	attributes: {
		firstImage: {
			type: "object",
			selector: "card-img",
		},
		firstContent: {
			type: "array",
			source: "children",
			selector: "p",
		},
		firstLink: {
			type: "string",
			selector: "p",
		},
		firstLinkText: {
			type: "array",
			selector: "p",
		},
		secondImage: {
			type: "object",
			selector: "card-img",
		},
		secondContent: {
			type: "array",
			source: "children",
			selector: "p",
		},
		secondLink: {
			type: "string",
			selector: "p",
		},
		secondLinkText: {
			type: "array",
			selector: "p",
		},
		thirdImage: {
			type: "object",
			selector: "card-img",
		},
		thirdContent: {
			type: "array",
			source: "children",
			selector: "p",
		},
		thirdLink: {
			type: "string",
			selector: "p",
		},
		thirdLinkText: {
			type: "array",
			selector: "p",
		},
	},
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
});
