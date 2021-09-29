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
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

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
export default function Edit({ attributes, setAttributes }) {
	const { image } = attributes;

	return (
		<div {...useBlockProps()}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(image) => setAttributes({ image: image })}
					allowedTypes={["image"]}
					value={image ? image.id : ""}
					render={({ open }) =>
						image ? (
							<div className="hero-img">
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
			<div className="hero-content">
				<RichText
					placeholder={__("Title", "hero")}
					tagName={"h1"}
					value={attributes.title}
					onChange={(value) => setAttributes({ title: value })}
				/>

				<RichText
					placeholder={__("write your paragraph here", "hero")}
					tagName={"p"}
					value={attributes.content}
					onChange={(value) => setAttributes({ content: value })}
				/>
				<div className="hero-links">
					<RichText
						placeholder={__("First link title", "hero")}
						tagName={"a"}
						value={attributes.firstLink}
						onChange={(value) => setAttributes({ firstLink: value })}
					/>
					<RichText
						placeholder={__("type in url for first link", "hero")}
						value={attributes.firstUrl}
						onChange={(value) => setAttributes({ firstUrl: value })}
					/>
					<RichText
						placeholder={__("Second link title", "hero")}
						tagName={"a"}
						value={attributes.secondLink}
						onChange={(value) => setAttributes({ secondLink: value })}
					/>
					<RichText
						placeholder={__("type in url for second link", "hero")}
						value={attributes.secondUrl}
						onChange={(value) => setAttributes({ secondUrl: value })}
					/>
				</div>
			</div>
		</div>
	);
}
