import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className="interview interview-1">
				<div className="interview-img">
					<img src={attributes.firstImage.url} />
				</div>
				<div className="interview-content">
					<h3>{attributes.firstTitle}</h3>
					<span>{attributes.firstSpan}</span>
					<p>{attributes.firstContent}</p>
				</div>
			</div>
			<div className="interview interview-2">
				<div className="interview-img">
					<img src={attributes.secondImage.url} />
				</div>
				<div className="interview-content">
					<h3>{attributes.secondTitle}</h3>
					<span>{attributes.secondSpan}</span>
					<p>{attributes.secondContent}</p>
				</div>
			</div>
			<div className="interview interview-3">
				<div className="interview-img">
					<img src={attributes.thirdImage.url} />
				</div>
				<div className="interview-content">
					<h3>{attributes.thirdTitle}</h3>
					<span>{attributes.thirdSpan}</span>
					<p>{attributes.thirdContent}</p>
				</div>
			</div>
		</div>
	);
}
