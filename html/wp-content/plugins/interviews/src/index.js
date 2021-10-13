import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/interviews", {
	title: __("My-interview-block"),
	icon: "shield",
	category: "widgets",
	attributes: {
		firstImage: {
			type: "object",
			selector: ".interview-img",
		},
		firstTitle: {
			type: "array",
			source: "children",
			selector: "h3",
		},
		firstSpan: {
			type: "array",
			source: "children",
			selector: "span",
		},
		firstContent: {
			type: "array",
			source: "children",
			selector: "p",
		},
		secondImage: {
			type: "object",
			selector: ".interview-img",
		},
		secondTitle: {
			type: "array",
			source: "children",
			selector: "h3",
		},
		secondSpan: {
			type: "array",
			source: "children",
			selector: "span",
		},
		secondContent: {
			type: "array",
			source: "children",
			selector: "p",
		},
		thirdImage: {
			type: "object",
			selector: ".interview-img",
		},
		thirdTitle: {
			type: "array",
			source: "children",
			selector: "h3",
		},
		thirdSpan: {
			type: "array",
			source: "children",
			selector: "span",
		},
		thirdContent: {
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
