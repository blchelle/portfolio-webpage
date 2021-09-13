import React from 'react';

import { INavigationItem } from './NavigationItem';

import { ReactComponent as GitHubLogo } from '@assets/logos/github-logo.svg';
import { ReactComponent as LinkedInLogo } from '@assets/logos/linkedin-logo.svg';

interface FooterProps {
	sections: INavigationItem[];
}

const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		url: 'https://github.com/blchelle',
		Icon: GitHubLogo,
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/blchelle',
		Icon: LinkedInLogo,
	},
];

const Footer: React.FC<FooterProps> = ({ sections }) => {
	return (
		<footer className='footer'>
			<ul className='footer__navbar'>
				{sections.map(({ title, linkToRef }) => (
					<li
						key={title}
						className='footer__navbar__item navbar__item--home'
						onClick={() => linkToRef.current?.scrollIntoView({ behavior: 'smooth' })}
					>
						<span>{title}</span>
					</li>
				))}
			</ul>
			<div className='footer__social-media'>
				{SOCIAL_LINKS.map(({ name, url, Icon }) => (
					<a href={url} aria-label={name} rel='noopener' target='_blank' className='footer__icon'>
						<Icon />
					</a>
				))}
			</div>
			<p className='footer__copyright'>Brock Chelle, 2020</p>
		</footer>
	);
};

export default Footer;
