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
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className="card">
				<div className="card-img">
					<img src={attributes.firstImage.url} />
				</div>
				<div className="card-content">
					<p>{attributes.firstContent}</p>
				</div>
				<div className="card-link">
					<a href={attributes.firstLink}>{attributes.firstLinkText}</a>
				</div>
			</div>
			<div className="card">
				<div className="card-img">
					<img src={attributes.secondImage.url} />
				</div>
				<div className="card-content">
					<p>{attributes.secondContent}</p>
				</div>
				<div className="card-link">
					<a href={attributes.secondLink}>{attributes.secondLinkText}</a>
				</div>
			</div>
			<div className="card">
				<div className="card-img">
					<img src={attributes.thirdImage.url} />
				</div>
				<div className="card-content">
					<p>{attributes.thirdContent}</p>
				</div>
				<div className="card-link">
					<a href={attributes.thirdLink}>{attributes.thirdLinkText}</a>
				</div>
			</div>
		</div>
	);
}
