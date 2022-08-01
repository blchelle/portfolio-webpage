import React, { useRef, useState, useLayoutEffect } from 'react';

import classes from '@tailwind/Skills';
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
			<div className={classes.description}>
				These are some tools that I've become proficient with since starting my career as
				a Software Engineer
			</div>
			<CategorySelector
				categories={SKILLS_CONTENT.map(({ title }) => title)}
				category={category}
				onChange={setCategory}
			/>
			<Card className={classes.card} paddingClass='p-0' ref={containerRef} animation='fade-down'>
				{SKILLS_CONTENT.map(({ title, skills }) => (
					<div className={classes.categoryPage} style={{ flex: '0 0 100%' }} key={title}>
						{skills.map((skill) => (
							<Card className={classes.skillCard} key={skill.name}>
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
