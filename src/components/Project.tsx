import React from 'react';

import Tool, { ITool } from '@components/Tool';
import Card from '@components/Card';
import { SectionChildProps } from '@components/Section';

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

const Project: React.FC<ProjectProps & SectionChildProps> = ({
	project: { name, description, Logo, mockup, tools, liveUrl, githubUrl },
	cardColor,
}) => {
	const PROJECT_BUTTONS: IProjectButtons[] = [
		{
			text: 'Live Demo',
			url: liveUrl,
			Icon: PlayIcon,
			bgColor: 'bg-primary',
			hoverBgColor: 'hover:bg-primary-dark',
		},
		{
			text: 'Repository',
			url: githubUrl,
			Icon: GithubIcon,
			bgColor: 'bg-github',
			hoverBgColor: 'hover:bg-github-dark',
		},
	];

	return (
		<div className='grid gap-8 grid-cols-1 xl:grid-cols-2 mb-16'>
			<Card
				className='hidden xl:flex justify-center items-center'
				bgColorClass={cardColor}
				animation='fade-right'
			>
				<img src={mockup} alt={`${name} Mockup`} className='w-3/4 p-8 xl:w-full' />
			</Card>
			<div className='flex flex-col'>
				<Card className='flex flex-col mb-8' bgColorClass={cardColor} animation='fade-left'>
					<div className='flex items-center mb-8'>
						<Logo className='w-20 mr-8' />
						<h3 className='text-5xl font-bold'>{name}</h3>
					</div>
					<div>
						{tools.map((tool) => (
							<Tool tool={tool} key={tool.name} />
						))}
					</div>
				</Card>
				<p className='text-3xl leading-relaxed'>{description}</p>
				<div className='flex justify-start mt-auto'>
					{PROJECT_BUTTONS.map(({ text, url, Icon: ButtonIcon, bgColor, hoverBgColor }) => (
						<a
							key={text}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={`btn mr-4 ${bgColor} ${hoverBgColor}`}
						>
							{text}
							<ButtonIcon className='h-10 w-10 ml-4 text-gray-1 fill-current' title={text} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
