import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import backgroundImage from "./images/green.png";
import closeBtn from "./images/Closebtn.svg";
import openBtn from "./images/Openbtn.svg";

export default function Save({ attributes }) {
	const { title, image, content } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className={"year-box"} id={title[0].split(" ").join("")}>
				<div className="year-top-border">
					<h2>{title}</h2>
					<img src={backgroundImage} />
				</div>
				<div className="year-content-box">
					<div className="year-img">
						<img src={image.url} />
					</div>
					<div className="year-content">
						<p>{content}</p>
					</div>
				</div>
			</div>

			<div className="year-box-mobile">
				<button className="year-btn">
					{title}
					<div className="open-btn">
						<img src={openBtn} />
					</div>
					<div className="close-btn">
						<img src={closeBtn} />
					</div>
				</button>
				<div
					className={"year-box-content-hidden " + title[0].split(" ").join("")}
				>
					<div className="year-img">
						<img src={image.url} />
					</div>
					<p>{content}</p>
				</div>
			</div>
		</section>
	);
}
