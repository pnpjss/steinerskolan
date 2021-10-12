import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<RichText
				placeholder={__("titel", "calendar")}
				tagName={"h3"}
				value={attributes.title}
				onChange={(value) => setAttributes({ title: value })}
			/>
			<RichText
				placeholder={__("Skriv en lista med kommande evenemang", "calendar")}
				tagName={"ul"}
				multiline={"li"}
				value={attributes.calendarItems}
				className="calendar-items"
				onChange={(value) => setAttributes({ calendarItems: value })}
			/>
		</div>
	);
}
