import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className="card">
				<a href={attributes.firstLink}>
					<div className="card-img">
						<img src={attributes.firstImage.url} />
					</div>
					<div className="card-content">
						<p>{attributes.firstContent}</p>
					</div>
					<div className="card-link">
						<a href={attributes.firstLink}>{attributes.firstLinkText}</a>
					</div>
				</a>
			</div>
			<div className="card">
				<a href={attributes.secondLink}>
					<div className="card-img">
						<img src={attributes.secondImage.url} />
					</div>
					<div className="card-content">
						<p>{attributes.secondContent}</p>
					</div>
					<div className="card-link">
						<a href={attributes.secondLink}>{attributes.secondLinkText}</a>
					</div>
				</a>
			</div>
			<div className="card">
				<a href={attributes.thirdLink}>
					<div className="card-img">
						<img src={attributes.thirdImage.url} />
					</div>
					<div className="card-content">
						<p>{attributes.thirdContent}</p>
					</div>
					<div className="card-link">
						<a href={attributes.thirdLink}>{attributes.thirdLinkText}</a>
					</div>
				</a>
			</div>
		</div>
	);
}
