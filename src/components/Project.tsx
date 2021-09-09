import React from 'react';

import { ITool } from '@components/Skill';

import playIcon from '@assets/icons/play.svg';
import githubIcon from '@assets/logos/github-logo.svg';

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

const Project: React.FC<ProjectProps> = ({
	project: { name, description, Logo, mockup, tools, liveUrl, githubUrl },
}) => {
	return (
		<div className='projects__project'>
			<div className='projects__project__mockup__container' data-aos='fade-right'>
				<img src={mockup} alt={`${name} Mockup`} className='projects__project__mockup' />
			</div>
			<div className='projects__project__content'>
				<div className='projects__project__head'>
					<Logo className='projects__project__logo' />
					<h3 className='projects__project__name'>{name}</h3>
				</div>
				<div className='projects__project__stack'>
					{tools.map(({ name, Logo: ToolLogo }, i) => (
						<div
							className='projects__project__tech__container'
							data-aos='fade-right'
							data-aos-delay={i * 50}
						>
							<ToolLogo key={name} className='projects__project__tech' title={name} />
						</div>
					))}
				</div>
				<p className='projects__project__description'>{description}</p>
				<div className='projects__project__buttons'>
					<a
						href={liveUrl}
						rel='noopener'
						target='_blank'
						className='projects__project__link projects__project__link--demo'
					>
						Live Demo
						<img className='projects__project__link__icon' src={playIcon} />
					</a>
					<a
						href={githubUrl}
						rel='noopener'
						target='_blank'
						className='projects__project__link projects__project__link--code'
					>
						Repository
						<img className='projects__project__link__icon' src={githubIcon} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
