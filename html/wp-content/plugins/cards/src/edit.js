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
	const { firstImage, secondImage, thirdImage } = attributes;
	return (
		<div {...useBlockProps()}>
			<div className="card">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ firstImage: media })}
						allowedTypes={["image"]}
						value={firstImage ? firstImage.id : ""}
						render={({ open }) =>
							firstImage ? (
								<div className="card-img">
									<img src={firstImage.url} width={firstImage.width / 2} />

									<Button
										onClick={() => setAttributes({ firstImage: "" })}
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
				<div className="card-content">
					<RichText
						placeholder={__("write your paragraph here", "card")}
						tagName={"p"}
						value={attributes.firstContent}
						onChange={(value) => setAttributes({ firstContent: value })}
					/>
				</div>
			</div>
			<div className="card">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ secondImage: media })}
						allowedTypes={["image"]}
						value={secondImage ? secondImage.id : ""}
						render={({ open }) =>
							secondImage ? (
								<div className="card-img">
									<img src={secondImage.url} width={secondImage.width / 2} />

									<Button
										onClick={() => setAttributes({ secondImage: "" })}
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
				<div className="card-content">
					<RichText
						placeholder={__("write your paragraph here", "card")}
						tagName={"p"}
						value={attributes.secondContent}
						onChange={(value) => setAttributes({ secondContent: value })}
					/>
				</div>
			</div>
			<div className="card">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ thirdImage: media })}
						allowedTypes={["image"]}
						value={thirdImage ? thirdImage.id : ""}
						render={({ open }) =>
							thirdImage ? (
								<div className="card-img">
									<img src={thirdImage.url} width={thirdImage.width / 2} />

									<Button
										onClick={() => setAttributes({ thirdImage: "" })}
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
				<div className="card-content">
					<RichText
						placeholder={__("write your paragraph here", "card")}
						tagName={"p"}
						value={attributes.thirdContent}
						onChange={(value) => setAttributes({ thirdContent: value })}
					/>
				</div>
			</div>
		</div>
	);
}
