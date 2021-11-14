import React from 'react';
import Project from '@components/Project';
import { SectionChildProps } from '@components/Section';
import PROJECTS_CONTENT from '@content/projects';

const Projects: React.FC<SectionChildProps> = ({ cardColor }) => {
	const divider = <div className='w-3/4 h-px bg-gray-6 mb-16' />;

	return (
		<div className='flex flex-col items-center'>
			{PROJECTS_CONTENT.map((project, index) => (
				<React.Fragment key={project.name}>
					<Project project={project} cardColor={cardColor} />
					{index < PROJECTS_CONTENT.length - 1 && divider}
				</React.Fragment>
			))}
		</div>
	);
};

export default Projects;
