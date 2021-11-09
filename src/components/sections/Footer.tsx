import React from 'react';
import { INavigationItem } from '@components/NavigationItem';

import { ReactComponent as GitHubLogo } from '@assets/logos/github.svg';
import { ReactComponent as LinkedInLogo } from '@assets/logos/linkedin.svg';

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
		<footer className='pb-36 sm:pb-8 pt-8 px-section grid grid-cols-2 gap-8 items-center bg-gray-2 dark:bg-gray-7'>
			<ul className='flex flex-col sm:flex-row'>
				{sections.map(({ title, linkToRef }) => (
					<li
						key={title}
						className='mr-10 text-gray-4 dark:text-gray-3 hover:text-primary text-2xl uppercase transition-colors'
						onClick={() => linkToRef.current?.scrollIntoView({ behavior: 'smooth' })}
					>
						<span>{title}</span>
					</li>
				))}
			</ul>
			<div className='flex items-center justify-end'>
				{SOCIAL_LINKS.map(({ name, url, Icon }) => (
					<a
						href={url}
						aria-label={name}
						rel='noopener'
						target='_blank'
						className='flex-center text-gray-4 hover:text-primary fill-current transition-colors mr-4'
					>
						<Icon className='w-12 h-12' />
					</a>
				))}
			</div>
			<small className='text-gray-4 text-2xl'>Brock Chelle, 2020</small>
		</footer>
	);
};

export default Footer;
