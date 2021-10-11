import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className="hero-img">
				<img src={attributes.image.url} />
			</div>
			<div className="hero-content">
				<h1>{attributes.title}</h1>
				<p>{attributes.content}</p>
				<div className="hero-links">
					<a href={attributes.firstUrl}>{attributes.firstLink}</a>
					<a href={attributes.secondUrl}>{attributes.secondLink}</a>
				</div>
			</div>
		</div>
	);
}
