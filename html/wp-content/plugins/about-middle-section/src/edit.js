import { __ } from "@wordpress/i18n";
import "./editor.scss";

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
			<div className="about-middle-section-grid">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ image: media })}
						allowedTypes={["image"]}
						value={image ? image.id : ""}
						render={({ open }) =>
							image ? (
								<div className="img-top">
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
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ imgMiddle: media })}
						allowedTypes={["image"]}
						value={imgMiddle ? imgMiddle.id : ""}
						render={({ open }) =>
							imgMiddle ? (
								<div className="img-top">
									<img src={imgMiddle.url} width={imgMiddle.width / 2} />

									<Button
										onClick={() => setAttributes({ imgMiddle: "" })}
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
			</div>
		</div>
	);
}
