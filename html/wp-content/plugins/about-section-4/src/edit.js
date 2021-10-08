/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
// import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { image } = attributes;
	return (
		<div {...useBlockProps()}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ image: media })}
					allowedTypes={["image"]}
					value={image ? image.id : ""}
					render={({ open }) =>
						image ? (
							<div className="about-image">
								<img src={image.url} width={image.width / 2} />

								<Button
									onClick={() => setAttributes({ image: "" })}
									className="button is-small"
								>
									Remove
								</Button>
							</div>
						) : (
							<Button onClick={open} className="open-btn">
								Upload image
							</Button>
						)
					}
				/>
			</MediaUploadCheck>
			<RichText
				placeholder={__("write your title here", "title")}
				tagName={"h2"}
				value={attributes.title}
				onChange={(value) => setAttributes({ title: value })}
			/>
			<RichText
				placeholder={__("About paragraph", "text")}
				tagName={"p"}
				value={attributes.text}
				onChange={(value) => setAttributes({ text: value })}
			/>
			<RichText
				placeholder={__("Second paragraph", "text2")}
				tagName={"p2"}
				value={attributes.text2}
				onChange={(value) => setAttributes({ text2: value })}
			/>
		</div>
	);
}
