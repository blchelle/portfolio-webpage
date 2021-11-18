import React from 'react';
import Tooltip from 'react-tooltip';
import { classnames } from 'tailwindcss-classnames';

export interface ITool {
	name: string;
	Logo: React.FC<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

interface ToolProps {
	tool: ITool;
}

const Tool: React.FC<ToolProps> = ({ tool: { name, Logo } }) => {
	const containerClasses = classnames('inline-block', 'mr-5');
	const logoClasses = classnames('h-12', 'w-auto', 'text-primary', 'fill-current');

	return (
		<div className={containerClasses}>
			<Tooltip effect='solid' />
			<Logo className={logoClasses} data-tip={name} />
		</div>
	);
};

export default Tool;
