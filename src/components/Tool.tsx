import React from 'react';
import Tooltip from 'react-tooltip';

export interface ITool {
	name: string;
	Logo: React.FC<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

interface ToolProps {
	tool: ITool;
}

const Tool: React.FC<ToolProps> = ({ tool: { name, Logo } }) => {
	return (
		<div className='inline-block mr-5'>
			<Tooltip effect='solid' />
			<Logo className='h-12 w-auto text-primary fill-current' data-tip={name} />
		</div>
	);
};

export default Tool;
