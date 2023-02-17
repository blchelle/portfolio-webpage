import React from 'react';

import classes from '@tailwind/Project';
import Button from '@components/Button';
import Card from '@components/Card';
import Tool, { ITool } from '@components/Tool';

import { ReactComponent as PlayIcon } from '@assets/icons/play.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github.svg';

export interface IProject {
	name: string;
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	tools: ITool[];
	description: string;
	mockup: string;
	liveUrl?: string;
	liveUrlTooltip?: string;
	githubUrl?: string;
}

interface ProjectProps {
	project: IProject;
}

const Project: React.FC<ProjectProps> = ({
	project: { name, description, Logo, mockup, tools, liveUrl, githubUrl, liveUrlTooltip },
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
					<Button
						text='Live Demo'
						onClick={() => window.open(liveUrl, '_blank')}
						Icon={PlayIcon}
						style={{ marginRight: '1rem' }}
						disabled={liveUrl === undefined}
						tooltip={liveUrlTooltip}
					/>
					<Button
						onClick={() => window.open(githubUrl, '_blank')}
						text='Repository'
						Icon={GithubIcon}
						color='github'
						disabled={githubUrl === undefined}
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
