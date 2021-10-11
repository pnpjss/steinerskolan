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
