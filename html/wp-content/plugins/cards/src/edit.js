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
					<RichText
						placeholder={__("write url here, for example '/about-us'", "card")}
						tagName={"p"}
						value={attributes.firstLink}
						onChange={(value) => setAttributes({ firstLink: value })}
					/>
					<RichText
						placeholder={__("write link text here", "card")}
						tagName={"p"}
						value={attributes.firstLinkText}
						onChange={(value) => setAttributes({ firstLinkText: value })}
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
					<RichText
						placeholder={__("write url here, for example '/about-us'", "card")}
						tagName={"p"}
						value={attributes.secondLink}
						onChange={(value) => setAttributes({ secondLink: value })}
					/>
					<RichText
						placeholder={__("write link text here", "card")}
						tagName={"p"}
						value={attributes.secondLinkText}
						onChange={(value) => setAttributes({ secondLinkText: value })}
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
					<RichText
						placeholder={__("write url here, for example '/about-us'", "card")}
						tagName={"p"}
						value={attributes.thirdLink}
						onChange={(value) => setAttributes({ thirdLink: value })}
					/>
					<RichText
						placeholder={__("write link text here", "card")}
						tagName={"p"}
						value={attributes.thirdLinkText}
						onChange={(value) => setAttributes({ thirdLinkText: value })}
					/>
				</div>
			</div>
		</div>
	);
}
