import React, { useRef, useState, useLayoutEffect } from 'react';
import Card from '@components/Card';
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
			<Card
				className='flex overflow-x-hidden'
				paddingClass='p-0'
				ref={containerRef}
				animation='fade-down'
			>
				{SKILLS_CONTENT.map(({ title, skills }) => (
					<div
						className='p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'
						style={{ flex: '0 0 100%' }}
						key={title}
					>
						{skills.map((skill) => (
							<Card className='group flex items-center relative' key={skill.name}>
								<Skill skill={skill} />
							</Card>
						))}
					</div>
				))}
			</Card>
		</>
	);
};

export default Skills;
