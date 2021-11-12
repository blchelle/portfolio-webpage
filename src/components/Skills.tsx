import React, { useRef, useState, useLayoutEffect } from 'react';
import Skill from '@components/Skill';
import CategorySelector from '@components/CategorySelector';
import SKILLS_CONTENT from '@content/skills';

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
				categories={SKILLS_CONTENT.map(({ title }) => title)}
				category={category}
				onChange={setCategory}
			/>
			<div
				className='w-full flex overflow-x-hidden dark:bg-gray-6 bg-gray-2 rounded-xl'
				ref={containerRef}
			>
				{SKILLS_CONTENT.map(({ title, skills }) => (
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
