import React from 'react';

import classes from '@tailwind/Experience';
import Card from '@components/Card';

export interface IExperience {
	name: string;
	position: string;
	startEndYears: [number, number | string];
	bulletPoints: React.ReactElement;
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	SecondaryLogo?: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string | undefined }
	>;
	logoBackgroundClass: 'TAILWIND_STRING';
	backgroundImage: string;
}

interface ExperienceProps {
	experience: IExperience;
}

const Experience: React.FC<ExperienceProps> = ({
	experience: {
		name,
		position,
		startEndYears,
		bulletPoints,
		backgroundImage,
		Logo,
		SecondaryLogo,
		logoBackgroundClass,
	},
}) => {
	return (
		<div className={classes.container}>
			<div className={classes.contentContainer}>
				<Card className={classes.contentCard} animation='fade-right'>
					<div className='flex'>
						{SecondaryLogo !== undefined ? (
							<SecondaryLogo className={classes.headerLogo} />
						) : (
							<Logo className={classes.headerLogo} />
						)}
						<h3 className={classes.title}>{name}</h3>
					</div>
					<div className={classes.subtitle}>
						<p>{position}</p>
						<p>
							{startEndYears[0] === startEndYears[1]
								? startEndYears[0]
								: startEndYears[0] + '-' + startEndYears[1]}
						</p>
					</div>
				</Card>
				{bulletPoints}
			</div>
			<div className={classes.imagesContainer} data-aos='fade-left'>
				<div className={classes.image}>
					<img src={backgroundImage} />
				</div>
				<div className={classes.logoContainer(logoBackgroundClass)}>
					<Logo className={classes.logo} />
				</div>
			</div>
		</div>
	);
};

export default Experience;
