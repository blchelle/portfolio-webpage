import React from 'react';

import { ITool } from '@components/Skill';

import { ReactComponent as PlayIcon} from '@assets/icons/play.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github-logo.svg';

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
		}
	]

	return (
		<div className='grid gap-8 grid-cols-1 xl:grid-cols-2 mb-16'>
			<div className='flex-center rounded-lg bg-gray-6 border-gray-7 border-2' data-aos='fade-right'>
				<img src={mockup} alt={`${name} Mockup`} className='w-3/4 p-8 xl:w-full' />
			</div>
			<div>
				<div className='flex flex-col p-8 rounded-lg mb-8 bg-gray-6 border-gray-7 border-2' data-aos='fade-left'>
					<div className='flex items-center mb-8'>
						<Logo className='w-20 mr-8' />
						<h3>{name}</h3>
					</div>
					<div>
						{tools.map(({ name, Logo: ToolLogo }, i) => (
							<div className='inline-block mr-5'>
								<ToolLogo key={name} className='h-12 w-auto text-primary fill-current' title={name} />
							</div>
						))}
					</div>
				</div>
				<p>{description}</p>
				<div className='flex justify-start w-full mt-16'>
					{ PROJECT_BUTTONS.map(({ text, url, Icon: ButtonIcon, bgColor, hoverBgColor }) => (
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={`flex-center w-72 h-16 mr-4 text-2xl font-bold rounded-lg transition-colors ${bgColor} ${hoverBgColor}`}>
							{text}
							<ButtonIcon className='h-10 w-10 ml-4' title={text} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
