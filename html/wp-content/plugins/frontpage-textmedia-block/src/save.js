import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { title, content, image } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="textmedia-block">
				<div className="textmedia-block-content">
					<h3>{title}</h3>
					<p>{content}</p>
					<div className="textmedia-block-link">
						<a href="/om-oss">Läs mer</a>
					</div>
				</div>
				<div className="block-img">
					<img src={image.url} />
				</div>
			</div>
		</div>
	);
}
