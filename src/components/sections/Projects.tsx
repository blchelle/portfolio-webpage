import React from 'react';
import Project from '@components/Project';
import PROJECTS_CONTENT from '@content/projects';
import classes from '@tailwind/Projects';

const Projects: React.FC = () => {
	return (
		<div className={classes.container}>
			{PROJECTS_CONTENT.map((project, index) => (
				<React.Fragment key={project.name}>
					<Project project={project} />
					{index < PROJECTS_CONTENT.length - 1 && <div className={classes.divider} />}
				</React.Fragment>
			))}
		</div>
	);
};

export default Projects;
