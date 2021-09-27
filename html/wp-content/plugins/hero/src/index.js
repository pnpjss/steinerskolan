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
			source: "children",
			selector: "a",
		},
		secondLink: {
			type: "array",
			source: "children",
			selector: "a",
		},
	},

	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
});
