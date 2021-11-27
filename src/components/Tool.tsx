import React from 'react';
import Tooltip from 'react-tooltip';
import classes from '@tailwind/Tool';

export interface ITool {
	name: string;
	Logo: React.FC<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

interface ToolProps {
	tool: ITool;
}

const Tool: React.FC<ToolProps> = ({ tool: { name, Logo } }) => {
	return (
		<div className={classes.container}>
			<Tooltip effect='solid' />
			<Logo className={classes.logo} data-tip={name} />
		</div>
	);
};

export default Tool;
