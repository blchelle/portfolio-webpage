import React from 'react';

export interface ITool {
	name: string;
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

interface SkillProps {
	skill: ITool;
}

const Skill: React.FC<SkillProps> = ({ skill: { name, Logo } }) => {
	return (
		<div className='group flex items-center h-full py-16 px-8 bg-gray-7 relative'>
			<div className='absolute w-4 h-0 top-0 left-0 bg-primary transition-all group-hover:h-full' />
			<Logo className='w-auto h-24 px-8' />
			<h3 className='text-5xl font-bold'>{name}</h3>
		</div>
	);
};

export default Skill;
