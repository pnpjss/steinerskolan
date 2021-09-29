/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
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
