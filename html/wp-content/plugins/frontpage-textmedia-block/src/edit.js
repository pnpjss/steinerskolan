import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { image } = attributes;
	return (
		<div {...useBlockProps()}>
			<div className="textmedia-block">
				<div className="textmedia-block-content">
					<RichText
						placeholder={__(
							"write your title here",
							"frontpage-textmedia-block"
						)}
						tagName={"h3"}
						value={attributes.title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<RichText
						placeholder={__(
							"write your paragraph here",
							"frontpage-textmedia-block"
						)}
						tagName={"p"}
						value={attributes.content}
						onChange={(value) => setAttributes({ content: value })}
					/>
				</div>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ image: media })}
						allowedTypes={["image"]}
						value={image ? image.id : ""}
						render={({ open }) =>
							image ? (
								<div className="block-img">
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
			</div>
		</div>
	);
}
