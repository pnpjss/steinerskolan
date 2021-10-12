import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { title, calendarItems } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<h3>{title}</h3>
			<ul>{calendarItems}</ul>
		</div>
	);
}
