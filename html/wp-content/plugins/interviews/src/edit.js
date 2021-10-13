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
			<div className="interview">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ firstImage: media })}
						allowedTypes={["image"]}
						value={firstImage ? firstImage.id : ""}
						render={({ open }) =>
							firstImage ? (
								<div className="interview-img">
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
				<div className="interview-content">
					<RichText
						placeholder={__("write your title here", "interview")}
						tagName={"h3"}
						value={attributes.firstTitle}
						onChange={(value) => setAttributes({ firstTitle: value })}
					/>
					<RichText
						placeholder={__("occupation", "interview")}
						tagName={"span"}
						value={attributes.firstSpan}
						onChange={(value) => setAttributes({ firstSpan: value })}
					/>
					<RichText
						placeholder={__("write your paragraph here", "interview")}
						tagName={"p"}
						value={attributes.firstContent}
						onChange={(value) => setAttributes({ firstContent: value })}
					/>
				</div>
			</div>
			<div className="interview">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ secondImage: media })}
						allowedTypes={["image"]}
						value={secondImage ? secondImage.id : ""}
						render={({ open }) =>
							secondImage ? (
								<div className="interview-img">
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
				<div className="interview-content">
					<RichText
						placeholder={__("write your title here", "interview")}
						tagName={"h3"}
						value={attributes.secondTitle}
						onChange={(value) => setAttributes({ secondTitle: value })}
					/>
					<RichText
						placeholder={__("occupation", "interview")}
						tagName={"span"}
						value={attributes.secondSpan}
						onChange={(value) => setAttributes({ secondSpan: value })}
					/>
					<RichText
						placeholder={__("write your paragraph here", "interview")}
						tagName={"p"}
						value={attributes.secondContent}
						onChange={(value) => setAttributes({ secondContent: value })}
					/>
				</div>
			</div>
			<div className="interview">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ thirdImage: media })}
						allowedTypes={["image"]}
						value={thirdImage ? thirdImage.id : ""}
						render={({ open }) =>
							thirdImage ? (
								<div className="interview-img">
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
				<div className="interview-content">
					<RichText
						placeholder={__("write your title here", "interview")}
						tagName={"h3"}
						value={attributes.thirdTitle}
						onChange={(value) => setAttributes({ thirdTitle: value })}
					/>
					<RichText
						placeholder={__("occupation", "interview")}
						tagName={"span"}
						value={attributes.thirdSpan}
						onChange={(value) => setAttributes({ thirdSpan: value })}
					/>
					<RichText
						placeholder={__("write your paragraph here", "interview")}
						tagName={"p"}
						value={attributes.thirdContent}
						onChange={(value) => setAttributes({ thirdContent: value })}
					/>
				</div>
			</div>
		</div>
	);
}
