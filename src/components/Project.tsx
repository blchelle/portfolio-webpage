import React from 'react';

import classes from '@tailwind/Project';
import Tool, { ITool } from '@components/Tool';
import Card from '@components/Card';

import { ReactComponent as PlayIcon } from '@assets/icons/play.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github.svg';

export interface IProject {
	name: string;
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	tools: ITool[];
	description: string;
	mockup: string;
	liveUrl: string;
	githubUrl: string;
}

interface ProjectProps {
	project: IProject;
}

interface IProjectButtons {
	text: string;
	url: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	bgColor: string;
	hoverBgColor: string;
}

const Project: React.FC<ProjectProps> = ({
	project: { name, description, Logo, mockup, tools, liveUrl, githubUrl },
}) => {
	return (
		<div className={classes.container}>
			<Card className={classes.mockupContainer} animation='fade-right'>
				<img src={mockup} alt={`${name} Mockup`} className={classes.mockup} />
			</Card>
			<div className={classes.contentContainer}>
				<Card className={classes.contentHeaderCard} animation='fade-left'>
					<div className={classes.contentHeaderCardTopRow}>
						<Logo className={classes.logo} />
						<h3 className={classes.title}>{name}</h3>
					</div>
					<div>
						{tools.map((tool) => (
							<Tool tool={tool} key={tool.name} />
						))}
					</div>
				</Card>
				<p className={classes.description}>{description}</p>
				<div className={classes.buttonsContainer}>
					<a
						href={liveUrl}
						target='_blank'
						rel='noopener noreferrer'
						className={`btn ${classes.demoButton}`}
					>
						Live Demo
						<PlayIcon className={classes.buttonIcon} />
					</a>
					<a
						href={liveUrl}
						target='_blank'
						rel='noopener noreferrer'
						className={`btn ${classes.githubButton}`}
					>
						Repository
						<GithubIcon className={classes.buttonIcon} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
