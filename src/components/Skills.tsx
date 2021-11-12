import React, { useRef, useState, useLayoutEffect } from 'react';
import Skill from '@components/Skill';
import { ITool } from '@components/Tool';
import CategorySelector from '@components/CategorySelector';

import { ReactComponent as bashLogo } from '@assets/logos/bash.svg';
import { ReactComponent as cppLogo } from '@assets/logos/cpp.svg';
import { ReactComponent as concourseLogo } from '@assets/logos/concourse.svg';
import { ReactComponent as cssLogo } from '@assets/logos/css.svg';
import { ReactComponent as dockerLogo } from '@assets/logos/docker.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase.svg';
import { ReactComponent as goLogo } from '@assets/logos/go.svg';
import { ReactComponent as gitLogo } from '@assets/logos/git.svg';
import { ReactComponent as grafanaLogo } from '@assets/logos/grafana.svg';
import { ReactComponent as htmlLogo } from '@assets/logos/html.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript.svg';
import { ReactComponent as kubernetesLogo } from '@assets/logos/kubernetes.svg';
import { ReactComponent as mariaDbLogo } from '@assets/logos/mariadb.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as netlifyLogo } from '@assets/logos/netlify.svg';
import { ReactComponent as mysqlLogo } from '@assets/logos/mysql.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as postgresqlLogo } from '@assets/logos/postgresql.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as railsLogo } from '@assets/logos/rails.svg';
import { ReactComponent as redisLogo } from '@assets/logos/redis.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as rubyLogo } from '@assets/logos/ruby.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass.svg';
import { ReactComponent as sidekiqLogo } from '@assets/logos/sidekiq.svg';
import { ReactComponent as splunkLogo } from '@assets/logos/splunk.svg';
import { ReactComponent as sqliteLogo } from '@assets/logos/sqlite.svg';
import { ReactComponent as tailwindLogo } from '@assets/logos/tailwind.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript.svg';
import { ReactComponent as webpackLogo } from '@assets/logos/webpack.svg';

interface ISkillCategory {
	title: string;
	skills: ITool[];
}

const CATEGORIES: ISkillCategory[] = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'TypeScript', Logo: tsLogo },
			{ name: 'JavaScript', Logo: jsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'HTML', Logo: htmlLogo },
			{ name: 'CSS', Logo: cssLogo },
			{ name: 'SASS', Logo: sassLogo },
			{ name: 'Tailwind', Logo: tailwindLogo },
			{ name: 'Webpack', Logo: webpackLogo },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Ruby', Logo: rubyLogo },
			{ name: 'Ruby on Rails', Logo: railsLogo },
			{ name: 'Go', Logo: goLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'C++', Logo: cppLogo },
			{ name: 'Sidekiq', Logo: sidekiqLogo },
		],
	},
	{
		title: 'Databases',
		skills: [
			{ name: 'MongoDB', Logo: mongoDbLogo },
			{ name: 'Redis', Logo: redisLogo },
			{ name: 'MySQL', Logo: mysqlLogo },
			{ name: 'PostgreSQL', Logo: postgresqlLogo },
			{ name: 'MariaDB', Logo: mariaDbLogo },
			{ name: 'SQLite', Logo: sqliteLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
		],
	},
	{
		title: 'DevOps',
		skills: [
			{ name: 'Git', Logo: gitLogo },
			{ name: 'Docker', Logo: dockerLogo },
			{ name: 'Kubernetes', Logo: kubernetesLogo },
			{ name: 'Concourse', Logo: concourseLogo },
			{ name: 'Splunk', Logo: splunkLogo },
			{ name: 'Grafana', Logo: grafanaLogo },
			{ name: 'Bash', Logo: bashLogo },
			{ name: 'Netlify', Logo: netlifyLogo },
		],
	},
];

const Skills: React.FC = () => {
	const [category, setCategory] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const pageWidth = containerRef.current?.clientWidth || 0;
		containerRef.current?.scroll({ top: 0, left: pageWidth * category, behavior: 'smooth' });
	}, [category]);

	return (
		<>
			<div className='text-3xl col-span-1 xl:col-span-2 mb-8'>
				Here are some tools that I've become incredibly proficient with since starting my career as
				a software engineer
			</div>
			<CategorySelector
				categories={CATEGORIES.map(({ title }) => title)}
				category={category}
				onChange={setCategory}
			/>
			<div
				className='w-full flex overflow-x-hidden dark:bg-gray-6 bg-gray-2 rounded-xl'
				ref={containerRef}
			>
				{CATEGORIES.map(({ title, skills }) => (
					<div
						className='p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'
						style={{ flex: '0 0 100%' }}
						key={title}
					>
						{skills.map((skill) => (
							<Skill key={skill.name} skill={skill} />
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default Skills;
