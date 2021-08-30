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
		<div className='skills__item' data-aos='zoom-in'>
			<Logo className='skill__image' />
			<h3 className='skill__name'>{name}</h3>
		</div>
	);
};

export default Skill;
