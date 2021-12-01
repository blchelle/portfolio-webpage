import React from 'react';
import classes from '@tailwind/ContactHighlight';

interface ContactHighlightProps {
	title: string;
	subtitle: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url?: string;
}

const ContactHighlight: React.FC<ContactHighlightProps> = ({ title, subtitle, Icon, url }) => {
	let linkProps = {};
	if (url) linkProps = { href: url, target: '_blank' };

	return (
		<a className={classes.container(url !== undefined)} {...linkProps}>
			<div className={classes.iconContainer}>
				<Icon className={classes.icon} />
			</div>
			<div className={classes.contentContainer}>
				<h4 className={classes.title}>{title}</h4>
				<p className={classes.subtitle}>{subtitle}</p>
			</div>
		</a>
	);
};

export default ContactHighlight;
