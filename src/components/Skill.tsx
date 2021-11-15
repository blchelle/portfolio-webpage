import React from 'react';
import { ITool } from './Tool';

interface SkillProps {
	skill: ITool;
}

const Skill: React.FC<SkillProps> = ({ skill: { name, Logo } }) => {
	return (
		<>
			<div className='absolute w-2 h-0 top-0 left-0 rounded-l-lg bg-primary transition-all group-hover:h-full' />
			<Logo className='w-auto h-16 mr-8' />
			<h3 className='text-3xl font-bold'>{name}</h3>
		</>
	);
};

export default Skill;
