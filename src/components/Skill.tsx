import React from 'react';
import { ITool } from './Tool';

interface SkillProps {
	skill: ITool;
}

const Skill: React.FC<SkillProps> = ({ skill: { name, Logo } }) => {
	return (
		<div className='group flex items-center h-full py-6 dark:bg-gray-5 bg-gray-1 relative rounded-lg'>
			<div className='absolute w-4 h-0 top-0 left-0 bg-primary transition-all group-hover:h-full' />
			<Logo className='w-auto h-16 px-8' />
			<h3 className='text-3xl font-bold'>{name}</h3>
		</div>
	);
};

export default Skill;
