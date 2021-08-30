import React, { useRef, useState, useLayoutEffect } from 'react';
import Skill, { ITool } from './Skill';
import CategorySelector from './CategorySelector';

import { ReactComponent as bashLogo } from '@assets/logos/bash-logo.svg';
import { ReactComponent as cppLogo } from '@assets/logos/cpp-logo.svg';
import { ReactComponent as concourseLogo } from '@assets/logos/concourse-logo.svg';
import { ReactComponent as dockerLogo } from '@assets/logos/docker-logo.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express-logo.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase-logo.svg';
import { ReactComponent as goLogo } from '@assets/logos/go-logo.svg';
import { ReactComponent as gitLogo } from '@assets/logos/git-logo.svg';
import { ReactComponent as htmlCssLogo } from '@assets/logos/html-css-logo.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript-logo.svg';
import { ReactComponent as kubernetesLogo } from '@assets/logos/kubernetes-logo.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb-logo.svg';
import { ReactComponent as mysqlLogo } from '@assets/logos/mysql-logo.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node-logo.svg';
import { ReactComponent as postgresqlLogo } from '@assets/logos/postgresql-logo.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react-logo.svg';
import { ReactComponent as railsLogo } from '@assets/logos/rails-logo.svg';
import { ReactComponent as redisLogo } from '@assets/logos/redis-logo.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux-logo.svg';
import { ReactComponent as rubyLogo } from '@assets/logos/ruby-logo.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass-logo.svg';
import { ReactComponent as sqliteLogo } from '@assets/logos/sqlite-logo.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript-logo.svg';

interface ISkillCategory {
	title: string;
	skills: ITool[];
}

const CATEGORIES: ISkillCategory[] = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'JavaScript', Logo: jsLogo },
			{ name: 'TypeScript', Logo: tsLogo },
			{ name: 'HTML & CSS', Logo: htmlCssLogo },
			{ name: 'SASS', Logo: sassLogo },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'Go', Logo: goLogo },
			{ name: 'Ruby', Logo: rubyLogo },
			{ name: 'Rails', Logo: railsLogo },
			{ name: 'C++', Logo: cppLogo },
		],
	},
	{
		title: 'Databases',
		skills: [
			{ name: 'MongoDB', Logo: mongoDbLogo },
			{ name: 'Redis', Logo: redisLogo },
			{ name: 'MySQL', Logo: mysqlLogo },
			{ name: 'PostgreSQL', Logo: postgresqlLogo },
			{ name: 'SQLite', Logo: sqliteLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
		],
	},
	{
		title: 'Devops',
		skills: [
			{ name: 'Git', Logo: gitLogo },
			{ name: 'Docker', Logo: dockerLogo },
			{ name: 'Kubernetes', Logo: kubernetesLogo },
			{ name: 'Concourse', Logo: concourseLogo },
			{ name: 'Bash', Logo: bashLogo },
		],
	},
];

const Skills = React.forwardRef<HTMLElement>((_, ref) => {
	const [category, setCategory] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const pageWidth = containerRef.current?.clientWidth || 0;
		containerRef.current?.scroll({ top: 0, left: pageWidth * category, behavior: 'smooth' });
	}, [category]);

	return (
		<section className='skills' ref={ref}>
			<h2 className='skills__title' data-aos='fade-up'>
				My Skills
			</h2>
			<p className='skills__description' data-aos='fade-up'>
				Since starting my software development journey, I've gained experience with a variety
				technologies and I'm actively learning even more. During my most recent internship, I
				learned how to develop front-end applications with Javascript and back-end applications with
				C++.
			</p>
			<CategorySelector
				categories={CATEGORIES.map(({ title }) => title)}
				category={category}
				onChange={setCategory}
			/>
			<div className='skills__container' ref={containerRef}>
				{CATEGORIES.map(({ title, skills }) => (
					<div className={`skills__page skills__page--${title}`} key={title}>
						{skills.map((skill) => (
							<Skill key={skill.name} skill={skill} />
						))}
					</div>
				))}
			</div>
		</section>
	);
});

export default Skills;
