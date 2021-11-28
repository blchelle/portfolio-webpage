import React from 'react';

import classes from '@tailwind/Skill';
import { ITool } from './Tool';

interface SkillProps {
	skill: ITool;
}

const Skill: React.FC<SkillProps> = ({ skill: { name, Logo } }) => {
	return (
		<>
			<div className={classes.stripe} />
			<Logo className={classes.logo} />
			<h3 className={classes.name}>{name}</h3>
		</>
	);
};

export default Skill;
