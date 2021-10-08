/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

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
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/about-middle-section", {
	title: "About-middle-section",
	icon: "shield",
	category: "widgets",
	attributes: {
		image: { type: "array", selector: ".img-top" },
		title: { type: "text", selector: "h2" },
		pTop: { type: "array", selector: "p-top" },
		imgMiddle: { type: "object", selector: ".img-middle" },
		imgBottom: { type: "object", selector: ".img-bottom" },
		pBottom: { type: "array", selector: "p-top" },
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
