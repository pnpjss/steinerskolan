import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { image } = attributes;
	return (
		<div {...useBlockProps()}>
			<div className="year-box">
				<div className="year-top-border">
					<RichText
						placeholder={__("Title", "year")}
						tagName={"h2"}
						value={attributes.title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				</div>
				<div className="year-content-box">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ image: media })}
							allowedTypes={["image"]}
							value={image ? image.id : ""}
							render={({ open }) =>
								image ? (
									<div className="year-img">
										<img src={image.url} width={image.width / 2} />

										<Button
											onClick={() => setAttributes({ image: "" })}
											className="button is-small"
										>
											Remove
										</Button>
									</div>
								) : (
									<div className="year-img">
										<Button onClick={open} className="open-btn">
											Upload image
										</Button>
									</div>
								)
							}
						/>
					</MediaUploadCheck>
					<div className="year-content">
						<RichText
							placeholder={__("Content", "year")}
							tagName={"p"}
							value={attributes.content}
							onChange={(value) => setAttributes({ content: value })}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
